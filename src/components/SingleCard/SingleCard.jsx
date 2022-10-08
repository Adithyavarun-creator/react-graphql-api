import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { SingleWrapper } from "./SingleCardStyles";

const GET_SINGLECHARACTER = gql`
  query getCharacters($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

const SingleCard = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_SINGLECHARACTER, {
    variables: {
      id: id,
    },
  });

  if (loading) return "Loading...";

  return (
    <SingleWrapper>
      <div>
        <img src={data.character.image} className="single-image" />
      </div>
      <div>
        <div className="content-box">
          <h1 className="character-name">{data.character.name}</h1>
          {/* <h2>{data.character.gender}</h2> */}
          <span>
            {data.character.episode.map((e) => (
              <div key={e.name}>
                <span className="character-sub-name"> {e.name}</span> -
                <b className="character-sub-bold">{e.episode}</b>
              </div>
            ))}
          </span>
        </div>
      </div>
    </SingleWrapper>
  );
};

export default SingleCard;
