import React, { useEffect, useState } from 'react'
import './viewfood.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';


function Viewfood() {

    const [menudetail, setMenudetail] = useState([])


    const view = () => {
        axios.get('http://localhost:4000/viefooddetails',menudetail)
            .then((res) => {
                setMenudetail(res.data.data)
                // console.log(res);

            })
            .catch((err) => {
                setMenudetail(err);
            })
    }


    useEffect(() => {
        view()

    },[])

    return (
        <div>
            <Navbar />

            <div className='outer'>

            <div className='container pt-5'>
                <h1 className='text-center  mb-3'> All Food Details</h1>

                <div className='flexconcept '>
                    {menudetail.map((item, index) => (
                        <div className=''>
                        <Card style={{ width: '18rem',height:'25rem' }}>
                        <ListGroup variant="flush">
                        <ListGroup.Item>FOOD DETSAILS</ListGroup.Item>

                          <ListGroup.Item>ITEM NAME:{item.itemname}</ListGroup.Item>
                          <ListGroup.Item>PRICE :{item.price}</ListGroup.Item>
                          <ListGroup.Item> Description:{item.description}</ListGroup.Item>
                        </ListGroup>
                      </Card>
                      </div>
                       
                    ))}</div>
            </div>


            </div>
            <Footer />
        </div>
    )
}

export default Viewfood
