import os
import json

def clear():
    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")

classSearchLoop = False
while (not classSearchLoop):
    clear()
    print("Please enter the course code with the section (i.e. PPL1O1-01)")
    courseCode = input()
    try:
        courseFile = open("./courses/{}.py".format(courseCode.lower()))
        print("Opening class file.")
        classSearchLoop = True
        createClassLoop = False
    except:
        clear()
        print("That class doesn't exist. Would you like to create it? (Y/N)")
        createClass = input()
        if (createClass.lower() == "y"):
            createClassLoop = True
            classSearchLoop = True
        else:
            break

while (createClassLoop):
    clear()
    print("Please enter the course's name:")
    courseName = input()
    print("")
    print("Please enter teacher's name:")
    courseTeacher = input()

fields = []
fieldLoop = False
while (not fieldLoop):
    clear()
    print("Please enter the name of the activities you would like students to fill. (Type DONE when finished.)")
    field = input()
    if (field == "DONE"):
        fieldLoop = True
        break
    fields.append(field)

courseFile = open("./courses/{}.py".format(courseCode.lower()), "w")
courseInfo = {"courseName": courseName, "courseCode": courseCode.lower(), "courseTeacher": courseTeacher, "fields": fields}
parsedCourseInfo = json.dump(courseInfo, courseFile, indent = 4)
courseFile.close()
