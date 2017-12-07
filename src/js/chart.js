import Chart from 'chart.js';

export default (data) => {
  const ctx = document.createElement('canvas');

  const tracks = data.audio_features;
  console.log(tracks);

  const sum = (accumulator, currentValue) => accumulator + currentValue;

  const avg = (arr, key) => {
    return Math.floor((arr.map(item => item[key]).reduce(sum) / arr.length) * 100);
  };

  const danceability = avg(tracks, 'danceability');
  const energy = avg(tracks, 'energy');
  const instrumentalness = avg(tracks, 'instrumentalness');
  const valence = avg(tracks, 'valence');

  console.log(danceability);


  const dataObj = {
    labels: ["Danceable", "Energy", "Instrumental", "Cheeriness", "Purple", "Orange"],
    datasets: [{
      data: [danceability, energy, instrumentalness, valence],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    legend: {
        display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 100
        }
      }]
    }
  };

  const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: dataObj,
    options
  });

  const results = document.getElementById('results');

  results.appendChild(ctx);
};
