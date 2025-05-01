import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register chart components
ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement  // Ensure this is registered for Pie charts
);

const Graph2D = ({ type, data }) => {
  // Cleanup previous chart on unmount to avoid canvas reuse issues
  useEffect(() => {
    return () => {
      if (window.Chart && window.Chart.instances) {
        // Destroy previous chart instance before a new one is rendered
        window.Chart.instances.forEach(chart => chart.destroy());
      }
    };
  }, []);

  // Render nothing if no data is provided
  if (!data || !data.datasets || data.datasets.length === 0) {
    return <p>No valid data provided</p>;
  }

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  const chartProps = {
    data,
    options: commonOptions
  };

  switch (type) {
    case 'Line':
      return <Line {...chartProps} />;
    case 'Pie':
      return <Pie {...chartProps} />;
    case 'Scatter':
      return <Scatter {...chartProps} />;
    case 'Bar':
    default:
      return <Bar {...chartProps} />;
  }
};

// Prop Types for validation
Graph2D.propTypes = {
  type: PropTypes.oneOf(['Bar', 'Line', 'Pie', 'Scatter']).isRequired,
  data: PropTypes.object.isRequired
};

export default Graph2D;
