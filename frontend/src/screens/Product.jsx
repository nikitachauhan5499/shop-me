import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({product}) => {
    return (
        <Card style={{marginTop: '16px', marginBottom: '16px', padding: '16px', width: '18rem'}}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div style={{marginTop: '16px', marginBottom: '16px'}}>
                        <i class="fas fa-star"></i>
                        &nbsp;{product.rating}
                    </div>
                </Card.Text>
                <Card.Text as="div">
                    $ {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product