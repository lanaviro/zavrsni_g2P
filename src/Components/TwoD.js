import { Link } from "react-router-dom";
import Slika from "../2D/dva_de.jpg";
import Krug from "../2D/krug2D.jpg";
import "../styles.css";
//galerija
import Red1 from "../2D/d.jpg";
import Red2 from "../2D/krugovi_2D.jpg";
import Red3 from "../2D/krugovi_2D_3.jpg";
import Red4 from "../2D/krugovi2D_4.jpg";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitch from "./LightSwitch";

export default function TwoD({ salji }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div id="TwoD" className={darkMode ? "Container-dark" : "Container-light"}>
      <LightSwitch />
      <table>
        <tr>
          <div className="container">
            <img src={Slika} className="glavna_img" alt="" />

            <div class="centered">
              <h1>2D</h1>
            </div>
          </div>
        </tr>

        <tr>
          <div className="paragraf">
            <a href="https://gorillaz.fandom.com/wiki/2-D">
              <img src={Krug} className="rejdius" alt="" />
            </a>
            <h2>Tko je 2D?</h2>
            <p>
              2-D je rođen 23. svibnja 1978. u obitelji Davida i Rachel Pot.
              Njegov pravi ime je Stuart Pot (često se mislilo da je njegovo
              prezime Tusspot, iako je njegov otac promijenio ime u "Pot" malo
              prije Stuarta rođen je kako bi izbjegao da ga maltretiraju u
              školi), ali jest često skraćeno na Stu-Pot.
            </p>
            <p>
              Rođen je u Crawleyju u Engleskoj, a školovao se u St. Wilfred's
              School (ista škola koja je obrazovala članove The Lijek). Njegov
              otac, David Tusspot, radio je kao mehaničar i vlasnik sajmišta
              Tusspot. Njegova majka, Rachel Tusspot, bila je a medicinska
              sestra koja je opskrbljivala Stuarta tabletama protiv glavobolje s
              njegovog stabla nesreća. Iako Stuart nije bio baš inteligentan
              dječak (zaista, on je često opisivan kao "malo debeo"), bio je
              poznat kao vrsta osoba i općenito je volio glazbu. Njegovi
              roditelji prisjećaju se a mali desetogodišnji Stuart koji
              poskakuje u svojoj sobi i sluša za The Clash, Augustus Pablo, The
              Human League (njegov omiljeni bend) i mnogi drugi glazbenici te
              vrste. Jednog dana udario je glavom pri padu sa stabla u dobi od
              jedanaest godina, uzrokujući sve svoje kosa da ispadne. Kad se
              vratio, bio je duboke 'azurno plave'.
            </p>
            <p>
              2-D je visok i tanak, visok 6'2. Ima duge udove i prste. Oči su mu
              bile potpuno crne zbog traume oka (točnije, zbog prijeloma 8
              loptica, jer su mu slomljene krvne žile na oba oka uzrokovale da
              mu se šarenice pune krvlju). Ima prirodno plavu kosu od svoje
              jedanaeste godine, nakon što je pao s drveta, zbog čega mu je sva
              kosa ispala i ponovno izrasla tamnoplave. Njegova izvorna boja
              kose bila je smeđa.
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
