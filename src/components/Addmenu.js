import React, { useState } from 'react';
import './addmenu.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function Addmenu() {
  const [fooddata, setFooddata] = useState({
    itemname: '',
    price: '',
    description: ''
  });

  const foodchange = (e) => {
    setFooddata({
      ...fooddata,
      [e.target.name]: e.target.value
    });
  };

  const foodadding = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (fooddata.itemname && fooddata.price && fooddata.description) {
      axios.post('http://localhost:4000/fooddetails', fooddata)
        .then((res) => {
          alert(res.data.msg);
          // Clear form data after successful submission
          setFooddata({
            itemname: '',
            price: '',
            description: ''
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter all values");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='addmenuitem'>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label>Item Name</label>
              <input
                type="text"
                onChange={foodchange}
                value={fooddata.itemname}
                name="itemname"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                onChange={foodchange}
                value={fooddata.price}
                name="price"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                onChange={foodchange}
                value={fooddata.description}
                name="description"
              />
            </div>
            <button
              className="form-submit-btn"
              type="submit"
              onClick={foodadding}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addmenu;