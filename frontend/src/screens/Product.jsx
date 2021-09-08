import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <Card style={{marginTop: '16px', marginBottom: '16px', padding: '16px', width: '18rem'}}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>
                <Card.Text as="div">
                    $ {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;
