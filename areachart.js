const myAreaChart = document.getElementById("areaChart");

new Chart(myAreaChart, {
  type: "area",
  data: {
    datasets: [
        {
          fill: {
            target: 'origin',
            above: 'rgb(255, 0, 0)',   // Area will be red above the origin
            below: 'rgb(0, 0, 255)'    // And blue below the origin
          }
        }
    ]
},
  options: {
    plugins: {
        filler: {
            propagate: true
        }
    }
}
});