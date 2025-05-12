import React from "react";
const TodoItems = (props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        {props.item}
        <span className="icons">
          <i
            className="fa-solid fa-trash-can icon-delete"
            onClick={(e) => {
              props.deleteListItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </ul>
  );
};
export default TodoItems;
