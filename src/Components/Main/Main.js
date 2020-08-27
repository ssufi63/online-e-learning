import React from 'react';
import course from '../../course';
import { useState } from 'react';
import './Main.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Main = () => {
    const [courses, setCourses] = useState(course);
    const [cart, setCart] =useState([]);

    const handlePurchase = (course) =>{
        // console.log('purchase',course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className= "main">
            <div className="course">
            {
                    courses.map(course => <Course 
                        handlePurchase = {handlePurchase}
                        course = {course} className="image"></Course>)
                }
            </div>

            <div className="purchase">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;