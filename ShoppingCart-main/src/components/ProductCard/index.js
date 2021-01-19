import React, {useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import './styles.scss';
import { updateCart } from '../../actions/cartData';
import AddToCartConfirmationModal from '../../components/Modal';

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const [modal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const cartData = useSelector(state => state.cartData)
  const addToCart=()=>{
    dispatch(updateCart(props.data));
    setProduct(props.data)
    setShowModal(true);
  }
  const showModal = () => {
    setShowModal(false);
    setProduct({})
  }
  return (
    <div className="product-card-wrapper">
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>{props.price}</CardText>
            <Button onClick={addToCart}>Add to Cart</Button>
        </CardBody>
      </Card>
      {modal && <AddToCartConfirmationModal product={product} showModal={showModal}/>}
    </div>
  );
};

export default ProductCard;