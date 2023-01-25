import os
import json

def clear():
    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")

loginLoop = False
while (not loginLoop):
    clear()
    print("Please enter your username:")
    loginUser = input()
    # TODO : password view protection
    print("Please enter your password")
    loginPass = input()
    #loginFile = open("./login.py", "w+")
    with open("./login.json", "r") as loginFile:
        lines = loginFile.readlines()
        for index, line in enumerate(lines):
            #while line != '':
            loginJson = '"{}" : "{}"'.format(loginUser, loginPass)
            print(loginJson)
            print(line)
            if (loginJson in line):
                print("good")
                loginLoop = True
            else:
                print (lines[index])
                print(len(lines))
                if lines[index] == len(lines):
                    print("Incorrect username or password. Please try again.")
                    input()
                    continue
                else:
                    continue


classSearchLoop = False
while (not classSearchLoop):
    clear()
    print("Please enter the course code with the section (i.e. PPL1O1-01)")
    courseCode = input()
    if (os.path.exists("./courses/{}.py".format(courseCode.lower()))):
        courseFile = open("./courses/{}.py".format(courseCode.lower()), "w+")
        print("Opening class file.")
        classSearchLoop = True
        createClassLoop = False
    else:
        clear()
        print("That class doesn't exist. Would you like to create it? (Y/N)")
        createClass = input()
        if (createClass.lower() == "y"):
            createClassLoop = True
            classSearchLoop = True
        else:
            continue

while (createClassLoop):
    clear()
    print("Please enter the course's name:")
    courseName = input()
    print("")
    print("Please enter teacher's name:")
    courseTeacher = input()
    if (courseName == "" or courseTeacher == ""):
        continue

    fields = []
    fieldLoop = False
    while (not fieldLoop):
        clear()
        print("Please enter the name of the activities you would like students to fill. (Type DONE when finished.)")
        field = input()
        if (field == "DONE"):
            fieldLoop = True
            continue
        fields.append(field)

    courseFile = open("./courses/{}.py".format(courseCode.lower()), "w+")
    courseInfo = {"courseName": courseName, "courseCode": courseCode.lower(), "courseTeacher": courseTeacher, "fields": fields}
    parsedCourseInfo = json.dump(courseInfo, courseFile, indent = 4)
    courseFile.close()
    createClassLoop = False

