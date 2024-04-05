import React from 'react';

import './Header.css'
import { IoSearchOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { BiCart } from "react-icons/bi";
import { IoMenuOutline } from "react-icons/io5";
let Links = ['Home','Contact','Admin']
let obj =[
    {
        rasm:  <GiSelfLove  />,
        rasm1: <BiCart  />
    }
]
const Header = () => {
    return (
        <div>
             <div className="all">
             <div className="container">

                 <div className="all3">
                 <div className="all1">
                            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        </div>
                        <div className="all1">
                           <h4>ShopNow</h4>
                        </div>
                        <div className="all1">
                            <select name="" id="">
                            <option value="">English</option>
                            <option value="">rus</option>
                            </select>
                        </div>
                 </div>
                    </div>
                    </div>
            <header>
                <div className="container">
                   
                    <nav>
                        <a href="" className="">Exclusive</a>
                        <div className="nav-link">
                              <div className="nav-etim">
                                {Links.map((index,value)=>(
                                 <a key={value} href="#" className="">{index}</a>
                                    ))}
                         
                              <div className="input">
                              <div className="input-all">
                                    <input  type="text"  placeholder='What are you lokking for?'/>
                                </div>
                                <div className="input-all">
                                <IoSearchOutline className='box' />
                                </div>
                              </div>
                            {obj.map((value,index)=>(
                               <div className='box1' key={index}>
                                  <a href="#" className='box'>{value.rasm}</a>
                                  <a href="#" className='box'>{value.rasm1}</a>
                               </div>
                            ))}
                              </div>
                               
                        </div>
                        <div className="menu">
                               <IoMenuOutline />
                               </div>
                    </nav>
                </div>
            </header>

        
        </div>
    );
}

export default Header;


