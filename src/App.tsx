// import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import "./App.css";

function App() {
  const GET_RICKS = gql`
    query {
      characters(page: 1) {
        info {
          count
        }
        results {
          name
          status
          species
          gender
          origin {
            name
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RICKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <>
      <div>
        {data.characters.results.map((element, index) => (
          <p key={index}>{element.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
