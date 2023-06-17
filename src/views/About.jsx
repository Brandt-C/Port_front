import { Link } from "react-router-dom";
import '../css/about.css';

const About = () => {
    return (
        <>
            <div className="site-div">
                <h1>What is this?</h1>
                <img id='mu' src="./src/assets/mad_uni.jpg" ></img>
                <p>An idea was born of making stories out of characters from a fictional universe in the style of Madlibs.  Only one you say???
                    Now we're on the same page!  With choices from several different universes you can create wonky, wacky, and fun stories blending characters and locations into. . .uh, stories of the Madiverse.
                </p>
                <p>This project has been driven with the help of at least 5 different APIs:</p>
                <a href="https://swapi.dev" ><h4 className="api-links">The Star Wars API</h4></a>
                <a href="https://starwars-visualguide.com/" ><h4 className="api-links">The Star Wars Visual Guide</h4></a>
                <a href="https://rickandmortyapi.com/"><h4 className="api-links">The Rick and Morty API</h4></a>
                <a href="https://pokeapi.co/"><h4 className="api-links">The Pokémon API</h4></a>
                <a href="https://thronesapi.com/"><h4 className="api-links">The Game of Thrones Character API</h4></a>
                <p>Star Wars and all associated names are copyright <a href="https://www.lucasfilm.com/">Lucasfilm ltd.</a>  
                Rick and Morty is created by Justin Roiland and Dan Harmon for <a href="https://www.adultswim.com/">Adult Swim</a>.  
                Game of Thrones is created by David Benioff and D. B. Weiss for <a href="https://www.hbo.com/game-of-thrones">HBO</a>, based on "A Song of Ice and Fire" by George R. R. Martin. 
                Pokémon is a  Japanese media franchise managed by <a href="https://www.pokemon.com/us">The Pokémon Company</a>, founded by <a href="https://www.nintendo.com/">Nintendo</a>, Game Freak, and Creatures. 
The data and images are used without claim of ownership and belong to their respective owners.</p>
                <p>Questions?  Bugs?  Concerns?  Praise?  Let me know: <a href="mailto:Brandt.Carlson11@gmail.com">Brandt.Carlson11@gmail.com</a>
                </p>
                <hr></hr>
            </div>
            <div className="me-div">
                <h2>All about . . . Me!</h2>
                <p className="photo-cap">These aren't me but they ARE generated with prompts that could loosely relate to me.</p>
    
                <div className="pics-div">
                    <img className="work-pics" src="./src/assets/JH_ai.jpg" ></img>
                    <img className="work-pics" src="./src/assets/work_pic.jpg" ></img>
                </div>


                <h2>You could say a lot about me</h2>
                <h3>Are they saying a lot about me?</h3>
                <p>That kid who took apart the remote, game-controller, cd-player (showing age now huh?), bike, car and more: that was me!  
                    At least half of those things got put back together and a couple were even improved!  Now I've taken that same success 
                    ratio and applied it to software and apps.  Watch out internet, some small portions of you are due for improvement. . . </p>
                
                <h5>Did you come here to offer me untold amounts of money for a job?  Sweet, I'm glad you're here and you should get in touch (links below!).  
                    If not. . . that's ok, we can still hang (same links below!)</h5>
            </div>

            <div>
                <Link className='logo-link' to='https://www.linkedin.com/in/brandt-carlson-51735625' target="_blank"><img src='./src/assets/In-White-48.png' /></Link>
                <Link className='logo-link' to='https://github.com/Brandt-C' target="_blank"><img src="./src/assets/github-mark-white.png" style={{ maxWidth: 50 + 'px' }} /></Link>
            </div>
            <div className="old-links">
                <h5>Other older things floating around:</h5>
                <a href="https://cartoony-battle.glitch.me/"><h5>Pokemon Battle</h5></a>
            </div>
            <h6 id="copy">&copy; Brandt Carlson 2023</h6>
        </>
    )
}
export default About;