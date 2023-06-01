import React, { Component, useEffect, useState, ChangeEvent } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Array<Monster>>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Monster Rolodex </h1>
      <SearchBox placeholder="Search Monster" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// synchronus setState
// onChange={(e) => {
//   this.setState({ searchField: e.target.value }, () =>
//     console.log(this.state)
//   );
// }}
