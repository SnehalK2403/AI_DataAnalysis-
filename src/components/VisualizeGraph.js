import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Graph2D from './Graph2D';
import Graph3D from './Graph3D';

const VisualizeGraph = () => {
  const { graphId } = useParams();
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/graph/${graphId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => setGraph(res.data));
  }, [graphId]);

  if (!graph) return <p>Loading graph...</p>;

  const is3D = graph.graphType.includes('3D') || graph.graphType === 'Surface';

  return (
    <div>
      <h3>{graph.graphType} Graph</h3>
      {is3D ? (
        <Graph3D type={graph.graphType} data={graph.graphConfig?.rawData || []} />
      ) : (
        <Graph2D type={graph.graphType} data={graph.graphConfig} />
      )}
    </div>
  );
};

export default VisualizeGraph;
