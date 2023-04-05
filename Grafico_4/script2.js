d3.csv("astronautasygraficos.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.areaY(data, 
        Plot.groupX(
          {
          y:"sum",
          },
          {x: "nacionalidad", y: "mision_hs", curve: 'basis', fill: '#829460'},
        ),
      ),
    ],
    
    //line: true,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 100,
    width: 2000,
    height: 400,

    x: {
      labelOffset: 40,
      labelAnchor:'center',
    },
    style: {
      background:'hsl(0, 0%, 0%)',
      color: 'white',
    },
    
  });       
  
  d3.select("#chart").append(() => chart);
});
