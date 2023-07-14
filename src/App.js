import logo from "./logo.svg";
import "./App.css";
import JokeList from "./components/JokeList";
import jokeData from "./jokeData"
function App() {
  
  return (
    <>
   <JokeList jokeData={jokeData}/>
    </>
    
  );
}

export default App;
/*<Joke
      setup="Hear about the new restaurant called Karma?"
      punchline="There's no menu: You get what you deserve."
    />
    <Joke setup=
        "A woman in labor suddenly shouted, 'Shouldn't! Wouldn't! Couldn't! Didn't! Can't!'"
      punchline="'Don't worry,' said the doc. 'Those are just contractions.'"/>
    <Joke setup="Helvetica and Times New Roman walk into a bar."
      punchline=
        "Get out of here!” shouts the bartender. “We don't serve your type."/>
    <Joke  punchline="He was just going through a stage."/>*/
