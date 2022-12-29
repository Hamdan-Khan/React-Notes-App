import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Add Notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNzI2MzE4NjlhNDRhZmZlZTY3NWZlIn0sImlhdCI6MTY3MTk2MDU2M30.VYhGWZK3IGMP04jQkMpPYFxPbNj-TrjhWA9PGFixagk",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNzI2MzE4NjlhNDRhZmZlZTY3NWZlIn0sImlhdCI6MTY3MTk2MDU2M30.VYhGWZK3IGMP04jQkMpPYFxPbNj-TrjhWA9PGFixagk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "63a9494sb26c455b683838fd1",
      user: "63a72631869a44affee675fe",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-26T07:12:11.045Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete Notes
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNzI2MzE4NjlhNDRhZmZlZTY3NWZlIn0sImlhdCI6MTY3MTk2MDU2M30.VYhGWZK3IGMP04jQkMpPYFxPbNj-TrjhWA9PGFixagk",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNzI2MzE4NjlhNDRhZmZlZTY3NWZlIn0sImlhdCI6MTY3MTk2MDU2M30.VYhGWZK3IGMP04jQkMpPYFxPbNj-TrjhWA9PGFixagk",
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

  const [cnote, setcNote] = useState({ title: "", description: "", tag: "" });
  const updateHandler = (currentNote) => {
    setcNote(currentNote);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
