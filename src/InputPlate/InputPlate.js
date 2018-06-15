import React from 'react';

export const InputPlate = (props) => {
  const handleClick = (event) => {
    const name = event.target.parentElement.children[0].value;
    const town = event.target.parentElement.children[1].value;

    if(name === '' || town === '') {
      alert("Please fill all the details");
    } else {
      const id = (Math.random() * 999).toFixed(5);
      props.addCard({name : name, town : town, id : id});
    }
  };

  return(
    <div className="inputGraber">
      <div>
          <input autofocus="true" type="text" placeholder="Name goes here" required />
          <input type="text" placeholder="City goes here" required />
          <button className="addTask" onClick={handleClick}>Push</button>
      </div>
    </div>
  );
};
