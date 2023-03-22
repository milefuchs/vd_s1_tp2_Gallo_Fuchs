d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =  Plot.plot({
    marks: [
      Plot.dot(data, { x: "nacionalidad", y: "eva_mision_hs", fill: "status", r: 10, opacity: 0.5}),
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
      
    },
    marginLeft: 100,
    width: 1500,
    height: 400,
    
  });
  d3.select("#chart").append(() => chart);
});
