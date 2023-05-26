import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import { Button } from '@mui/material';

const CharButton = () => {
    return (
        <>
        <Button variant='oulined' startIcon={<SnowshoeingIcon />}>Bring in Characters</Button>
        </>
    )
}

export default CharButton;