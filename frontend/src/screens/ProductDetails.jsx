import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const ProductDetails = ({ match }) => {
    const [ product, setProduct ] = useState([]);
    useEffect(() => {
        const fetchDetails = async () => {
            const { data } = await axios.get(`/products/${match.params.id}`);
            setProduct(data);
        }
        fetchDetails();
    }, [match])

    return (
        <div>
            <Link to="/" className="btn">
                <i className="fas fa-arrow-left"></i>
                &nbsp; Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <span>
                                Price: ${product.price}
                            </span>
                            &nbsp;
                            <strong>
                                { product.countInStock > 0 ? 'In Stock' : 'Out of Stock' } 
                            </strong>       
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <Button type="button" className="btn-block">Add to Cart</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetails;