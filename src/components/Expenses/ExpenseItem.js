
// Write your code at relevant places in the code below
import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem=(props)=> {
  //function ClickHandler(){} (or) u can write in arrow function below
  //const [title,setTitle]=useState(props.title);
 // console.log('expense item evaluated by react');
 // const ClickHandler=()=>{
   // setTitle('updated!');
    //console.log(title);

    const [title,setTitle]=useState(props.title);
    console.log('expense item evaluated by react');
   const ClickHandler=()=>{
      setTitle('100$');
      console.log(title);
    }
  
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
  
     <button onClick={ClickHandler}>randombutton</button>
    </Card>
  );
}

export default ExpenseItem;







