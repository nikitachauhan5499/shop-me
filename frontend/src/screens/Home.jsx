import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
        {
            loading ? <h2>Loading...</h2> : error ? <h2> { error } </h2> : <Row>
            {
                products.map(product => {
                    return <Col key={product._id} md={3}>
                                <Product product={product}/>
                            </Col> 
                })
            }  
        </Row>  
        }
        
        </div>
    )
}

export default Home;
