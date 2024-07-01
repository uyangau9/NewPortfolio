import "./App.css";
import { About, Skills, Exp , Contact} from "./components";

import Main from "./components/Main.js";
import { Work } from "./components/Work.js";


function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <Exp />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
