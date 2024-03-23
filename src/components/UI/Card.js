
// Write your code here
import './Card.css';
function Card(props){
    const classes = "card " + (props.className || ''); // Adding a space before the className and handling cases where className might be undefined

  return <div className={classes}>{props.children}</div>;
}
export default Card;



