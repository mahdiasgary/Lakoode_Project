import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import AddMovies from "../movie/addMovie/AddMovies";

const EditeVilla = (prob) => {
  console.log(useLocation());
  const {state} =useLocation()
  return <AddMovies from='ew' user={state} />;
};

export default withRouter(EditeVilla);
