import * as React from 'react';
import { useState } from 'react';
import {Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { BorderColor } from '@mui/icons-material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Drop down menu to select client. Currently hard coded but can be taken from DB
  return (
      <div className="client">
        <Box sx={{ minWidth: 150, float:'right', color: "#2E4158", borderColor: "#2E4158"}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Client</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Client"
            onChange={handleChange}
            >
            <MenuItem value="BMO">BMO</MenuItem>
            <MenuItem value="RBC CA">RBC CA</MenuItem>
            <MenuItem value="RBC US">RBC US</MenuItem>
            <MenuItem value="Canada Life">Canada Life</MenuItem>
            <MenuItem value="CI Assante">CI Assante</MenuItem>
            <MenuItem value="Cannacord">Cannacord</MenuItem>
            <MenuItem value="IPC">IPC</MenuItem>
            <MenuItem value="RGMP">RGMP</MenuItem>
            </Select>
        </FormControl>
        </Box>
      </div>
  );
}