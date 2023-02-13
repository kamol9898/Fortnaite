
import './main.css'
import Foto1 from './foto/ok.png'
import { GiEvilFork } from "react-icons/gi";
// BsTelegram
function App(){
  return (
    <div>
      <div className="wrap">
        <img src={Foto1} alt="" />
        <h1>Lorem, ipsum dolor.</h1>

        
      </div>

      <span>
        <GiEvilFork className='tel'/>
      </span>
    </div>
  );
}

export default App

