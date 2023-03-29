d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =  Plot.plot({
    marks: [
      Plot.barX(data,
        { x: "eva_mision_hs", y: "nacionalidad", fill: "status"},
      ),
    ],  

    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
    
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
      range: ["yellow", "#E900FF"],  
    },
    marginLeft: 250,
    width: 1500,
    height: 400,
    
  });
  d3.select("#chart").append(() => chart);
});
