import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [backgroundColor,setBackgroundColor]=useState()
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setBackgroundColor("#8b005d")
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    setBackgroundColor("#ffcccb")
    if(enteredValue.trim().length===0){
      return;
    }
    props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" style={backgroundColor}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
