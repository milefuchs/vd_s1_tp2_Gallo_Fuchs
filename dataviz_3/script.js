d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =  Plot.plot({
    marks: [
      Plot.dot(data, { x: "nacionalidad", y: "eva_mision_hs", stroke: "status"}),
    ],  
    
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
