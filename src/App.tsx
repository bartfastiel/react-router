import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import ButterBiscuit from "./ButterBiscuit.tsx";
import ChocolateChipCookie from "./ChocolateChipCookie.tsx";
import Detail from "./Detail.tsx";

function App() {

    return (
        <>
            <h1>Schoko-Laden</h1>
            <Link to="butter">Unser Butterkeks-Angebot</Link><br/>
            <Link to="chocolate">Unser Schoko-Angebot</Link><br/>
            <Routes>
                <Route path="" element={<>Wähle eine Kategorie</>}/>
                <Route path="butter" element={<ButterBiscuit/>}/>
                <Route path="chocolate" element={<ChocolateChipCookie/>}/>
                <Route path="detail/:id" element={<Detail/>}/>
            </Routes>
        </>
    )
}

export default App
