import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('month');

  const enrollmentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: [65, 78, 90, 85, 95, 110],
        borderColor: '#4CAF50',
        tension: 0.4
      }
    ]
  };

  const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Attendance Rate',
        data: [95, 92, 88, 94, 90],
        backgroundColor: '#2196F3'
      }
    ]
  };

  const gradeDistributionData = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        data: [30, 40, 20, 5, 5],
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#FFC107',
          '#FF9800',
          '#F44336'
        ]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    }
  };

  return (
    <div className="analytics-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Analytics</h2>
        <select
          className="form-select time-range-selector"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Student Enrollment Trend</h5>
              <Line data={enrollmentData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Grade Distribution</h5>
              <Pie data={gradeDistributionData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Weekly Attendance</h5>
              <Bar data={attendanceData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Key Metrics</h5>
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="stat-card" style={{ backgroundColor: '#4CAF50' }}>
                    <div className="stat-content">
                      <h3>95%</h3>
                      <p>Average Attendance</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="stat-card" style={{ backgroundColor: '#2196F3' }}>
                    <div className="stat-content">
                      <h3>85%</h3>
                      <p>Pass Rate</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card" style={{ backgroundColor: '#FF9800' }}>
                    <div className="stat-content">
                      <h3>45</h3>
                      <p>Active Courses</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card" style={{ backgroundColor: '#9C27B0' }}>
                    <div className="stat-content">
                      <h3>89</h3>
                      <p>Teachers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 