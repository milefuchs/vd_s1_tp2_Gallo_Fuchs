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
    color:{
      legend: true,
    },
  });
  d3.select("#chart").append(() => chart);
});
