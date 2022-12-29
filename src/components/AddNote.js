import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";

const AddNote = () => {
  const { addNote, cnote, setcNote, setNotes, notes, editNote } =
    useGlobalContext();
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const changeHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const changeHandler2 = (e) => {
    setcNote({ ...cnote, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const editHandler = (e) => {
    // setNotes({ ...notes, [e.target.name]: e.target.value });
    // console.log("Updated", cnote);
  };

  return (
    <>
      {/* Add Note form */}
      <form className="my-3">
        <h1>Add a Note</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Add Note
        </button>
      </form>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal header */}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Modal Body */}
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    value={cnote.title}
                    onChange={changeHandler2}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={cnote.description}
                    onChange={changeHandler2}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={cnote.tag}
                    onChange={changeHandler2}
                  />
                </div>
              </form>
            </div>
            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={editHandler}
              >
                Update Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
