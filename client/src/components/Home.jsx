// src/HomePage.js
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

import GardeningTool from '../assets/images/GardeningTool.jpg';
import MedicinalPlant from '../assets/images/MedicinalPlants.jpg';
import OrnamentalPlant from '../assets/images/OrnamentalPlants.jpg';
import HeroImage1 from '../assets/images/Plantslider.jpg';
import HeroImage2 from '../assets/images/Flowerslider.jpg';
import HeroImage3 from '../assets/images/Accessories.jpg';
import SampleVideo from '../assets/images/Plant Growth.mp4';

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="home-container">
            <header className="hero-section">
                <Slider {...sliderSettings}>
                    <div className="hero-slide">
                        <img src={HeroImage1} alt="Hero 1" className="hero-image"/>
                        <div className="hero-content">
                            <h1>Welcome to the <span>Online</span> Plant Nursery</h1>
                            <p>Shop For Beautiful and Healthy Plants</p>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <img src={HeroImage2} alt="Hero 2" className="hero-image"/>
                        <div className="hero-content">
                            <h1>Discover Our Exclusive flowers</h1>
                            <p>Find the Best Plants for Your Decoration</p>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <img src={HeroImage3} alt="Hero 3" className="hero-image"/>
                        <div className="hero-content">
                            <h1>Enhance Your Garden with Our Accessories</h1>
                            <p>High-Quality Tools for Every Gardener</p>
                        </div>
                    </div>
                </Slider>
            </header>

            <section className="home-content">
                <h2>Explore Our Plant Categories</h2>
                <div className="plant-categories">
                    <div className="plant-category">
                        <Link to="/OrnamentalPlants">
                            <img src={OrnamentalPlant} alt="Ornamental Plants" />
                            <div className="category-title">
                                <h3>Ornamental Plants</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="plant-category">
                        <Link to="/MedicinalPlants">
                            <img src={MedicinalPlant} alt="Medicinal Plants" />
                            <div className="category-title">
                                <h3>Medicinal Plants</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="plant-category">
                        <Link to="/GardeningTools">
                            <img src={GardeningTool} alt="Gardening Tools" />
                            <div className="category-title">
                                <h3>Gardening Tools</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="video-section">
                <h1>Our Plant Growth In Timelapse</h1>
                <video className="intro-video" controls autoPlay loop muted>
                    <source src={SampleVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </div>
    );
};

export default HomePage;
