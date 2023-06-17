
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
        maxWidth: 400,
        mx: 2,
        my: 1,
        border: '1px solid white',
        }}>
      <CardMedia

        title={props.loc.name}
      />
      <CardContent id='c-content'>
        <Typography gutterBottom variant="h4" component="div">
        {props.loc.name}
        </Typography>
        <Typography variant="body2" color="text.light">
          {props.loc.desc}
        </Typography>
        <p>Residents:</p>
        <Typography variant="body2" color="text.light">
          {props.loc.residents}
        </Typography>
        <p>Universe:</p>
        <Typography variant="body2" color="text.light">
          {props.loc.uni}
        </Typography>

      </CardContent>
    </Card>
  );
}