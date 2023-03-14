d3.csv('astronautasygraficos.csv', d3.autoType).then(data => { 
  console.log(data) 
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'ocupacion' },
        ),
      ),
    ],
    x: {
      label: 'Edades',
    },
    height: 300,
    width: 1000,
    grid: true,
    nice: true,
    line: true,
    marginLeft: 300,
   
  });
  
  d3.select('#chart').append(() => chart) 
  
})
