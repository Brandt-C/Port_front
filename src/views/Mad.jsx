import { useEffect, useRef, useState } from "react";
import axios from "axios";
import '../css/mad.css'

// import PublicIcon from '@mui/icons-material/Public';
// import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { Button } from '@mui/material';
import CharButton from "../components/CharButton";
import LocButton from "../components/LocButton";
import { Link } from "react-router-dom";
import IncompleteAlert from "../components/IncompleteAlert";


// <Button variant='oulined' startIcon={<SnowshoeingIcon />}>Bring in Characters</Button>

const Mad = () => {

    const getDeets = async () => {
        let response = await axios.get('https://behind-the-madiverse.onrender.com/api/story/rando');
        return response.status === 200 ? response.data : null
    };
    const loadDeets = async () => {
        let data = await getDeets();
        // console.log(data);
        setDeets(data);
    }
    const [deets, setDeets] = useState(() => loadDeets());

    const [ready, setReady] = useState(false)
    const [chars, setChars] = useState(false);
    const [locs, setLocs] = useState(false);
    const [text, setText] = useState();


    const loadButtons = () => {
        let charButtonArray = [];
        for (let i = 0; i < deets.data.chars; i++) {
            charButtonArray.push('c' + i)
        };
        let locButtonArray = [];
        for (let i = 0; i < deets.data.locs; i++) {
            locButtonArray.push('l' + i)
        };
        // console.log(charButtonArray, locButtonArray);
        setChars(charButtonArray);
        setLocs(locButtonArray);
    }
// useEffect(()=> console.log('useEffect for CHARS and LOCS in mad.jsx is working!!!!'), [chars, locs])
    // const charUniArr = ['rm', 'sw', 'got', 'pok']
    // const getRandomCharDeets = async (st) => {
    //     let response = await axios.get(`http://127.0.0.1:5000/api/char/rando/${st}`);
    //     return response.status === 200 ? response.data : null
    // };
    // const loadRandomCharDeets = async (st) => {
    //     let data = await getRandomCharDeets(st);
    //     // console.log(` got the random char data:${data}`);
    //     return data.data;
    // };
    // const checkChars = async () => {
    //     let copyChars = [...chars];
    //     for (let i = 0; i < copyChars.length; i++) {
    //         if (typeof copyChars[i] === 'string') {
    //             let rando = charUniArr[Math.floor(Math.random() * charUniArr.length)];
    //             copyChars[i] = await loadRandomCharDeets(rando);
    //         }
    //     }
    //     console.log(copyChars);  // this looks like it should but. . . 
    //     setChars(copyChars);
    //     console.log(chars); //this doesn't appear to be working!
    // }

    const checkReady = () => {
            if (!chars || !locs){
                return false
            }
            for (let i = 0; i < chars.length; i++) {
                if (typeof chars[i] !== 'object') {
                    return false
                }
            }
            for (let i = 0; i < locs.length; i++) {
                if (typeof locs[i] !== 'object') {
                    return false
                }
            }return true
    }
    const sendStory = async () => {
        // await checkChars();


        if (!checkReady()){
            console.log('Not ready');
        } else {
            setReady(true);
        }
        // console.log(chars); // prints out the ids in the array ==> ['c0', 'c1 ], looks like state isn't actually being reset?
        let response = await axios.post("https://behind-the-madiverse.onrender.com/api/getstory", {
            c: chars,
            l: locs,
            sid: deets.sid
        });
        if (response.status === 200) {
            // console.log(response.data, response.data.text);
            setText(response.data.text);
        }
    }

    {/* <Button variant='oulined' onClick={sendStory} startIcon={< AutoStoriesOutlinedIcon/>}>Let's make a story!</Button> */ }
    {/* <Link to="/story" state={{'chars':chars, 'locs':locs}}><Button variant='oulined' startIcon={< AutoStoriesOutlinedIcon/>}>Let's make a story!</Button></Link> */ }
    return (
        <>

            <h1>Your Madiverse Story:</h1>
            <h3>Choose from 4 different fictional universes to generate a unique story!</h3>

            {!chars ? < Button onClick={() => loadButtons()} variant="contained">Let's build a story!</Button> : null}

            <div className="button-container">
                <div className="char-buttons">
                    {chars ? chars.map((char, id) => {
                        return < CharButton id={char} key={id} chars={chars} setChars={setChars}></CharButton>
                    }) : null}
                </div>
                <div className="loc-buttons">
                    {locs ? locs.map((loc, id) => {
                        return < LocButton id={loc} key={id} locs={locs} setLocs={setLocs}></LocButton>
                    }) : null}
                </div>
                <div className="incomp-alert">
                {/* {ready && ready.r === 1 ? <IncompleteAlert ></IncompleteAlert> :null} */}
                </div>
                <div className="ready-button">
                    {!ready && !text && chars?
                        <Button variant='oulined'  sx={{my:2}} onClick={sendStory} startIcon={< AutoStoriesOutlinedIcon />}>Let's make a story!</Button> 
                        :
                        ready && !text ?
                        <IncompleteAlert ></IncompleteAlert>
                        : null}
                </div>
                <div className="send-story-button">
                {text ?
                            <Link to="/story" state={{ 'chars': chars, 'locs': locs, 'text': text }}><Button id='view-story' variant='oulined' sx={{my:2}} startIcon={< AutoStoriesOutlinedIcon />}>View story</Button></Link>
                            : null}
                      </div>      
            </div>
        </>
    )
}
export default Mad;