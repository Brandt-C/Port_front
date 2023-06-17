import Carousel from "nuka-carousel";
import '../css/home.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const hi = async () => {
        let response = await axios.get('https://behind-the-madiverse.onrender.com/api/hi');
        return response.status === 200 ? response.data : null
    }
    const loadHi = async () => {
        let data = await hi();
        console.log(data.message);
    }
    loadHi();
    return (
        <>
            <h1> Welcome to the Madiverse</h1>
            <h3>Combine fictional universe characters and locations that intertwine into unique stories.</h3>
            <h5></h5>
            <div className="car-container">
              <Carousel autoplay='true'>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art1.jpg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art11.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art7.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art3.jpg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art2.jpg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art4.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art8.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art6.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art9.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art5.png" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="./src/assets/story_art10.png" width='400'/></div>
                
            </Carousel>  
            </div>
           <Link to='/mad'><Button variant='outlined' color='primary' sx={{my:2}}>Let's go!</Button></Link>
           <h6 id="copy">&copy; Brandt Carlson 2023</h6>
            
        </>
    )
}
export default Home;

// const jpgArr = [1, 2, 3]
// const pngArr = [4, 5, 6, 7, 8, 9, 10, 11]
// const shuffleArray = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// shuffleArray(jpgArr);
// shuffleArray(pngArr);
// {jpgArr.map((pic, key)=>{
//     <div style={{display:'flex', justifyContent:'center'}}><img key={key} className="car-pics" src={`./src/assets/story_art${pic}.jpg`} width='400'/></div>
// })}
// {pngArr.map((pic, key)=>{
//     <div style={{display:'flex', justifyContent:'center'}}><img key={key} className="car-pics" src={`./src/assets/story_art${pic}.png`} width='400'/></div>
// })}
