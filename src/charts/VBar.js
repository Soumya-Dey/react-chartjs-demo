import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
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

const VBar = () => <Bar data={data} options={options} />;

export default VBar;
