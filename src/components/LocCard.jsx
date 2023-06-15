
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function LocCard(props) {
    console.log(props.loc);
    // if (props.loc.uni === "Star Wars"){
    //     props.loc.img = `https://starwars-visualguide.com/assets/img/characters/${props.char.id.slice(2)}.jpg`
    // }
  return (
    <Card id='l-card' sx={{ 
        maxWidth: 250,
        mx: 2,
        my: 1
        }}>
      <CardMedia

        title={props.loc.name}
      />
      <CardContent id='c-content'>
        <Typography gutterBottom variant="h5" component="div">
        {props.loc.name}
        </Typography>
        <Typography variant="body2" color="text.light">
          {props.loc.desc}
        </Typography>
        <Typography variant="body2" color="text.light">
          <p>Residents:</p>
          {props.loc.residents}
        </Typography>
      </CardContent>
    </Card>
  );
}