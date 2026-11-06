import "../styles.css";
import { useState, useEffect } from "react";
import Forma from "./Forma";
import Slika from "../slike/forma.jpg";
import { Link } from "react-router-dom";

export default function Class() {
  const [korisnik, postaviKorisnika] = useState([
    { ime: "Lana", prezime: "Viro", najdraziLik: "Noodle" },
    { ime: "Andre", prezime: "Aciman", najdraziLik: "2D" }
  ]);

  const Class = (ime, prezime, najdraziLik) => {
    postaviKorisnika([
      ...korisnik,
      { ime: ime, prezime: prezime, najdraziLik: najdraziLik }
    ]);
  };

  useEffect(() => {
    console.log("Pokrenuo se useEffect", korisnik);
  }, [korisnik]);

  return (
    <div class="class-div">
      <ul>
        {korisnik.map((e) => (
          <li>
            Ime: {e.ime}, Prezime: {e.prezime}, Najdraži lik: {e.najdraziLik}
          </li>
        ))}
      </ul>
      <Forma Class={Class}></Forma>

      <h2>
        <Link to="/">Vrati me na naslovnu</Link>
      </h2>
      <img src={Slika} alt="" />
    </div>
  );
}
