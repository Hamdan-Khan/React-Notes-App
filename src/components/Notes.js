import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Notes = () => {
  const { notes, deleteNote, getNote, updateHandler } = useGlobalContext();
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div className="row">
      <h5 className="m-3">{notes.length === 0 && "No notes to show"}</h5>
      {notes.map((x) => {
        const { title, description, _id } = x;
        return (
          <div className="card col-md-3 mx-2" key={_id}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <i
                className="fa-solid fa-trash mx-2"
                onClick={() => deleteNote(_id)}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => updateHandler(x)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
