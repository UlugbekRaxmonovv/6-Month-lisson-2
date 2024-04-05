import React from 'react';
import './Hero.css'
import { IoLogoApple } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import rasm1 from '../../imags/rams1.webp'

const Hero = () => {
    return (
        <div>
        <section className='card'>
            <div className="container">
                <div className="card-all">
                <div className="card-box">
                        <div className="card-linkk">
                        <div className="card-nav">
                            <IoLogoApple className='img' />
                            </div>
                            <div className="card-nav">
                            <p>iPhone 14 Series</p>
                            </div>
                        </div>
                        <h1>Up to 10% off Voucher</h1>
                     <div className="box-1">
                     <div className="box-2">
                            <p>Shop Now</p>
                        </div>
                        <div className="box-2">
                        <FaAngleRight  className='img1'/>
                        </div>
                     </div>
                    </div>
                    <div className="card-box">
                       <img src={rasm1} alt="" />
                    </div>
                </div>

            </div>
        </section>
        </div>
    );
}

export default Hero;
