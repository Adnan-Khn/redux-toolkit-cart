/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {add} from "../store/cartSlice"
import { getProducts } from "../store/productSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  //const {data:products} = useSelector(state=>state.product)
  useEffect(() => {
    //dispatch(getProducts())
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addToCart = (product) => {
    return () => {
      console.log(product);
      dispatch(add(product))
    };
  };
  const cards = products.map(product => (
    <div className="col-md-3" key={product.id}  style={{marginBottom:"10px"}}>
      <Card key={product.id} className="h-100" >
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{ width: "100px",height:"130px"}}/>
        </div>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR : {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'white'}}>
        <Button variant="primary" onClick={addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row">
        {cards}
      </div>
    </>
  );
};
export default Products;
