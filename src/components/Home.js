import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="container">
      <AddNote />
      <div>
        <h1>Your Notes</h1>
        <Notes />
      </div>
    </div>
  );
};

export default Home;
