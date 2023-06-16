import Carousel from "nuka-carousel";
import '../css/home.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1> Welcome to the Madiverse</h1>
            <h3>Combine fictional universe characters and locations that intertwine into unique stories.</h3>
            <h5></h5>
            <div className="car-container">
              <Carousel autoplay='true'>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art11.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art7.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art2.jpg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art5.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art4.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art6.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art9.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art1.jpg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art8.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art10.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art3.jpg" width='400'/></div>
            </Carousel>  
            </div>
           <Link to='/mad'><Button variant='outlined' color='primary' sx={{my:2}}>Let's go!</Button></Link>
            
        </>
    )
}
export default Home;