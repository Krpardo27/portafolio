import { Fullscreen } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Proyecto = ({ proyecto }) => {
  const { id, title, descrip, image } = proyecto;

  return (
    <Grid key={id} item xs={12} sm={6} md={4} >
      <Card
        sx={{
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia sx={{
            height: "200px"
          }} image={`/img/${image}.jpg`} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descrip}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Proyecto;
