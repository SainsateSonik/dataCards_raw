import React from 'react';
import { Button } from './Button/Button';

export const Header = (props) => {
  return (
    <div className="header">
      <h1 className="title">DataCards</h1>
      <Button toggle={props.toggle} label={props.label}/>
    </div>
  );
}
