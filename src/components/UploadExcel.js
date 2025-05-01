import React, { useState } from 'react';
import {
  Box, Typography, Button, TextField, Paper, Snackbar,
  Alert, Select, MenuItem
} from '@mui/material';
import * as XLSX from 'xlsx';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Graph2D from './Graph2D';
import Graph3D from './Graph3D';

const UploadExcel = () => {
  const [file, setFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [graphType, setGraphType] = useState('');
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.name.endsWith('.xlsx')) {
      setFile(selected);

      const reader = new FileReader();
      reader.onload = (evt) => {
        const workbook = XLSX.read(evt.target.result, { type: 'binary' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        setExcelData(json);
      };
      reader.readAsBinaryString(selected);
    } else {
      setSnack({ open: true, message: 'Please select a valid .xlsx file', severity: 'error' });
    }
  };

  const getGraphData = () => {
    if (!excelData.length) return null;

    const labels = excelData.map(row => row.Label);
    const values = excelData.map(row => row.Value);

    return {
      labels,
      datasets: [{
        label: 'Excel Data',
        data: values,
        backgroundColor: 'rgba(75,192,192,0.6)',
      }]
    };
  };

  return (
    <Box maxWidth={800} mx="auto" mt={5}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Upload Excel & Visualize</Typography>

        <TextField
          type="file"
          inputProps={{ accept: '.xlsx' }}
          onChange={handleFileChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        {excelData.length > 0 && (
          <>
            <Select
              value={graphType}
              onChange={(e) => setGraphType(e.target.value)}
              fullWidth
              displayEmpty
              sx={{ mb: 2 }}
            >
              <MenuItem value="" disabled>Select Graph Type</MenuItem>
              <MenuItem value="Bar">2D - Bar</MenuItem>
              <MenuItem value="Line">2D - Line</MenuItem>
              <MenuItem value="Pie">2D - Pie</MenuItem>
              <MenuItem value="Scatter">2D - Scatter</MenuItem>
              <MenuItem value="3DScatter">3D - Scatter</MenuItem>
              <MenuItem value="Surface">3D - Surface</MenuItem>
            </Select>

            {graphType.startsWith('3D') ? (
              <Graph3D type={graphType} data={excelData} />
            ) : (
              <Graph2D type={graphType} data={getGraphData()} />
            )}
          </>
        )}
      </Paper>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default UploadExcel;