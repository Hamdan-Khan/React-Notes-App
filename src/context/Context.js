import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const host = "http://localhost:5000";

  // Notes global array
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // Fetch all Notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Notes
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete Notes
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    console.log("Deleted note with id:", id);
    const newNotes = notes.filter((x) => {
      return x._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit notes
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // return response.json();
    const notesCopy = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notesCopy.length; i++) {
      if (notesCopy[i]._id === id) {
        notesCopy[i].title = title;
        notesCopy[i].description = description;
        notesCopy[i].tag = tag;
        break;
        // console.log(notes[i]);
      }
    }
    setNotes(notesCopy);
  };

  // Current Notes
  const [cnote, setcNote] = useState({ title: "", description: "", tag: "" });
  const updateHandler = (currentNote) => {
    setcNote(currentNote);
  };

  // Alert context
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({ message, type });
    const a = setTimeout(() => {
      setAlert(null);
      clearInterval(a);
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        getNote,
        updateHandler,
        cnote,
        setcNote,
        setNotes,
        editNote,
        alert,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
