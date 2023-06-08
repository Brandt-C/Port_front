
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';

export default function CharButton(props) {
    const [charUni, setCharUni] = useState('');

  const handleChange = (event) => {
    console.log(event, event.target.value);
    setCharUni(event.target.value);
    let copyChars = props.chars;
    for (let i = 0; i<copyChars.length; i++){
      if (copyChars[i] === props.id){
        copyChars[i] = event.target.value
      }
    } console.log(copyChars);
    props.setChars(copyChars)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Character from Universe</InputLabel>
        <Select
        labelId="simple-select-label"
        id="simple-select"
          value={charUni}
          label="Choose character origin universe"
          onChange={handleChange}
        >
          <MenuItem value={'rm'}>Rick and Morty</MenuItem>
          <MenuItem value={'dis'}>Disney</MenuItem>
          <MenuItem value={'got'}>Game of Thrones</MenuItem>
          <MenuItem value={'sw'}>Star Wars</MenuItem>
        </Select>
        <FormHelperText>Choose an origin universe for a random character choice!</FormHelperText>
      </FormControl>
    </Box>
  );
}