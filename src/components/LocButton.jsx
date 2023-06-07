
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function LocButton() {
    const [locUni, setLocUni] = useState('');

  const handleChange = (event) => {
    console.log(event, event.target.value)
    setLocUni(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location from Universe</InputLabel>
        <Select
          
          value={locUni}
          label="Choose location origin universe"
          onChange={handleChange}
        >
          <MenuItem value={'rm'}>Rick and Morty</MenuItem>
          <MenuItem value={'sw'}>Star Wars</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}