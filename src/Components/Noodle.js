import { Link } from "react-router-dom";
import Slika from "../noodle/noodle.png";
import Krug from "../noodle/download.jpg";
import "../styles.css";
//galerija
import Red1 from "../noodle/red1.jpg";
import Red2 from "../noodle/red2.jpg";
import Red3 from "../noodle/red3.jpg";
import Red4 from "../noodle/red4.jpg";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitch from "./LightSwitch";
import { useContext } from "react";

export default function Noodle({ salji }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      id="Noodle"
      className={darkMode ? "Container-dark" : "Container-light"}
    >
      <LightSwitch />
      <table>
        <tr>
          <div className="container">
            <img src={Slika} className="glavna_img" alt="" />

            <div class="centered">
              <h1>Noodle</h1>
            </div>
          </div>
        </tr>

        <tr>
          <div className="paragraf">
            <a href="https://gorillaz.fandom.com/wiki/Noodle#Background">
              <img src={Krug} className="rejdius" alt="" />
            </a>
            <h2>Tko je Noodle?</h2>
            <p>
              Noodle je rođena u Osaki, Kansai, Japan, 31. listopada 1990.
              Provela je dio svog djetinjstva u Japanu kao subjekt povjerljivog
              projekta japanskih super vojnika pod vodstvom japanskog
              znanstvenika, gospodina Kyuza.
            </p>
            <p>
              Noodle i još dvadeset dvoje djece bili su obučeni samo za borbu
              kao vojnici za japansku vojsku i vladu. Nakon što su djeca
              procijenjena preopasna i nestabilna za borbu, projekt je prekinut.
              Gospodinu Kyuzu tada je naređeno da obriše sve moguće tragove
              neuspjelog eksperimenta, kao i njegove sudionike. Kyuzo je ubio
              dvadeset dvoje djece vojnika, ali još uvijek nije bio voljan ubiti
              Noodle. Odlučivši je poštedjeti, Kyuzo ju je stavio u stanje
              amnezije korištenjem verbalnih naredbi. Izraz korišten za
              dovođenje Noodle u njezino stanje amnezije bio je "Ocean Bacon".
              Nakon što joj je privremeno očistila sjećanje na projekt, Kyuzo je
              prokrijumčarila Noodle u Ujedinjeno Kraljevstvo u FedExovom
              sanduku i lažno prijavila njezinu smrt svojim nadređenima.
            </p>
            <p>
              Noodle je stigao na prag Kong studija 1998. godine, u FedExovom
              sanduku. Nakon što je sanduk unesen unutra, Noodle je iskočio iz
              kutije i izveo solo na gitari (koju je 2-D opisao kao "sjajnu",
              kao i da zvuči kao "200 demona koji vrište na arapskom"). Svoj
              solo završila je udarcem karatea visokim 20 stopa i izgovorivši
              nekoliko riječi na japanskom prije nego što se naklonila i
              izgovorila riječ "noodle". To joj je donijelo ime "Noodle" (njeno
              jedino trenutno poznato ime) i mjesto u bendu kao glavna
              gitaristica (zamijenivši Paulu Cracker).
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
                Kada je prvi put osmišljavao prikaz gitaristice za Gorillaz,
                Jamie Hewlett je u početku razmišljao o tome da je prikaže kao
                17-godišnju adolescenticu koja nosi gitare, ali Albarn je
                primijetio da je ideja previše slična onome što Jamie obično
                crta i predložio je da Jamie stvara " nešto drugačije."
                Poslušavši Albarnov savjet, Jamie je smislio prvu službenu
                Noodle, 10-godišnju japansku djevojčicu. Kasnije ju je Jamie
                nacrtao s 13 godina, a od tada ju je, kako je rekao, dodatno
                "ostario".
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
