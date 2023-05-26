import { useState } from "react";
import axios from "axios";
import CharButton from "../componenets/CharButton";
import LocButton from "../componenets/LocButton";

const Mad = () => {

    // const [story, setStory] = useState(null);
    const [deets, setDeets] = useState();

    const getDeets = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/story/rando');
        return response.status === 200 ? response.data : null
    };
    const loadDeets = async () => {
        let data = await getDeets();
        console.log(data)
    }
    loadDeets();

    return (
        <>
            <h1>Under construction!</h1>
            <h3>This is gonna be some really cool stuff.  Pretty soon.  I swear.</h3>
            <h4>Like a mad-lib generator with choices from multiple fictional universes.</h4>
            < CharButton ></CharButton>
            < LocButton ></LocButton>
        </>
    )
}
export default Mad;