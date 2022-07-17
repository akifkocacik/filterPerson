const NextPerson = ({ person }) => {
  return (
    <div className="container">
      {" "}
      {person && (
        <div className="person">
          {" "}
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
      )}
    </div>
  );
};

export default NextPerson;
