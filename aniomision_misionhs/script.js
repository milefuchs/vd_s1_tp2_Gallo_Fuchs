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
    marginRight: 100,
    width: 1000,
    
    color:{
      legend: true,
      range: ["red","#7DB9B6","#8F43EE", "purple", "#FF008E", "#3C2317", "blue", "#FC7300", "white", "grey", "#DC8449", "yellow", "#16FF00"], 
    }
    
  });
  d3.select("#chart").append(() => chart);
});
