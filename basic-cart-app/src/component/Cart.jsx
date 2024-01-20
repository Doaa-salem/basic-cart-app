import React from "react";

//bootstrap
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  //   console.log(cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <h1 className='py-5 mt-4'>My Cart</h1>
      <Button
        variant='primary'
        className='mb-4 '
        onClick={() => dispatch(clear())}>
        Clear Cart
      </Button>
      <h3>Total Price :{totalPrice.toFixed(2)}$</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Image
                    src={product.image}
                    style={{ height: "100px", width: "100px" }}
                    alt={product.title}
                  />
                </td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    variant='danger'
                    onClick={() => dispatch(deleteFromCart(product))}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
