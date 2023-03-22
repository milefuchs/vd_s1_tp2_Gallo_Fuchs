d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =   Plot.plot({
    marks: [
      
      Plot.dot(
        data, 
          {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'nacionalidad',
          r: 'mision_hs',
          opacity: 0.5,

          },
      ),
    ],
    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },

    grid: true,
    line: true,
    nice: true,
    marginLeft: 300,
    width: 1000,
    
    color:{
      legend: true,
      range: ["green","#EA5455","#8F43EE", "purple", "orange", "yellow", "blue", "pink", "#16FF00", "grey", "#DC8449", "lavender", "white", "lightblue", "#408E91"], 
    }
    
  });
  d3.select("#chart").append(() => chart);
});
