import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import {remove} from "../store/cartSlice"

function Cart() {
  const cartItems = useSelector(state=>state.cart)
  const [totalPrice,setTotalPrice] = useState(0)
  useEffect(()=>{
    let totalPrice=0
    cartItems.forEach((item)=>(
      totalPrice += item.price
    ))
    setTotalPrice(totalPrice.toFixed(2))
  },[cartItems])
  const dispatch = useDispatch()
  const removeItem = (id)=>{
    return ()=>{
      console.log(id);
      dispatch(remove(id));
    }
  }
  return (
    <>
    <h1>Your cart</h1>
    <div className="flex flex-row justify-center mx-4">
    {cartItems.map((item)=>(
      <Card style={{ width: '18rem',padding:"1em" }} key={item.id}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Img variant="top" src={item.image} />
        <small className="text-muted">INR : {item.price}</small>
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={removeItem(item.id)}>Remove</Button>
      </Card.Footer>
      </Card>
    ))}
    </div>
    <div className="flex justify-center items-center">
    <Button variant="secondary">{totalPrice}</Button>
    </div>
    </>
  )
}
export default Cart