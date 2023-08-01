import Carousel from "nuka-carousel";
import '../css/home.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {

        // THIS was a leftover from sleeping server, COMPLETELY unnecesary now

        
    // const hi = async () => {
    //     let response = await axios.get('https://behind-the-madiverse.onrender.com/api/hi');
    //     return response.status === 200 ? response.data : null
    // }

    // const loadHi = async () => {
    //     let data = await hi();
    //     console.log(data.message);
    // }
    // loadHi();


    return (
        <>
            <h1> Welcome to the Madiverse</h1>
            <h3>Combine fictional universe characters and locations that intertwine into unique stories.</h3>
            <h5></h5>
            <div className="car-container">
              <Carousel autoplay='true'>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1fay3WTCepz2z1fFejnm-WUQY-MnMa3Jg" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1hbKkZXgDl5LqiwwLNXx2z-uQ9iioOtIc" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1qdyjk6PScVxEHdQRQ-RLHov6o2-95e5h" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=15k0e8Tl8_UNZLVgc7HjzYqGkLoK5l4EG" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1UVdvOyRzVK-chTgFFwvlpCioF2ryomPk" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1-xN_1Qe5byVHSiSrATk4AZW0yxkUcjlC" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1PmW8pvWvHI9N7PyQ_lOt60_oCkcFDQuK" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1vwUDQXyUWYn-F9VRZT9ciGomgj59ZBBD" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=17nrB1f09HOwXgxg64D_Dp5GiFjXXpQeu" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1Dh5G2uH3gt3XHAIQ0IEMZbFxa4G_RCLe" width='400'/></div>
                <div style={{display:'flex', justifyContent:'center'}}><img className="car-pics" src="https://drive.google.com/uc?id=1NOtxnK6JZe_mYVqajku2gEYNS8E7iB_s" width='400'/></div>
                
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
