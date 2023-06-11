import { useLocation } from "react-router-dom";
import CharCard from "../components/CharCard";
import "../css/story.css"
import LocCard from "../components/LocCard";

const Story = () => {

    let { state } = useLocation();
    console.log(state);

    return (
        <>
            <div className="page-container">
                <div className="container">

                    <h1>Your Madiverse story:</h1>
                    <h3>Featuring:</h3>

                </div>
                <div className="card-container">
                    {state.chars.map((char, id) => {
                        return <CharCard id={id} char={char}></CharCard>
                    })}
                </div>
                <div className="loc-container">
                    <h3>On:</h3>
                    {state.locs.map((loc, id) => {
                        return <LocCard id={id} loc={loc}></LocCard>
                    })}
                </div>

                <div className="story container">
                    {state.text.map((ptag, key) => {
                        return <p key={key} className="text">{ptag}</p>
                    })}
                    
                </div>

            </div>
        </>
    )
}

export default Story;