import PublicIcon from '@mui/icons-material/Public';
import { Button } from '@mui/material';

const LocButton = () => {
    return (
        <>
        <Button variant='oulined' startIcon={<PublicIcon />}>Location</Button>
        </>
    )
}

export default LocButton;