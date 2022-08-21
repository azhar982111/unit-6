import List from "./list";

function Block(props) {
  return (
    <div>
      <h2>{props.h2}</h2>
      <List text={props.ul1} />
      <List text={props.ul2} />
      <List text={props.ul3} />
      <List text={props.ul4} />
    </div>
  );
}

export default Block;
