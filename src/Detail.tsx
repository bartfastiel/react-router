import {useParams} from "react-router-dom";

export default function Detail() {

    const urlParams = useParams();
    const id = urlParams["id"];

    return (
        <>
            Detailseite für das Produkt mit id: {id}
        </>
    );
}