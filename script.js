console.log('Hello TensorFlow');
/**
 * Get the car data reduced to just the variables we are interested
 * and cleaned of missing data.
 */
 async function getData() {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));
  
    return cleaned;
  }
  

async function run() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    const values = data.map(d => ({
      x: d.horsepower,
      y: d.mpg,
    }));
  
    tfvis.render.scatterplot(
      {name: 'Horsepower v MPG'},
      {values},
      {
        "mpg":15,
        "horsepower":165,
      },
      {
        "mpg":18,
        "horsepower":150,
      },
      {
        "mpg":16,
        "horsepower":150,
      }
    );
  
    // More code will be added below
  }
  
  document.addEventListener('DOMContentLoaded', run);