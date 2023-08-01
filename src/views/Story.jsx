import { Link, useLocation } from "react-router-dom";
import CharCard from "../components/CharCard";
import "../css/story.css"
import LocCard from "../components/LocCard";

import { Button } from "@mui/material";

const Story = () => {

    let { state } = useLocation();
    // console.log(state);

    return (
        <>
            <div className="page-container">
                <div className="container">

                    <h1>Your Madiverse story:</h1>
                    <h3>Featuring:</h3>

                </div>
                <div className="card-container">
                    {state.chars.map((char, id) => {
                        return <CharCard id={id} key={id} char={char}></CharCard>
                    })}
                </div>
                <h3>On:</h3>
                <div className="loc-container">
                    
                    {state.locs.map((loc, id) => {
                        return <LocCard id={id} key={id} loc={loc}></LocCard>
                    })}
                </div>

                <div className="story-container">
                    {state.text.map((ptag, key) => {
                        return <p key={key} className="text">{ptag}</p>
                    })}
                    
                </div>
                <div className="story-action-container">
                    <Button sx={{ mx:3 }} variant="outlined" color="warning" onClick={print}>Print/save</Button>
                   <Link to='/mad'><Button sx={{ mx:3 }} variant="outlined">new story</Button></Link>
                   {/* <Link to='/mad'><Button variant='outlined' color='danger'>Create new story</Button></Link>  */}
                </div>

            </div>
            <h6 id="copy">&copy; Brandt Carlson 2023</h6>
        </>
    )
}

export default Story;