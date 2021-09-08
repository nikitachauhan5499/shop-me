import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
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

export default Home
