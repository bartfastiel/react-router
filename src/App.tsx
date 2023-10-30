import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import ButterBiscuit from "./ButterBiscuit.tsx";
import ChocolateChipCookie from "./ChocolateChipCookie.tsx";

function App() {

    return (
        <>
            <h1>Schoko-Laden</h1>
            <Link to="/">Butter</Link>
            <Link to="/chocolate">Schoko</Link>

            <Routes>
                <Route path="/" element={<ButterBiscuit/>}/>
                <Route path="/chocolate" element={<ChocolateChipCookie/>}/>
            </Routes>
        </>
    )
}

export default App
