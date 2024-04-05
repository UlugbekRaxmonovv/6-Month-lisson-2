import React from 'react';
import './Main.css'
import rasm1 from '../../imags/bootm.png'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import rasm2 from '../../imags/phoni1.jpg'
import rasm3 from '../../imags/phoni2.jpg'
import rasm4 from '../../imags/phoni3.jpg'
import rasm5 from '../../imags/phoni5.webp'
import rasm6 from '../../imags/phoni8.jpg'
import { GiSelfLove } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import rasm7 from '../../imags/rasm1.png'
import rasm8 from '../../imags/rasm2.png'
import rasm9 from '../../imags/rasm3.png'




const Main = () => {

    const Date =[
        {
            id:1,
            img: <IoIosPhonePortrait />,
            title:"Phones"
        },
        {
            id:2,
            img:   <FaHeadphones /> ,
            title:"HeadPhones"
        },
        {
            id:3,
            img:   <MdComputer />,
            title:"Computers"
        },
        {
            id:4,
            img:  <BsSmartwatch />,
            title:"SmartWatch"
        },
        {
            id:5,
            img:    <FaCamera />,
            title:"Camera"
        },
        {
            id:6,
            img: <FaHeadphones /> ,
            title:"HeadPhones"
        }
    ]

    let run = Date.map((el)=>
    <div key={el.id} className="card1">
    <div className="box1">
  {el.img}
         </div>
     <h1>{el.title}</h1>
     </div>
    )


    const Card =[
        {
            id:1,
            img:rasm2,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:2,
            img:rasm3,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:3,
            img:rasm4,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:4,
            img:rasm5,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:5,
            img:rasm6,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:6,
            img:rasm4,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:7,
            img:rasm3,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
        {
            id:8,
            img:rasm2,
            icon: <GiSelfLove />,
            icon1: <IoMdEye />,
            title:'Breed Dry Dog Food',
            icons:   <FaStar className='star' />,
            iconss:   <FaStar className='star1' />,
            p:'4.44',
            span:'(34)',
            btn:' Add To Cart'
        },
    ]

    let creadCard =Card.map((result)=>
    <div className="hammasi-all1" key={result.id}  data-aos="flip-left">
                 <div className="imagis">
                    <img src={result.img} alt="" />
                    <div className="icon">
                 <div className="icon-all">
                 {result.icon}
                    </div>
                    <div className="icon-all">
                   {result.icon1}
                    </div>
                 </div>
                 </div>
                 
                 <h1>{result.title}</h1>
                 <div className="yuluz">
                 <div className="yuluz-all">
                        <p>{result.p}</p>
                    </div> <div className="yuluz-all">
                    {result.icons}
                    {result.icons}
                    {result.icons}
                    {result.iconss}
                    {result.iconss}
                    </div>
                    <div className="yuluz-all">
                        <span>{result.span}</span>
                        </div>

                        <button className='btn'>{result.btn}</button>
                        
                 </div>
                </div>
    
    )


    const Object =[
        {
            id:1,
            img: rasm7,
            title:'FREE AND FAST DELIVERY',
            p:'Free delivery for all orders over $140'
        },
        {
            id:1,
            img: rasm8,
            title:'24/7 CUSTOMER SERVICE',
            p:'Friendly 24/7 customer support'
        },
        {
            id:1,
            img: rasm9,
            title:'MONEY BACK GUARANTEE',
            p:'We reurn money within 30 days'
        },
    ]
    let javob = Object.map((el)=>(
        <div className="section-row" key={el.id}>
        <div className="img">
            <div className="imagi">
                <img src={el.img} alt=""/>
            </div>
           </div>
        <h1 className='teg'>{el.title}</h1>
        <p>{el.p}</p>
    </div>

    ))

    
    return (
        <div>
           <div className="container">
           <div className="row">
           <div className="P-2">
                  <img src={rasm1} alt="" />
                </div>
                <div className="P-2">
                 <h1>Categories</h1>
                </div>
            </div>
            <div className="all1">
            <h1>Browse By Category</h1>
            </div>
          
       <div className="wrappir">
        {run}


        
       </div>




       
       <div className="row">
           <div className="P-2">
                  <img src={rasm1} alt="" />
                </div>
                <div className="P-2">
                 <h1>Categories</h1>
                </div>
            </div>
            <div className="all1">
            <h1>Explore Our Products</h1>
            </div>


            <div className="hammasi1">
              
                {creadCard}
                </div>


<div class="section-all">

    {javob}
  </div>



         

            </div>
            
           </div>
           
    );
}

export default Main;
