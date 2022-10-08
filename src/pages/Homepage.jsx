import React from "react";
import { gql, useQuery } from "@apollo/client";
import { HomeWrapper } from "./HomepageStyles";
import { Link } from "react-router-dom";
import Search from "../components/SearchBar/Search";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return "Loading...";
  if (error) return "Error in rendering results";

  return (
    <>
      <Search />
      <HomeWrapper>
        {data.characters.results.map((c) => (
          <div key={c.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/character/${c.id}`}
            >
              <div className="home-card">
                <img src={c.image} className="home-image" alt="" />
                <h2>{c.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </HomeWrapper>
    </>
  );
};

export default Homepage;
