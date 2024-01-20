import React from "react";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/Products-Slice";
import { addToCart } from "../rtk/slices/cart-slice";

const Products = () => {
  const products = useSelector((state) => state.products);
  //   console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className='pt-5'>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className='pt-5'>
            <Card style={{ width: "18rem", height: "600px" }}>
              <Card.Img
                variant='top'
                src={product.image}
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.slice(0, 50)} ...</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Button
                  variant='primary'
                  onClick={() => dispatch(addToCart(product))}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
