import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { proyectos } from "../data/projects";
import Proyecto from "../components/Proyecto";

const Projects = () => {
  return (
    <section className="py-12 xl:py-24 h-full bg-pink-100">
      <Container>
        <Grid container>
          <Grid
            sx={{ overflow: "hidden" }}
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {proyectos.map((proyecto) => (
              <Proyecto proyecto={proyecto} key={proyecto.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
