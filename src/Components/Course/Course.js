import React from 'react';
import "./Course.css"

const course = (props) => {
    console.log(props)
   
    return (
        <div className="course-detail">
           
            <div className="course">
                
            Course ID: {props.course.id}<br/> <h2>Course Name :{props.course.Name}</h2>
            <h3>Course Fee: ${props.course.Fee}</h3>
            <div>
            <button 
             className="enroll-button"onClick ={ () => props.handleAddCourse(props.course)} >
                 <b>Enroll Now</b> 
                 </button>
            </div>
            </div>
            
         
   
        </div>
    );
};

export default course;