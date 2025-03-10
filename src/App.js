import React from "react";
import "./App.css";
import { Container, Grid2 } from "@mui/material";
import TestimonialCard from "./components/testimonialCard";

const App = () => {
  return (
    <Container className="App">
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid2 item xs={12} sm={8} md={6} lg={4}>
          <TestimonialCard />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default App;
