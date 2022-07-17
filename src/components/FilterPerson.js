import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FilterPerson = () => {
  const [people, setPeople] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const [name, setName] = useState("");

  const fetchPeople = async () => {
    setPeople(null);
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    setPeople(data.results);
    setFilteredResults(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword) {
      const results = people.filter((person) => {
        return person.name.first
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFilteredResults(results);
    } else {
      setFilteredResults(people);
    }
    setName(keyword);
  };

  const navigate = useNavigate();

  return (
    <div className="person-list">
      <input
        className="search"
        type="search"
        value={name}
        onChange={filter}
        placeholder="Search Name.."
      />
      {filteredResults.map((person, id) => {
        return (
          <div
            onClick={() => {
              navigate("/nextperson", { state: { ...person } });
            }}
            className="person"
            key={id}
          >
            <img
              className="person-image"
              src={person.picture.medium}
              alt={person.name.first}
            />

            <div>
              <span className="person-name">
                {person.name.first} {person.name.last}
              </span>
              <br></br>
              <span className="person-email">{person.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterPerson;
