import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let devs = ["Ashutosh", "Ketan", "Sushant", "Suraj", "Siddharth"];
  const getmessage = () => { return devs.length === 0 ? <p>No developer found</p> : null};  
  return (
    <Fragment>
      <h3>List of Developers</h3>
      {getmessage()}
      <ul className="list-group">
        {devs.map((dev) => (
          <li className="list-group-item" key={dev} onClick={()=> "click"}>{dev}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
