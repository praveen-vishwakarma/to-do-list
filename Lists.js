import React from "react";

const Lists = (props) => {
    return(
        <>
        <div className="todo_style">
            <i className="fa-regular fa-circle-xmark" area-hidden="true" onClick={ () => {props.onSlecte(props.id)}}/>
            <li>{props.text}</li>
        </div>
        </>
    )
}

export default Lists