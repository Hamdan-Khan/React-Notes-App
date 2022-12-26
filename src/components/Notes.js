import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Notes = () => {
  const { notes } = useGlobalContext();
  return (
    <div className="row">
      {notes.map((x) => {
        const { title, description } = x;
        return (
          <div className="card col-md-3 mx-2">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
