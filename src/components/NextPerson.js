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

// For People

// {people.map((person, id) => {
//   return (
//     <div className={classes.person} key={id}>
//       <div>
//         <img
//           className={classes.image}
//           src={person.picture.medium}
//           alt={person.name.first}
//         />
//       </div>

//       <div className={classes.name}>
//         <h1>
//           {person.name.first} {person.name.last}
//         </h1>
//       </div>

//       <div className={classes.email}>
//         <p> {person.email} </p>
//       </div>

//       <div className={classes.location}>
//         <p>
//           {person.location.city} | {person.location.country}
//         </p>
//       </div>
//     </div>
//   );
// })}

// For Person

/* <img
        className={classes.image}
        src={person.picture.medium}
        alt={person.name.first}
      />
      <div>
        <h1 className={classes.name}>
          {person.name.first}
          {person.name.last}
        </h1>
        <p className={classes.email}> {person.email} </p>
        <p className={classes.location}>
          {person.location.city} | {person.location.country}
        </p>
      </div> */
