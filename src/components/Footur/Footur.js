import React from 'react';
import './Footur.css'
import { FaChevronRight } from "react-icons/fa6";
import rasm1 from '../../imags/apppli1.png'
import rasm2 from '../../imags/googli.png'
import rasm3 from '../../imags/qrko.png'
import { FaYandex } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Footur = () => {
    return (
        <div>
            <footer>
                <div className="containe">
                    <div className="footur">
                        <div className="footur-all">
                            <ul>
                                <h1>Exclusive</h1>
                                <li>
                                    <a href="" className="">Exclusive</a>
                                </li>
                                <li>
                                    <a href="" className="">Get 10% off your first order</a>
                                </li>
                                <li>
                                <div className="input-1">
                                <div className="input-all1">
                                    <input  type="gmail"  placeholder="Enter your email"/>
                                </div>
                                <div className="input-all">
                                <FaChevronRight  className='tili'/>
                                </div>
                            </div>
                                </li>
                            </ul>
                        </div>
                 
                    <div className="footur-all">
                    <ul>
                        <h1>Support</h1>
                        <li>
                            <a href="" class="">111 Bijoy sarani, Dhaka,        <br />  DH 1515, Bangladesh.</a>
                        </li>
                        <li>
                            <a href="" class="">exclusive@gmail.com</a>
                        </li>
                        <li>
                            <a href="" class="">+88015-88888-9999</a>
                        </li>
                       
                    </ul>
                </div>
                <div class="footur-all">
                    <ul>
                        <h1>Account</h1>
                        <li>
                            <a href="" class="">My Account</a>
                        </li>
                        <li>
                            <a href="" class="">Login / Register</a>
                        </li>
                        <li>
                            <a href="" class="">Cart</a>
                        </li>
                        <li>
                            <a href="" class="">Wishlist</a>
                        </li>
                        <li>
                            <a href="" class="">Shop</a>
                        </li>
                        
                    </ul>
                </div>
             
                <div class="footur-all">
                    <ul>
                        <h1>Account</h1>
                        <li>
                            <a href="" class="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="" class="">Terms Of User</a>
                        </li>
                        <li>
                            <a href="" class="">FAQ</a>
                        </li>
                        <li>
                            <a href="" class="">Contact</a>
                        </li>
                        <li>
                            <a href="" class="">Shop</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="footur-all">
                    <ul>
                        <h1>Download App</h1>
                        <li>
                            <a href="" class="">Save $3 with App New User Only</a>
                        </li>   
                        <div>
                            <div className="img">
                                <div class="iamgi">
                                    <img src={rasm3} alt=""/>
                                </div>
                                <div class="iamgi">
                                    <div class="rasm">
                                        <div class="rasm1">  
                                            <img src={rasm1} alt=""/>  
                                        </div>
                                        <div class="rasm1">  
                                            <img src={rasm2} alt=""/>  
                                        </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <li>
                            <div class="ikon">
                                <div class="ikon-all">
                                <FaYandex className='etim-list'/>
                                </div>
                                <div class="ikon-all">
                                <FaYoutube  className='etim-list'/>
                                </div>
                                <div class="ikon-all">
                                <FaInstagramSquare  className='etim-list'/>
                                </div>
                                <div class="ikon-all">
                                <PiPaperPlaneTiltFill  className='etim-list'/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>

                </div>
                <div class="tixit">
            <h3>Copyright Rimel 2022. All right reserved</h3>
        </div>
            </footer>
 
        </div>
    );
}

export default Footur;
