const data1 = {
    labels: ["test1", "test2", "test3"],
    datasets: [
      {
        data: [0.1,0.5,1.0]
      },
    ],
  };
  const data2 = {
    labels: ["test1", "test2", "test3"],
    datasets: [
      {
        data: [1.0,0.5,0.1]
      },
    ],
  };
  const options1 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(8, 178, 110,1)",
        fill: "start",
        backgroundColor: "rgba(8, 178, 110,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  const options2 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(8, 178, 110,1)",
        fill: "start",
        backgroundColor: "rgba(8, 178, 110,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };

export {data1, data2, options1, options2};