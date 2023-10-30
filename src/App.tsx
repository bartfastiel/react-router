import './App.css'
import ButterBiscuit from "./ButterBiscuit.tsx";
import {Link, Route, Routes} from "react-router-dom";
import ChocolateChipCookie from "./ChocolateChipCookie.tsx";
import Detail from "./Detail.tsx";

function App() {

    return (
        <>
            <h1>Schoko-Laden</h1>

            <ul>
                <li><Link to="/butter">Butterkekse</Link></li>
                <li><Link to="/chocolate">Schokoladenkekse</Link></li>
            </ul>

            <Routes>
                <Route path="/butter" element={<ButterBiscuit/>}/>
                <Route path="/chocolate" element={<ChocolateChipCookie/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </>
    )
}

export default App
