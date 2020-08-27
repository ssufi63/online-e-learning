import React from 'react';
import './Course.css';

const Course = (props) => {
    const { title, instructor, duration, price, image } = props.course;
    return (
        <div className="container">
            <div className="main-area row">
            <div className="image"> 
                <img src={image} alt="" />
            </div>
            <div className ="details">
                <h4>{title}</h4>
                <h5><small>by : {instructor}</small></h5>
                <h5>Duration : {duration}</h5>
                <h4>Price : {price} bdt </h4>
            </div>
            <div>
            <button  type="button" className="btn btn-info" onClick = {() => props.handlePurchase(props.course)}>Enroll Now</button>
            </div>
            </div>

        </div>
    );
};

export default Course;