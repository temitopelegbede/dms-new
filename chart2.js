const myChart2 = document.getElementById("chart2");

// const hrLabel = Util.months({count: 7});

new Chart (myChart2, {
  type: "radar",
  data: {
    labels: ["Op1", "Op2", "Op3", "Op4", "Op5", "Op6", "Op7"],
    datasets: [
      {
        // axis: "x",
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 20],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 192, 27, 0.3)",
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
