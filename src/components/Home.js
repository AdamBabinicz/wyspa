import React, { useState } from "react";
import image from "../assets/2.png";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";
import { GiDarkSquad, GiDualityMask, GiGibbet } from "react-icons/gi";
import Popup from "../components/Popup";
import img0 from "../assets/5.jpg";
import img1 from "../assets/1.svg";
import img2 from "../assets/6.jpg";
import img3 from "../assets/3.png";
import img4 from "../assets/7.jpg";
import img5 from "../assets/1.png";
import img6 from "../assets/9.jpg";
import img7 from "../assets/10.jpg";
import img8 from "../assets/1.webp";
import img9 from "../assets/4.png";
import img10 from "../assets/11.jpg";
import img11 from "../assets/12.jpg";
import img12 from "../assets/3.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/5.png";

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
  const [buttonPopup5, setButtonPopup5] = useState(false);
  const [buttonPopup6, setButtonPopup6] = useState(false);
  const [buttonPopup7, setButtonPopup7] = useState(false);
  const [buttonPopup8, setButtonPopup8] = useState(false);
  const [buttonPopup9, setButtonPopup9] = useState(false);
  const [buttonPopup10, setButtonPopup10] = useState(false);
  const [buttonPopup11, setButtonPopup11] = useState(false);
  const [buttonPopup12, setButtonPopup12] = useState(false);
  const [buttonPopup13, setButtonPopup13] = useState(false);
  const [buttonPopup14, setButtonPopup14] = useState(false);
  const [buttonPopup15, setButtonPopup15] = useState(false);
  const [state] = useState({
    title: "Miałeś chamie złoty róg",
    img0: img0,
    p0: "Przedmiot ten daje Wernyhora Gospodarzowi. Złoty róg to symbol rozpoczynającego się powstania, symbol zagrzewania do walki. Przedmiot ten mógł wiązać się z legendą o uśpionych rycerzach z Tatr którzy na dźwięk rogu mieli się obudzić i stanąć do walki w obronie Polski. W „Weselu” złoty róg jest także symbolem przegranej, ponieważ zostaje on zgubiony przez Jaśka, schylającego się po czapkę z pawich piór.",
    em: "wszystkiesymbole.pl/symbole-w-weselu",
    title1: "Złota podkowa",
    img1: img1,
    p1: "Złota Podkowa to symbol szczęścia zachowanego na później. W dramacie koń Wernyhory gubi podkowę, którą później znajduje Gospodyni i wkłada ją do kufra „na zaś”. Gest ten można interpretować jako przyszłą zapowiedź zwycięstwa powstania; może to być jednak także symbol chciwości chłopów oraz ich egoizmu.",
    em1: "wszystkiesymbole.pl/symbole-w-weselu",
    title2: "Pawie Pióro",
    img2: img2,
    p2: "Pawie pióro to jednoznaczny symbol dumy i pychy narodowej. Jaśko wyciągając ręce po ten właśnie przedmiot gubi złoty róg, który był podarunkiem od Wernyhory.",
    em2: "wszystkiesymbole.pl/symbole-w-weselu",
    title3: "Kadyceusz",
    img3: img3,
    p3: "Kaduceusz to atrybut greckiego boga Hermesa – to zwieńczona skrzydłami laska, wokół której owinięte są dwa węże (symbol kadyceusza). W „Weselu” ta błazeńska laseczka symbolizuje spór. Zostaje ona wręczona Dzienikarzowi przez Stańczyka  który miał nią poruszyć innych.",
    em3: "wszystkiesymbole.pl/symbole-w-weselu",
    title4: "Bronowicka Chata",
    img4: img4,
    p4: "Bronowicka chata to symbol całej Polski. W chacie tej (tak jaki i w Polsce) znalazły się najważniejsze postacie epoki: artyści, dziennikarze, chłopi.",
    em4: "wszystkiesymbole.pl/symbole-w-weselu",
    title5: "Chochoł",
    img5: img5,
    p5: "Chochoł to róża otulona słomą (by nie zmarzła). Chochoł ma złożoną i niejednoznaczną symbolikę – to nadzieja na odrodzenie (krzak ożywa na wiosnę) jak i symbol uśpienia narodu, marazmu.",
    em5: "wszystkiesymbole.pl/symbole-w-weselu",
    title6: "Widmo",
    img6: img6,
    p6: "Widmo to upiór dawnego narzeczonego Marysi – Ludwika de Laveaux. Widmo to jest symbolem marzeń, niespełnionej miłości i pragnienia lepszego życia.",
    em6: "wszystkiesymbole.pl/symbole-w-weselu",
    title7: "Stańczyk",
    img7: img7,
    p7: "Stańczyk to ostatni błazen Jagiellonów – znany z obrazu Jana Matejki. W „Weselu” jest to symbol mądrości i troski o ojczyznę, skrytej pod błazeńską czapką. Ta symboliczna postać wydaje się być zasmucona obecną sytuacją Polski. Stańczyk ukazuję się Dziennikarzowi – jest jego głosem sumienia.",
    em7: "wszystkiesymbole.pl/symbole-w-weselu",
    title8: "Rycerz",
    img8: img8,
    p8: "Czyli Zawisza Czarny z Garbowa – legendarna postać która uosabia honor i odwagę. Symbol działania, waleczności, skonfrontowanej z niechęcią do działania i wszechobecnym marazmem obecnym między innymi w poezji. Rycerz ukazuję się poecie.",
    em8: "wszystkiesymbole.pl/symbole-w-weselu",
    title9: "Hetman",
    img9: img9,
    p9: "Hetman czyli  Franciszek Ksawery Branicki, współtwórca konfederacji targowickiej (spisek magnacki z roku 1792). Hetman jest symbolem zdrady narodowej i zaprzedania Polski za pieniądze. Objawia się on Panu Młodemu który rozmyśla, co by o jego ożenku powiedzieli szlachetni przodkowie. Hetman uświadamia Pana Młodego, że jego małżeństwo z chłopką to zdrada swojej klasy społecznej.",
    em9: "wszystkiesymbole.pl/symbole-w-weselu",
    title10: "Rżnijcie powoli, bo to dobre panisko!",
    img10: img10,
    p10: "Upiór czyli Jakub Szela, jeden z przywódców rabacji galicyjskiej (powstanie chłopskie z 1846 roku skierowane przeciwko szlachcie). Upiór symbolizuje naturę chłopów – silnych a także zdolnych do wielkich czynów, ale za to naiwnych i potrzebujących dobrego przywódcy. Jest także symbolem krwawej zemsty. Upiór ukazuję się dziadowi i przywołuje zdarzenia ciążące na wzajemnych stosunek pomiędzy szlachtą a chłopstwem.",
    em10: "wszystkiesymbole.pl/symbole-w-weselu",
    title11: "Wernyhora",
    img11: img11,
    p11: "Wernyhora czyli legendarny wieszcz ukraiński, wróżbita. Postać ta wywodząca się z XVII wieku to  kozak znany ze swoich przepowiedni i proroctw. Przychodzi on do Gospodarza z poselstwem w sprawie organizacji powstania. Daje Gospodarzowi także złoty róg, który jest sygnałem do walki. Wernyhora jest symbolem czynu i niepodległości. Symbolizuję on także porozumienie ponad podziały (chłopi a szlachta).",
    em11: "wszystkiesymbole.pl/symbole-w-weselu",
    title12: "Chocholi Taniec",
    img12: img12,
    p12: "Chocholi taniec symbolizuje sytuację zniewolonych Polaków niezdolnych do czynu – tak jak zebrani w bronowickiej chacie działają mechanicznie, bezrefleksyjnie, wbrew woli, która została uśpiona. Taniec, określony w didaskaliach jako „powolny, poważny, spokojny, pogodny, półcichy”, to przejaw trawiącego naród polski marazmu, tępego letargu przeciwstawionego idei wielkiego zrywu, jaki miał nastąpić za sprawą Wernyhory.",
    em12: "wszystkiesymbole.pl/symbole-w-weselu",
    title13: "Zasłuchanie",
    img13: img13,
    p13: "Scena „zasłuchania” podobnie jak Chocholi Taniec, symbolizuje marazm i uśpienie – bezczynne czekanie na cud.",
    em13: "wszystkiesymbole.pl/symbole-w-weselu",
    title14: "Zgromadzenie chłopów z kosami",
    img14: img14,
    p14: "Scena ta symbolizuje gotowość chłopów do walki. Możliwe, że jest to nawiązanie do Bitwy nad Racławicami (Bitwa z 1794 pomiędzy Rzeczpospolitą a Rosją; dowódcą wojsk Polskich był Tadeusz Kościuszko. W Bitwie tej brali udział kosynierzy)",
    em14: "wszystkiesymbole.pl/symbole-w-weselu",
    title15: "Dramaty Stanisława Wyspiańskiego",
    img15: img15,
    p15: "Legenda (tekst: Legenda I, Legenda II) 1897, Meleager (tekst) 1899, wyst. 1908, Warszawianka wyd. i wyst. 1898,Protesilas i Laodamia (tekst) 1899, wyst. 1903, Lelewel (tekst) wyd. i wyst. 1899, Klątwa 1899, wyst. 1909, Sędziowie 1900, wyst. 1907,Legion (tekst) 1900, wyst. 1911, Wesele wyd. i wyst. 1901, Weimar 1829 fragmenty, 1904 (po niemiecku), Wyzwolenie wyd. i wyst. 1903, Bolesław Śmiały (tekst) wyd. i wyst. 1903, Lelewel Noc Listopadowa 1904, wyst. 1908, Skałka (tekst) 1907, Zygmunt August 1907 nieukończony, wyd. zupełnie 1930, wyst. 1932, Akropolis 1904, wyst. 1926, Powrót Odysa (tekst) 1907, wyst. 1917, Daniel (tekst) wyd. 1908",
    em15: "pl.wikipedia.org",
  });

  return (
    <div className="home">
      <div className="home-intro">
        <div className="home-intro-heading">
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1>Chochoł i inne dziwa</h1>
            <h2>Symbole w "Weselu" Wyspiańskiego</h2>
            {/* <Link to="/opracowania"> */}
          </motion.div>
          <button className="btn" onClick={() => setButtonPopup15(true)}>
            O twórcy
          </button>
          <Popup trigger={buttonPopup15} setTrigger={setButtonPopup15}>
            <h3 style={{ fontSize: "15px" }}>{state.title15}</h3>
            <img src={state.img15} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p15}</span>
            <em style={{ fontSize: "11px" }}>{state.em15}</em>
            <br />
          </Popup>
          {/* </Link> */}
        </div>
        <motion.div
          animate={{ x: -50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="home-intro-image">
            <img src={image} alt="..." className="my-image" />
          </div>
        </motion.div>
      </div>
      <div className="home-specialization">
        <h2>3 rodzaje symboli</h2>
        <div className="bottom-line"></div>
        {/* <p>rzeczy</p>
        <p>postaci</p>
        <p>sceny</p> */}
      </div>
      <div className="home-specialization-grid">
        {/* <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 1 }}
        > */}
        <div className="item">
          <h3>
            I. Rzeczy <GiGibbet className="icon" />
          </h3>
          <p onClick={() => setButtonPopup(true)}>
            <HiCheck />
            &nbsp; Złoty Róg
          </p>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3 style={{ fontSize: "15px" }}>{state.title}</h3>
            <img src={state.img0} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p0}</span>
            <em style={{ fontSize: "11px" }}>{state.em}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup1(true)}>
            <HiCheck />
            &nbsp; Złota Podkowa
          </p>
          <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
            <h3 style={{ fontSize: "15px" }}>{state.title1}</h3>
            <img src={state.img1} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p1}</span>
            <em style={{ fontSize: "11px" }}>{state.em1}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup2(true)}>
            <HiCheck />
            &nbsp; Pawie Pióro
          </p>
          <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            <h3 style={{ fontSize: "15px" }}>{state.title2}</h3>
            <img src={state.img2} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p2}</span>
            <em style={{ fontSize: "11px" }}>{state.em2}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup3(true)}>
            <HiCheck />
            &nbsp; Kadyceusz
          </p>
          <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
            <h3 style={{ fontSize: "15px" }}>{state.title3}</h3>
            <img src={state.img3} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p3}</span>
            <em style={{ fontSize: "11px" }}>{state.em3}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup4(true)}>
            <HiCheck />
            &nbsp; Bronowicka&nbsp;Chata
          </p>
          <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
            <h3 style={{ fontSize: "15px" }}>{state.title4}</h3>
            <img src={state.img4} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p4}</span>
            <em style={{ fontSize: "11px" }}>{state.em4}</em>
            <br />
          </Popup>
        </div>
        {/* </motion.div> */}
        {/* <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}> */}
        <div className="item">
          <h3>
            II. Postacie <GiDarkSquad className="icon" />
          </h3>
          <p onClick={() => setButtonPopup5(true)}>
            <HiCheck />
            &nbsp; Chochoł
          </p>
          <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
            <h3 style={{ fontSize: "15px" }}>{state.title5}</h3>
            <img src={state.img5} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p5}</span>
            <em style={{ fontSize: "11px" }}>{state.em5}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup6(true)}>
            <HiCheck />
            &nbsp; Widmo
          </p>
          <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}>
            <h3 style={{ fontSize: "15px" }}>{state.title6}</h3>
            <img src={state.img6} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p6}</span>
            <em style={{ fontSize: "11px" }}>{state.em6}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup7(true)}>
            <HiCheck />
            &nbsp; Stańczyk
          </p>
          <Popup trigger={buttonPopup7} setTrigger={setButtonPopup7}>
            <h3 style={{ fontSize: "15px" }}>{state.title7}</h3>
            <img src={state.img7} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p7}</span>
            <em style={{ fontSize: "11px" }}>{state.em7}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup8(true)}>
            <HiCheck />
            &nbsp; Rycerz
          </p>
          <Popup trigger={buttonPopup8} setTrigger={setButtonPopup8}>
            <h3 style={{ fontSize: "15px" }}>{state.title8}</h3>
            <img src={state.img8} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p8}</span>
            <em style={{ fontSize: "11px" }}>{state.em8}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup9(true)}>
            <HiCheck />
            &nbsp; Hetman
          </p>
          <Popup trigger={buttonPopup9} setTrigger={setButtonPopup9}>
            <h3 style={{ fontSize: "15px" }}>{state.title9}</h3>
            <img src={state.img9} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p9}</span>
            <em style={{ fontSize: "11px" }}>{state.em9}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup10(true)}>
            <HiCheck />
            &nbsp; Upiór
          </p>
          <Popup trigger={buttonPopup10} setTrigger={setButtonPopup10}>
            <h3 style={{ fontSize: "15px" }}>{state.title10}</h3>
            <img src={state.img10} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p10}</span>
            <em style={{ fontSize: "11px" }}>{state.em10}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup11(true)}>
            <HiCheck />
            &nbsp; Wernyhora
          </p>
          <Popup trigger={buttonPopup11} setTrigger={setButtonPopup11}>
            <h3 style={{ fontSize: "15px" }}>{state.title11}</h3>
            <img src={state.img11} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p11}</span>
            <em style={{ fontSize: "11px" }}>{state.em11}</em>
            <br />
          </Popup>
        </div>
        {/* </motion.div> */}
        {/* <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}> */}
        <div className="item">
          <h3>
            III. Sceny <GiDualityMask className="icon" />
          </h3>
          <p onClick={() => setButtonPopup12(true)}>
            <HiCheck />
            &nbsp; Chocholi Taniec
          </p>
          <Popup trigger={buttonPopup12} setTrigger={setButtonPopup12}>
            <h3 style={{ fontSize: "15px" }}>{state.title12}</h3>
            <img src={state.img12} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p12}</span>
            <em style={{ fontSize: "11px" }}>{state.em12}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup13(true)}>
            <HiCheck />
            &nbsp; Zasłuchanie
          </p>
          <Popup trigger={buttonPopup13} setTrigger={setButtonPopup13}>
            <h3 style={{ fontSize: "15px" }}>{state.title13}</h3>
            <img src={state.img13} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p13}</span>
            <em style={{ fontSize: "11px" }}>{state.em13}</em>
            <br />
          </Popup>
          <p onClick={() => setButtonPopup14(true)}>
            <HiCheck />
            &nbsp; Zgromadzenie chłopów z kosami
          </p>
          <Popup trigger={buttonPopup14} setTrigger={setButtonPopup14}>
            <h3 style={{ fontSize: "15px" }}>{state.title14}</h3>
            <img src={state.img14} alt="..." />
            <span style={{ fontSize: "14px" }}>{state.p14}</span>
            <em style={{ fontSize: "11px" }}>{state.em14}</em>
            <br />
          </Popup>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
