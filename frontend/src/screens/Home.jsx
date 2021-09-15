import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/products");
            setProducts(data);
        }
        fetchProducts();
    }, [])

    return (
        <Row>
            {
                products.map(product => {
                    return <Col key={product._id} md={3}>
                                <Product product={product}/>
                            </Col> 
                })
            }  
        </Row>  
        
    )
}

export default Home;
