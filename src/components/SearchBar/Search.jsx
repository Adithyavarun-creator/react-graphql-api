import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { SearchWrapper } from "./SearchStyle";

const SEARCH_QUERY = gql`
  query GetLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLoc, { loading, error, data }] = useLazyQuery(SEARCH_QUERY, {
    variables: {
      name: name,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Error in rendering results";

  return (
    <SearchWrapper>
      <div className="input-div">
        <div>
          <input
            placeholder="Character name..."
            type="text"
            value={name}
            className="input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" onClick={() => getLoc()}>
            Search
          </button>
        </div>
      </div>

      <div>
        {data ? (
          <ul>
            <span className="result-title">Results of locations are</span>
            {data.characters.results.map((c) => (
              <li key={Math.random()}>{c.location.name}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </SearchWrapper>
  );
};

export default Search;
