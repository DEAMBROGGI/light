import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import datos from './datos';
import {Link as LinkRouter} from "react-router-dom"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardDinamic() {
    console.log(datos)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div className="cards">
        {datos.map(evento=>
    <Card sx={{ maxWidth: 345, margin:3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={evento.name}
        subheader={evento.category}
       
      />
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL+`/imagenes/${evento.image}` }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {evento.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <LinkRouter to={`detalle/${evento.id}`}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </LinkRouter>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           Precio: ${evento.price}
          </Typography>
          <Typography paragraph>
            Lugar: {evento.place}
          </Typography>
          <Typography paragraph>
           {evento.date}
          </Typography>
          <Typography>
            {evento.assistance ? "Asistentes: " + evento.assistance : "Estimados: " + evento.estimate}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        )
}
    </div>
  );
}
