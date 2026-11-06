import { Link } from "react-router-dom";
import Slika from "../Murdoc/mur.jpg";
import Krug from "../Murdoc/krug_mur.jpg";
import "../styles.css";
//galerija
import Red1 from "../Murdoc/krugovi_mur_1.jpg";
import Red2 from "../Murdoc/krugovi_mur_2.jpg";
import Red3 from "../Murdoc/krugovi_mur_3.jpg";
import Red4 from "../Murdoc/krugovi_mur_4.jpg";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitch from "./LightSwitch";

export default function Murdoc({ salji }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      id="Murdoc"
      className={darkMode ? "Container-dark" : "Container-light"}
    >
      <LightSwitch />
      <table>
        <tr>
          <div className="container">
            <img src={Slika} className="glavna_img" alt="" />

            <div class="centered">
              <h1>Murdoc</h1>
            </div>
          </div>
        </tr>

        <tr>
          <div className="paragraf">
            <a href="https://gorillaz.fandom.com/wiki/Murdoc">
              <img src={Krug} className="rejdius" alt="" />
            </a>
            <h2>Tko je Murdoc?</h2>
            <p>
              Murdoc Alphonse Niccals rođen je u Stoke-On-Trentu 6. lipnja 1966.
              Iako točno mjesto boravka nikada nije potvrđeno, pričalo se da ga
              je majka rodila u Sanatoriju Belphegor, kući na pola puta za
              "bolesne, potrebite , i nevjerojatno dosadno."
            </p>
            <p>
              Kao dojenče, jedne je noći bačen na prag očeve kuće i otkrio ga je
              dok se vraćao kući iz puba. Murdoc je otišao u vrlo nasilno
              djetinjstvo. Pretpostavlja se da su njegove brojne ovisnosti i
              njegov kiseli stav posljedica njegovog zlostavljačkog djetinjstva.
              Njegov otac, Sebastian Jacob Niccals, (ili Jacob Sebastian
              Niccals, ovisno o tome tko pita) bio je zloban pijanac čovjeka
              koji je često verbalno zlostavljao i iskorištavao svoje sinove.
            </p>
            <p>
              Tijekom djetinjstva, Murdoc je pohađao Sodsworth Comprehensive
              School gdje je stekao reputaciju zbog izostanka iz škole, dječjih
              podvala, ružnoće, loše osobne higijene i općenito neposlušnog
              ponašanja. Od prvog dana često bi ga se nalazio u hodnicima
              tijekom nastave i podupirao zidove izvan učionica, odvlačeći druge
              učenike "beskrajnim kvocanjem i besmislenim, zlonamjernim
              humorom". Njegov razredni učitelj, g. Gravadlax, čovjeka kojeg je
              Murdoc opisao kao "smrdnog na poppers", opisao je Murdoca kao
              "užasnog učenika" i "glupog imbecila koji se često pojavljivao da
              smrdi na viski". Iako je, još kao dijete, imao karizmu, znao je
              navesti svoje poznanike da vide stvari "na Murdoc Niccals način" i
              svakako se isticao.
            </p>
            <tr>
              <figure>
                <img src={Red1} className="rejdius" alt="" />
                <img src={Red2} className="rejdius" alt="" />
                <img src={Red3} className="rejdius" alt="" />
                <img src={Red4} className="rejdius" alt="" />
              </figure>
            </tr>
            <tr>
              {/* <h2>{salji.Noodle}</h2> */}
              <p>
                Murdoc se temelji na gitaristu The Rolling Stonesa Keithu
                Richardsu, Creeperu iz Scooby-Dooa i Barunu Von Frankensteinu.
                On se također labavo temelji na samom Damonu Albarnu, pri čemu
                su mnogi događaji koji se događaju Murdocu i stvari koje Murdoc
                kaže labavo temeljene na Albarnovom. "Damon je Murdoc, u
                osnovi", Hewlett kaže, "Kada Damon ima avanturu, to se događa i
                Murdocu".
              </p>
            </tr>
            <div className="footer">
              <h2>
                <Link to="/Class">Papirić za ispuniti</Link>
              </h2>
              <h3>Poveznice</h3>
              <a href="https://www.instagram.com/gorillaz/">Instagram</a>
              <br />
              <br />
              <a href="https://twitter.com/gorillaz?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                Twitter
              </a>
              <br />
              <br />
              <a href="https://www.facebook.com/Gorillaz">Facebook</a>
              <br />
              <br />
              <a href="https://gorillaz.fandom.com/wiki/Discography#Studio_Albums">
                Diskografija
              </a>
              <Link to="/">
                <h2>Vrati se na početnu</h2>
              </Link>
              <p>Izradila: Lana Viro g2p</p>
              <p>Copyright- sva prava pridržana 2022</p>
            </div>
          </div>
        </tr>
      </table>
    </div>
  );
}
