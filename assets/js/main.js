const data = {
  labels: [
    'HTML',
    'CSS',
    'Javascript',
    'PHP'
  ],
  datasets: [
    {
      label: 'Keahlian',
      data: [90, 80, 65, 20],
      fill: true,
      backgroundColor: 'rgba(0, 217, 255, 0.2)',
      borderColor: '#87ceeb',
      pointBackgroundColor: '#87ceeb',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#87ceeb'
    },
  ],
  
};
const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
      borderWidth: 3
      }
    },
    scales: {
      r: {
          suggestedMin: 10,
          suggestedMax: 100
      }
    }
  },
};
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);