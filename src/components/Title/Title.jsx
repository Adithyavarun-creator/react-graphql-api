import React from "react";
import { Link } from "react-router-dom";
import { TitleWrapper } from "./TitleStyle";

const Title = () => {
  return (
    <TitleWrapper>
      <Link to="/" style={{ textDecoration: "none", color: "#e535ab" }}>
        <h1>GraphQL</h1>
        <h1>GraphQL - Rick and Morty with API</h1>
      </Link>
    </TitleWrapper>
  );
};

export default Title;
