
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { FormHelperText } from '@mui/material';
import axios from "axios";

export default function CharButton(props) {
  const [charUni, setCharUni] = useState('');

  const handleChange = (event) => {
    setCharUni(event.target.value);
    loadCharDeets(event.target.value);
  };
  const getCharDeets = async (st) => {
    let response = await axios.get(`http://127.0.0.1:5000/api/char/rando/${st}`);
    return response.status === 200 ? response.data : null
  };
  const loadCharDeets = async (st) => {
    let data = await getCharDeets(st);
    console.log(data);
    let copyChars = props.chars;
    copyChars[props.id.slice(1)] = data.data;
    console.log(copyChars);
    props.setChars(copyChars);
  };
  useEffect(() => {
    // console.log('charUni has been changed and this might be working!!!!');
  //   // let copyChars = props.chars;
  //   // const compStr = ['got', 'rm', 'pok', 'sw']
  //   // for (let i=0; i<copyChars.length; i++){
  //   //   if (compStr.includes(copyChars[i])){
  //   //     loadCharDeets(copyChars[i]);
  //   //   }
  //   // }
  }, [charUni])
  return (
    <Box sx={{ minWidth: 120, my:2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label" sx={{color:'white'}}>Character Universe Choice</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select-char"
          value={charUni}
          label="Choose character origin universe"
          onChange={handleChange}
        >
          <MenuItem value={'rm'}>Rick and Morty</MenuItem>
          {/* <MenuItem value={'dis'}>Disney</MenuItem> */}
          <MenuItem value={'got'}>Game of Thrones</MenuItem>
          <MenuItem value={'sw'}>Star Wars</MenuItem>
          <MenuItem value={'pok'}>Pokemon</MenuItem>
        </Select>
        <FormHelperText >Choose an origin universe for a random character choice!</FormHelperText>
      </FormControl>
    </Box>
  );
}