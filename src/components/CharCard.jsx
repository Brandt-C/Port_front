
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharCard(props) {
    // console.log(props.char);
    if (props.char.uni === "Star Wars"){
        props.char.img = `https://starwars-visualguide.com/assets/img/characters/${props.char.id.slice(2)}.jpg`
    }
  return (
    <Card id='c-card' sx={{ 
        maxWidth: 250,
        mx: 2,
        my: 1,
        border: '1px solid white',

        }}>
      <CardMedia
        sx={{ height: 290,
          border: '1px solid white',
          
        }}
        image={props.char.img}
        title={props.char.full_name}
      />
      <CardContent id='c-content'>
        <Typography gutterBottom variant="h5" component="div">
        {props.char.full_name}
        </Typography>
        <Typography variant="body2" color="text.light">
          {props.char.desc}
        </Typography>
        <h5>From</h5>
        <Typography variant="body2" color="text.light">
          {props.char.uni}
        </Typography>
      </CardContent>
    </Card>
  );
}