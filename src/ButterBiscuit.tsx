import {Link} from "react-router-dom";

export default function ButterBiscuit() {
    return (
        <>
            Unsere Butterkekse:
            <ul>
                <li><Link to="/detail/1"> Butterkeks mit Nüssen</Link></li>
                <li>Butterkeks mit Brombeer-Geschmack</li>
            </ul>
        </>
    );
}