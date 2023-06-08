import { useEffect, useState } from "react";
import axios from "axios";

// import PublicIcon from '@mui/icons-material/Public';
// import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { Button } from '@mui/material';
import CharButton from "../components/CharButton";
import LocButton from "../components/LocButton";


// <Button variant='oulined' startIcon={<SnowshoeingIcon />}>Bring in Characters</Button>

const Mad = () => {

    const getDeets = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/story/rando');
        return response.status === 200 ? response.data : null
    };
    const loadDeets = async () => {
        let data = await getDeets();
        console.log(data);
        setDeets(data);
    }
    const [deets, setDeets] = useState(() => loadDeets());

    const [chars, setChars] = useState();
    const [locs, setLocs] = useState();



    const loadButtons = () => {
        let charButtonArray = [];
        for (let i = 0; i < deets.data.chars; i++) {
            charButtonArray.push('c' + i)
        };
        let locButtonArray = [];
        for (let i = 0; i < deets.data.locs; i++) {
            locButtonArray.push('l' + i)
        };
        console.log(charButtonArray, locButtonArray);
        setChars(charButtonArray);
        setLocs(locButtonArray);
    }
    // useEffect(() => {
    //     console.log('changed!!!!!')
    // }, [charUni])
    // const changeChar = () => {
    //     let copyChars = [...chars];
    //     for (let i = 0; i<copyChars.length; i++){
    //         if (st === copyChars)
    //     }
    // }

    // <Button id={'c' + i} key={i} variant='outlined' startIcon={<SnowshoeingIcon />}>Character</Button>
    // <Button id={'l' + i} key={i} variant='outlined' startIcon={<PublicIcon />}>Character</Button>

    // <Button id={char} key={char} variant='contained' startIcon={<SnowshoeingIcon />}>Choose Character</Button>
    // <Button id={loc} key={loc} variant='contained' startIcon={<PublicIcon />}>Location</Button>
    return (
        <>

            <h1>Under construction!</h1>
            <h3>This is gonna be some really cool stuff.  Pretty soon.  I swear.</h3>
            <h4>Like a mad-lib generator with choices from multiple fictional universes.</h4>
            {!chars ? < Button onClick={() => loadButtons()} variant="contained">Let's build a story!</Button> : null}

            <div className="button-container">
                <div className="char-buttons">
                    {chars ? chars.map((char) => {
                        return < CharButton id={char} key={char} chars={chars} setChars={setChars}></CharButton>
                    }) : null}
                </div>
                <div className="loc-buttons">
                    {locs ? locs.map((loc) => {
                        return < LocButton id={loc} key={loc} locs={locs} setLocs={setLocs}></LocButton>
                    }) : null}
                </div>
                <div className="ready-button">
                    {chars ? <Button variant='oulined' onClick={()=> {console.log("let's make a story!!!")}} startIcon={< AutoStoriesOutlinedIcon/>}>Let's make a story!</Button> : null}
                </div>
            </div>
        </>
    )
}
export default Mad;