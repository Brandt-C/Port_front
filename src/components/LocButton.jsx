
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { FormHelperText } from '@mui/material';
import axios from 'axios';


export default function LocButton(props) {
  const [locUni, setLocUni] = useState('');

  const handleChange = (event) => {
    setLocUni(event.target.value);
    loadLocDeets(event.target.value)

  };
  const getLocDeets = async (st) => {
    let response = await axios.get(`https://behind-the-madiverse.onrender.com/api/loc/rando/${st}`);
    return response.status === 200 ? response.data : null
  };
  const loadLocDeets = async (st) => {
    let data = await getLocDeets(st);
    console.log(data);
    let copyLocs = props.locs;
    copyLocs[props.id.slice(1)] = data.data;
    console.log(copyLocs);
    props.setLocs(copyLocs)
  };
  useEffect(() => {
    // let copyLocs = props.locs;
    // const compStr = ['rm', 'sw']
    // for (let i = 0; i < copyLocs.length; i++) {
    //   if (compStr.includes(copyLocs[i])) {
    //     loadLocDeets(copyLocs[i]);
    //   }
    // }
  }, [locUni]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
        <InputLabel sx={{color:'white'}} id="demo-simple-select-helper-label">Location from Universe</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select-loc"
          value={locUni}
          label="Choose location origin universe"
          onChange={handleChange}
        >
          <MenuItem value={'rm'}>Rick and Morty</MenuItem>
          <MenuItem value={'sw'}>Star Wars</MenuItem>
        </Select>
        <FormHelperText>Choose an origin universe for a random location choice!</FormHelperText>
      </FormControl>
    </Box>
  );
}