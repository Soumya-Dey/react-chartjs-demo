import { Line } from 'react-chartjs-2';

const rand = () => Math.abs(Math.random() * 100);

const data = {
  //   labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      //   data: [12, 19, 3, 5, 2, 3],
      data: [
        { x: 'a', y: rand() },
        { x: 'b', y: rand() },
        { x: 'c', y: rand() },
        { x: 'd', y: rand() },
        { x: 'e', y: rand() },
        { x: 'f', y: rand() },
      ],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => <Line data={data} options={options} />;

export default LineChart;
