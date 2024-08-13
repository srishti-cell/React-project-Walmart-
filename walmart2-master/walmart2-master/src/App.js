import './App.css';
import Home from "../src/components/Home"
import {Routes,Route} from "react-router-dom"
import Gift from './components/Gift/Gift';
import Wheel from './components/Wheel/Wheel';
import GiftCard from './components/GiftCard/GiftCard';
import Female from './components/Female/Female';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gift" element={<Gift/>}/>
        <Route path="/wheel" element={<Wheel/>}/>
        <Route path="/giftcard" element={<GiftCard/>}/>
        <Route path="/giftcard/female" element={<Female/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        {/* <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<h1>Not found</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
