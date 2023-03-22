d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart =   Plot.plot({
    marks: [
      
      Plot.barY(
        data, 
          {
          x: 'anio_mision',
          y: 'mision_hs',
          fill: 'genero',
          sort: 'mision_hs',

          },
      ),
    ],
    marginLeft: 300,
    width: 1000,
    nice: true,
    line: true,
    grid: true,
    zero: true,
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
