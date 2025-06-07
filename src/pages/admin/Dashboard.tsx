import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      icon: <FaUsers />,
      color: '#4CAF50'
    },
    {
      title: 'Total Teachers',
      value: '89',
      icon: <FaChalkboardTeacher />,
      color: '#2196F3'
    },
    {
      title: 'Active Courses',
      value: '45',
      icon: <FaBook />,
      color: '#FF9800'
    },
    {
      title: 'Upcoming Events',
      value: '12',
      icon: <FaCalendarAlt />,
      color: '#9C27B0'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: [65, 78, 90, 85, 95, 110],
        borderColor: '#4CAF50',
        tension: 0.4
      },
      {
        label: 'Course Registrations',
        data: [45, 55, 65, 60, 70, 80],
        borderColor: '#2196F3',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'School Statistics'
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="row">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3">
            <div className="stat-card" style={{ backgroundColor: stat.color }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Activities</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">New student registration</li>
                <li className="list-group-item">Course schedule updated</li>
                <li className="list-group-item">New teacher joined</li>
                <li className="list-group-item">Event announcement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 