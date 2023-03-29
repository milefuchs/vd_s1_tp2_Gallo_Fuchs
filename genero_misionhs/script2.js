d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =   Plot.plot({
    marks: [Plot.dot(data, { x: "genero", y: "mision_hs", fill: "ocupacion", r: 10, opacity: 0.5 })],
    nice: true,
    line: true,
    grid: true,
    zero: true,
    marginLeft: 100,
    width: 1500,
    height: 400,
    color: {
      legend: true,

    },
    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
    
  });       
  
  d3.select("#chart").append(() => chart);
});
