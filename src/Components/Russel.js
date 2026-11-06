import { Link } from "react-router-dom";
import Slika from "../Russel/rus.png";
import Krug from "../Russel/krug_rus.jpg";
import "../styles.css";
//galerija
import Red1 from "../Russel/krugovi_rus1.jpg";
import Red2 from "../Russel/krugovi_rus2.jpg";
import Red3 from "../Russel/krugovi_rus3.jpg";
import Red4 from "../Russel/krugovi_rus4.png";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import LightSwitch from "./LightSwitch";

export default function Russel({ salji }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      id="Russel"
      className={darkMode ? "Container-dark" : "Container-light"}
    >
      <LightSwitch />
      <table>
        <tr>
          <div className="container">
            <img src={Slika} className="glavna_img" alt="" />

            <div class="centered">
              <h1>Russel</h1>
            </div>
          </div>
        </tr>

        <tr>
          <div className="paragraf">
            <a href="https://gorillaz.fandom.com/wiki/Russel">
              <img src={Krug} className="rejdius" alt="" />
            </a>
            <h2>Tko je Russel?</h2>
            <p>
              Russel je rođen u Brooklynu u New Yorku 3. lipnja 1975. Poznat po
              svojim dobrim manirama i elokventnom govoru, pohađao je Xavier
              School For Young Achievers, ali je izbačen nakon što je napao
              nekoliko učenika dok ga je opsjedao demon. Pao je u komu sljedeće
              četiri godine, a na kraju je svećenik po imenu otac Merrin konačno
              istjerao demona iz njegovog tijela. Russel nije vjerovao ništa od
              toga sve dok nije vidio sliku "Russel wuz ovdje!" grafiti ispisani
              krvlju na zidovima škole njegovim rukopisom.
            </p>
            <p>
              Nakon što ga je njegova stara škola odbila vratiti, Russel je
              pohađao srednju školu u Brooklynu, gdje se sprijateljio s mnogim
              učenicima koji su bili nadareni za hip-hop glazbu. Jedne kišne
              noći ispred 7-Eleven Storea, Russelovi su suputnici ubijeni u
              pucnjavi iz vožnje od strane grupe "gangbandžera" koji su vozili
              crni Humvee. Svi su nosili majice s crvenim kapuljačama. Jedan od
              njih je nosio crnu kapuljaču koju je Russel identificirao kao Grim
              Reaper. Nakon pucnjave, duhovi Russelovih prijatelja nastanili su
              se u njegovom tijelu, a najistaknutiji je Russelov najbolji
              prijatelj Del the Ghost Rapper. Proces posjedovanja trajno je
              pretvorio Russelove oči u mliječno bijele.
            </p>
            <p>
              Nakon incidenta s pucnjavom iz vožnje, Russel je zbog vlastite
              sigurnosti poslan u Veliku Britaniju da živi sa svojim ujakom u
              Belsize Parku. Dobio je posao radeći za pultom u Record Shacku Big
              Ricka Blacka u londonskom području Soho. Tada se prvi put susreo s
              Murdocom Niccalsom. Dok je od Russela tražio opskurnu ploču iz
              50-ih, Murdoc je Russelu navukao vreću na glavu i prisilio ga da
              izađe iz trgovine. Russel je vraćen u Kong Studios i bio je
              impresioniran glazbom na kojoj je Murdoc radio, pa je odlučio
              ostati.
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
                Russel se temelji na ljubavi Jamieja Hewletta prema Hip-hopu, a
                posebno je baziran na Ice Cubeu, koji je igrom slučaja stvarni
                rođak Gorillaz suradnika Del The Funky Homosapiena. Hewlett
                kaže: "Russel se temelji na mojoj ljubavi prema hip hopu. Netko
                kao Ice Cube, pretpostavljam."
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
