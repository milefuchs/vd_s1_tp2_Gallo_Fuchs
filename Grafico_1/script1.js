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
          { x: 'edad_mision', y: 'ocupacion', fill: 'ocupacion', opacity: 0.5  },
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
    marginBottom:100,
    x: {
      labelOffset: 35,
      labelAnchor:'center',
    },
    color: {
      scheme: 'greens',
    },
    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
   
  });
  
  d3.select('#chart').append(() => chart) 
  
})
