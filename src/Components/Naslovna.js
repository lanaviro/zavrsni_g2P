import { Link } from "react-router-dom";
import Slika from "../slike/Gorillaz.png";
//2D
import TwoD from "../2D/d.jpg";
//Noodle
import Noodle from "../noodle/Noodle.jpg";
//Murdoc
import Murdoc from "../Murdoc/Murdoc.jpg";
//Russel
import Russel from "../Russel/russel.jpg";
//Albumi
import Gorillaz from "../slike/gorillaz_album.jpg";
import Demon from "../slike/Demon_Days.jpg";
import Plastic from "../slike/Plastic_Beach.png";
import Fall from "../slike/the_fall.jpg";
import Humanz from "../slike/humanz.png";
import Now from "../slike/the_now_now.jpeg";
import Song from "../slike/son.jpg";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitch from "./LightSwitch";
import { useContext } from "react";

export default function Naslovna() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      id="Naslovna"
      className={darkMode ? "Container-dark" : "Container-light"}
    >
      <LightSwitch />
      <table>
        <tr>
          <div className="container">
            <img src={Slika} className="glavna_img" alt="" />

            <div class="centered">
              <h1>Gorillaz</h1>
            </div>
          </div>
        </tr>

        <tr>
          <div class="paragraf">
            <table className="tejbl">
              <figure>
                <tr>
                  <th>
                    <Link to="/TwoD">
                      <img src={TwoD} className="radius" alt="" />
                    </Link>
                  </th>
                  <th>
                    <Link to="/Noodle">
                      <img src={Noodle} className="radius" alt="" />
                    </Link>
                  </th>
                  <th>
                    <Link to="/Murdoc">
                      <img src={Murdoc} className="radius" alt="" />
                    </Link>
                  </th>
                  <th>
                    <Link to="/Russel">
                      <img src={Russel} className="radius" alt="" />
                    </Link>
                  </th>
                </tr>

                <tr>
                  <th className="linkovi">
                    <Link to="/TwoD">2D</Link>
                  </th>
                  <th className="linkovi">
                    <Link to="/Noodle">Noodle</Link>
                  </th>
                  <th className="linkovi">
                    <Link to="/Murdoc">Murdoc</Link>
                  </th>
                  <th className="linkovi">
                    <Link to="/Russel">Russel</Link>{" "}
                  </th>
                </tr>
              </figure>
            </table>
            <h2>Tko su Gorillaz?</h2>

            <p>
              Gorillaz je britanski virtualni glazbeni sastav. Čine ga četiri
              animirana lika: 2D (glavni vokali, klavijature), Murdoc Niccals
              (bas gitara, vokali), Noodle (gitara, klavijature, prateći vokali)
              i Russel Hobbs (bubnjevi i udaraljke).
            </p>

            <p>
              Sastav su 1998. osnovali Damon Albarn iz rock sastava Blur, te
              Jamie Hewlett, ko-autor stripa Tank Girl. Postavu sastava čine
              četiri animirana člana: 2D, Murdoc Niccals, Russel Hobbs i Noodle.
              Uglavnom sviraju alternativni hip-hop, uz alternativni rock, dub i
              pop. Njihov prvi album Gorillaz iz 2001. prodan je u više od sedam
              milijuna primjeraka, te su s tim uspjehim ušli u Guinnessovu knigu
              rekorda kao najuspješniji virtulani sastav. Album je nominiran za
              Mercury Prize, no nominacija je, na zahtjev sastava povučena. Svoj
              drugi studijski album Demon Days objavili su 2005., te su se na
              njemu našli singlovi "Feel Good Inc.", "DARE", "Dirty Harry" i
              "Kids with Guns" / "El Mañana". Album je doživio peterostruku
              platinastu nagradu u Velikoj Britaniji, te dvostruku u SAD-u.
              Također je nominiran za pet Grammyja, te su osvojili jedan, za
              najbolju vokalnu suradnju. Također su objavili tri kompilacije, te
              jedan remix album. Svoj treći studijski album Plastic Beach
              objavili su 3. ožujka 2010. Singlovi s albuma su "Stylo",
              "Superfast Jellyfish", "On Melancholy Hill" i "Rhinestone Eyes".
              Tokom njihove svjetske turneje Escape to Plastic Beach, Damon
              Albarn je na svom iPadu snimio cijeli album The Fall. Humanz im je
              peti studijski album, a objavljen je 28. travnja 2017. Singlovi s
              albuma su "Saturnz Barz", "We Got the Power", "Ascension",
              "Andromeda", "The Apprentice" i "Strobelite". Nedugo nakon izlaska
              novog albuma, objavili su singlove "Sleeping Powder" i "Garage
              Palace". Najnoviji album Time Machine uključuje pjesme "Pac-Man" i
              "Desole".
            </p>
            <table className="tejbl2">
              <tr>
                <th>
                  <img src={Gorillaz} className="album" alt="" />
                  <p>Gorillaz (2001)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Demon} className="album" alt="" />
                  <p>Demon Days (2005)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Plastic} className="album" alt="" />
                  <p>Plastic Beach (2010)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Fall} className="album" alt="" />
                  <p>The Fall (2010)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Humanz} className="album" alt="" />
                  <p>Humanz (2017)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Now} className="album" alt="" />
                  <p>The Now Now (2018)</p>
                </th>
              </tr>
              <tr>
                <th>
                  <img src={Song} className="album" alt="" />
                  <p>Song Machine, Season One: Strange Timez (2020)</p>
                </th>
              </tr>
            </table>
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
              <p>Izradila: Lana Viro g2p</p>
              <p>Copyright- sva prava pridržana 2022</p>
            </div>
          </div>
        </tr>
      </table>
    </div>
  );
}
