import './App.css';
import { createContext, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const languageContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("pl");

  return (
    <div className="App">
      <languageContext.Provider value={language}>
        <TextBlock />
        <button onClick={() => {setLanguage("pl")}} id="plLangBtn" className={language == "pl" ? "selectedLangBtn" : ""}>PL</button>
        <button onClick={() => {setLanguage("en")}} id="enLangBtn" className={language == "en" ? "selectedLangBtn" : ""}>ENG</button>
        <p style={{marginTop:"5px", color:"#dddddd", userSelect:"none"}}>Autor: Konrad</p>
      </languageContext.Provider>
      
    </div>
  );
}

function TextBlock(){
  
  const lang = useContext(languageContext);
  const plTitle = "Rota";
  const enTitle = "The Oath";

  const plText = ["Nie rzucim ziemi skąd nasz ród!",
"Nie damy pogrześć mowy.",
"Polski my naród, polski lud,",
"Królewski szczep Piastowy.",
"Nie damy, by nas zgnębił wróg!",
"",
"Tak nam dopomóż Bóg!",
"Tak nam dopomóż Bóg!",
"",
"Do krwi ostatniej kropli z żył",
"Bronić będziemy ducha,",
"Aż się rozpadnie w proch i w pył",
"Krzyżacka zawierucha.",
"Twierdzą nam będzie każdy próg!",
"",
"Tak nam dopomóż Bóg!",
"Tak nam dopomóż Bóg!",
"",
"Nie będzie Niemiec pluł nam w twarz",
"Ni dzieci nam germanił,",
"Orężny stanie hufiec nasz,",
"Duch będzie nam hetmanił.",
"Pójdziemy, gdy zabrzmi złoty róg!",
"",
"Tak nam dopomóż Bóg!",
"Tak nam dopomóż Bóg!",
"",
"Nie damy miana Polski zgnieść",
"Nie pójdziem żywo w trumnę",
"Na Polski imię, na jej cześć",
"Podnosi czoła dumne.",
"Odzyska ziemi dziadów wnuk!",
"",
"Tak nam dopomóż Bóg!",
"Tak nam dopomóż Bóg!"];

  const enText = ["We won’t forsake the land we came from",
"We won’t let our speech be buried.",
"We are the Polish nation, the Polish people,",
"From the royal line of Piast.",
"We won’t let the enemy oppress us.",
"",
"So help us God!",
"So help us God!",
"",
"To the last blood drop in our veins",
"We will defend our Spirit",
"Till into dust and ash shall fall,",
"The Teutonic windstorm.",
"Every doorsill shall be a fortress.",
"",
"So help us God!",
"So help us God!",
"",
"The German won’t spit in our face,",
"Nor Germanise our children,",
"Our host will arise in arms,",
"The Spirit will lead the way.",
"We will arise when the golden horn sounds.",
"",
"So help us God!",
"So help us God!",
"",
"We won’t have Poland’s name defamed,",
"We won’t step alive into a grave.",
"In Poland’s name, in her honor",
"We lift our foreheads proudly,",
"The grandson will regain his forefathers’ land",
"",
"So help us God!",
"So help us God!"];

const [text, setText] = useState(plText);
const [title, setTitle] = useState(plTitle)

  useEffect(() => {
      switch(lang){
        case "pl":
          setText(plText);
          setTitle(plTitle);
          break;
        case "en":
          setText(enText);
          setTitle(enTitle);
          break;
        default:
          setText(["błąd"]);
      }
    }, [lang])

  return(
    <p>
      <h1>{title}</h1>
      {text.map((wiersz) => <>{wiersz} <br/></>)}
    </p>
  );
}

export default App;
