import React from 'react';
import { useState } from 'react';
import "./Data.css"
import Course from "../Course/Course"
import Cart from './Cart/Cart';
const Data = () => {
    
        let course =[
        
            {
                id:1,
                 Name:"Web Development",
                 image:"https://imgur.com/sIaZz6T",
                 Fee:100
                
            },
            {
                id:2,
                 Name:"Design Development",
                 image:"https://imgur.com/21xsem5",
                 Fee:50
                
            },
            {
                id:3,
                 Name:"Graphic Development",
                 image:"https://imgur.com/wc8ki0h",
                 Fee:50
                
            },
            {
                id:4,
                 Name:"React js",
                 image:"https://imgur.com/bc4bMku",
                 Fee:50
               
            },
            {
                id:5,
                 Name:"English crush course",
                 image:"https://imgur.com/V5fQNYG",
                 Fee:10
                
            },
            {
                id:6,
                 Name:"Photo shop",
                 image:"https://imgur.com/wc8ki0h",
                 Fee:10
               
            },
            {
                id:7,
                 Name:"Microsoft Basic and Advanced",
                 image:"https://imgur.com/1EfbYQv",
                 Fee:20
              
            },
            {
                id:8,
                 Name:"illastrator basic and advanced",
                 image:"https://imgur.com/9nWjmcf",
                 Fee:20
                
            },
            {
                id:9,
                 Name:"Angular App",
                 image:"https://imgur.com/Jq7x2GK",
                Fee:40
                
            },
            {
                id:10,
                 Name:"Mobile App Development",
                 image:"https://imgur.com/TQdLafW",
                 Fee:30
               
            },
            {
                id:11,
                Name:"Mongo Bd",
                image:"https://imgur.com/yf50qmX",
             Fee:30
                
            },
            {
                id:12,
             Name:"Basic Language Development ",
             image:"https://imgur.com/V5fQNYG",
                 Fee:50
                
            },
            {
                id:13,
                 Name:"E-marketing",
                 image:"https://imgur.com/wc8ki0h",
                 Fee:10
                
            },
            {
                id:14,
                Name:"Digital marketing",
                image:"https://imgur.com/21xsem5",
                Fee:50
               
            },
            {
                id:15,
                Name:"Basic Business development ",
                Fee:150
               
            }
            
        ]
      
const first12=course.slice(0,12);
console.log(first12)
let [courses,setCourses]=useState(first12)
const [cart,setCart]=useState([]);
      
   const handleAddCourse = (course) =>{
      const newCart=[...cart,course];
      setCart(newCart)
      
   }
       
        return (
            <div className="course-data">
               

             <div className="course-name">
             

                 {
                     courses.map(course => 
                     <Course handleAddCourse={handleAddCourse}
              
                    
                      course={course}>


                     </Course> )
                 }
            
             
             </div>
            <div className="cart-container">
                <div >
                <Cart cart ={cart}></Cart>
                </div>
                
            </div>
             
            </div>
        );
    };
    

export default Data;