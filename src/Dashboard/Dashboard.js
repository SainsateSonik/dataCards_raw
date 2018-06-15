import React from 'react';

export const Dashboard = (props) => {
  // (index) => {props.remove(person.id)}

  const remove = (id) => {
    props.remove(id);
  };

  const data = props.data.map(person => {
    return (
      <div  className="card" key={person.id} onClick={remove.bind(null, person.id)}>
          <p>
            <span className="name">{person.name}</span>
            <br />
            <span className="town">{person.town}</span>
          </p>
      </div>
    );
  })

  return(
    <div className="dashboard">
      {data}
    </div>
  );
}
