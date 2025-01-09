/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function InfoBox({ info }) {
    const fog_url = "https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9nfGVufDB8fDB8fHww";
    const cold_url = "https://plus.unsplash.com/premium_photo-1670560071471-edaf5b14d9b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8";
    const hot_url = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const rain_url = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const haze_url = "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const clear_url = "https://plus.unsplash.com/premium_photo-1733342564921-f1444441e694?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const thunderderstorm_url = "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";
    const snow_url = "https://plus.unsplash.com/premium_photo-1727019190650-8b3f7c1225e2?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 400 }} className='card'>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={
                            info.temp < 1 ? cold_url : info.temp > 30 ? hot_url:
                            info.description === "fog" ? fog_url : 
                            info.description === "clear sky" ? clear_url : 
                            info.description === "few clouds" ? clear_url : 
                            info.description === "scattered clouds" ? clear_url : 
                            info.description === "broken clouds" ? clear_url : 
                            info.description === "shower rain" ? rain_url : 
                            info.description === "rain" ? rain_url : 
                            info.description === "thunderstorm" ? thunderderstorm_url : 
                            info.description === "snow" ? snow_url : 
                            info.description === "mist" ? haze_url : 
                            info.description === "haze" ? haze_url : 
                            info.description === "smoke" ? haze_url : 
                            info.description === "dust" ? haze_url : 
                            info.description === "sand" ? haze_url : 
                            info.description === "ash" ? haze_url : 
                            info.description === "squall" ? haze_url : 
                            clear_url}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='cityname'>
                            <div style={{fontSize: "1.2rem",fontWeight: "700"}}>
                                {info.city} &nbsp;
                                {info.description === "snow" ?<span> <AcUnitIcon /> </span>:
                                info.description === "rain" ? <span><GrainIcon /></span> : 
                                info.description === "thunderstorm" ? <span><ThunderstormIcon /></span> :
                               info.description === "clear sky" ?  <span><ClearAllIcon/> </span>: 
                               info.temp > 30 ?  <span><WbSunnyIcon /> </span>: 
                                <span><CloudIcon /></span>}
                            </div>
                            <div style={{fontSize: "1.2rem",fontWeight: "600"}}>Temp: <span>{info.temp}&deg;C</span></div>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'div'} className='componets'>
                            <div>Min Temp: <span>{info.temp_min}&deg;C</span></div>
                            <div>Max Temp: <span>{info.temp_max}&deg;C</span></div>
                            <div>Humidity: <span>{info.humidity}%</span></div>
                            <div>Feels Like: <span>{info.feelsLike}&deg;C</span></div>
                            <div>Pressure: <span>{info.pressure} hPa</span></div>
                            <div>Ground Level: <span>{info.grnd_level} hPa</span></div>
                            <div>Sea Level: <span>{info.sea_level} hPa</span></div>
                            <div>Details: <span>{info.description}</span></div>
                            <div>Sunrise: <span>{new Date(info.sunrise * 1000).toLocaleTimeString()}</span></div>
                            <div>Sunset: <span>{new Date(info.sunset * 1000).toLocaleTimeString()}</span></div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}