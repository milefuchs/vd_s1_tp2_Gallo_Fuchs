d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =   Plot.plot({
    marks: [
      
      Plot.barY(
        data, 
        Plot.groupX({
          y:'sum',
        },
          {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'genero',
          },
      )),
    ],
    
    marginLeft: 300,
    marginBottom: 100,
    width: 1000,
    nice: true,
    line: true,
    zero: true,
    x: {
      labelOffset: 35,
      labelAnchor: 'center',
    },
    color:{
      legend: true,
      range: ["#16FF00", "#FF008E"]
    },
    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
  });
  d3.select("#chart").append(() => chart);
});
