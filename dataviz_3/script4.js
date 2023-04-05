d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =  Plot.plot({
    marks: [
      Plot.barX(data,
        Plot.groupY({
          x:'sum',
        },
        { x: "eva_mision_hs", y: "nacionalidad", fill: "status",  sort:{y:'x'}},
      )),
    ],  

    marginLeft: 250,
    marginBottom: 100,
    line: true,
    nice: true,
    width: 1000,
    height: 500,

    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
    color: {
      legend: true,
      range: ["yellow", "#E900FF"],  
    },
    x: {
      labelOffset: 35,
      labelAnchor:'center',
    },
    
  });
  d3.select("#chart").append(() => chart);
});
