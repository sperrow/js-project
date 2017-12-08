import Chart from 'chart.js';

const chartDisplay = track => {
  const ctx = document.getElementById('chart');

  const percentage = (obj, key) => {
    return Math.floor(obj[key] * 100);
  };
  const danceability = percentage(track, 'danceability');
  const energy = percentage(track, 'energy');
  const valence = percentage(track, 'valence');

  const dataObj = {
    labels: ["Danceable", "Energy", "Cheeriness"],
    datasets: [{
      data: [danceability, energy, valence],
      backgroundColor: [
        'rgba(255, 158, 157, 0.4)',
        'rgba(114, 87, 124, 0.4)',
        'rgba(63, 184, 175, 0.4)',
      ],
      borderColor: [
        'rgba(255, 158, 157, 1)',
        'rgba(114, 87, 124, 1)',
        'rgba(63, 184, 175, 1)',
      ],
      borderWidth: 1
    }]
  };

  const options = {
    legend: {
        display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 100
        }
      }]
    }
  };

  if (window.currentChart) {
    window.currentChart.data.datasets = dataObj.datasets;
    window.currentChart.update({
      duration: 800,
      easing: 'easeInOutSine'
    });
  } else {
    window.currentChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: dataObj,
      options
    });
  }

  const results = document.querySelector('.chart-container');

  results.appendChild(ctx);
};

export default chartDisplay;
