import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const notes = [
    {
      _id: "63a828ce25796c48da9a454f",
      user: "63a72631869a44affee675fe",
      title: "MY title",
      description: "THIS IS MY NOTES",
      tag: "personal",
      date: "2022-12-25T10:41:18.284Z",
      __v: 0,
    },
    {
      _id: "63a9494b26c455b683838fd1",
      user: "63a72631869a44affee675fe",
      title: "Hamdan",
      description: "hahahahahha",
      tag: "personal",
      date: "2022-12-26T07:12:11.045Z",
      __v: 0,
    },
  ];

  return (
    <AppContext.Provider value={{ notes }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
