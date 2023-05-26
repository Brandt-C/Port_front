import { Link } from "react-router-dom";
import '../css/about.css';

const About = () => {
    return (
        <>
            <h1>Me!</h1>

            <h2>You could say a lot about me</h2>
            <h3>Are they saying a lot about me?</h3>
            <p>That kid who took apart the remote, game-controller, cd-player (showing age now huh?), bike, car and more: that was me!  At least half of those things got put back together and a couple were even improved!</p>
            <p>Now I've taken that same success ratio and applied it to software and apps.  Watch out internet, some small portions of you are due for improvement. . . </p>
            <h6>Did you come here to offer me untold amounts of money for a job?  Sweet, I'm glad you're here and you should get in touch (links below!).  If not, that's ok, we can still hang (links below!)</h6>
            <div>
            <Link class='logo-link' to='https://www.linkedin.com/in/brandt-carlson-51735625' target="_blank"><img src='./src/assets/In-White-48.png'/></Link>
            <Link class='logo-link' to='https://github.com/Brandt-C' target="_blank"><img src="./src/assets/github-mark-white.png" style={{ maxWidth: 50 + 'px'}}/></Link>
            
            </div>
        </>
    )
}
export default About;