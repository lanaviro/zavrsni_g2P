import React, { useState, useRef, useContext, useEffect } from "react";
import Class from "./Class";

export default function Forma({ Class }) {
  const [naziv, postaviNaziv] = useState("");
  const [objava, postaviObjava] = useState("");
  const [najdrazi, postaviNajdrazi] = useState("");

  const inputRef = useRef();
  const titleRef = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    Class(naziv, objava, najdrazi);
  };

  useEffect(() => {
    console.log("Ime", naziv);
  }, [naziv]);

  useEffect(() => {
    console.log("Prezime", objava);
  }, [objava]);

  useEffect(() => {
    console.log("Najdrazi lik", najdrazi);
  }, [najdrazi]);

  useEffect(function () {
    setTimeout(() => {
      titleRef.current.textContent = "Ulogirajte se!";
    }, 4000);
  }, []);

  return (
    <div>
      <h1 className="title" ref={titleRef}>
        Pozdrav! Nadamo se da ste naućili nešto novo u velikom svijetu glazbe.
      </h1>
      <form onSubmit={handlesubmit}>
        Unesi ime:
        <br />
        <input
          required
          type="text"
          ref={inputRef}
          onChange={(e) => postaviNaziv(e.target.value)}
        />
        <br />
        <br />
        Unesi prezime:
        <br />
        <input
          required
          ref={inputRef}
          type="text"
          onChange={(e) => postaviObjava(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => postaviNajdrazi(e.target.value)}>
          <option value="Noodle">Noodle</option>
          <option value="2D">2D</option>
          <option value="Russel">Russel</option>
          <option value="Murdoc">Murdoc</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
