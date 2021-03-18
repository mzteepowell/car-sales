import React from 'react';
import { removeFeature } from '../actions';
import { connect } from "react-redux";

const AddedFeature = (props) => {
  const handleClick = (e) => {

    return props.removeFeature(props.feature)
  }
  return (
    <>
      {props.feature ? (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
        <button
        className="button"
        onClick={ handleClick
        }>X</button>
      {props.feature.name}
        </li>) : null}
      </>
  );
};


export default connect(null, {removeFeature})(AddedFeature);
