import axios from "axios";
import React, { useState, useEffect } from "react";
import CharacterTable from "./components/CharacterTable";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";

const hash = "41f9d7f2fcdc14190b3add7ef148603a";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const MarvelFetch = async () => {
      if (query === "") {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setIsLoading(false);
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setIsLoading(false);
      }
    };

    MarvelFetch();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search search={(q) => setQuery(q)} />
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
