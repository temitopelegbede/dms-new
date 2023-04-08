const myChartHr = document.getElementById("chartHr");

new Chart (myChartHr, {
  type: "bar",
  data: {
    // labels: hrLabel,
    labels: ["Op1", "Op2", "Op3", "Op4", "Op5", "Op6", "Op7"],
    datasets: [
      {
        // axis: "x",
        yAxisID: 'y',
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 90],
        // data: [65, 59, 80, 81, 56, 55, 40],
        // fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 23, 195, 0.2)",
        ],
      },
    ],
    options: {
    scales: {
      y: {
        beginAtZero: false,
      }
      
  }},
},});
