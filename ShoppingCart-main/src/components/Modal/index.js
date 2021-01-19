import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from "react-router-dom";
import './styles.scss';

const AddToCartConfirmationModal = withRouter((props) => {
  const {
    buttonLabel,
    className,
    showModal
  } = props;

  const toggle = () => showModal(false);
  const redirectToCart = ()=> props.history.push('/cart')

  return (
    <div className='modal'>
      <Modal isOpen={true} className='Modal'>
        <ModalHeader className="title" toggle={toggle}>Added to Cart</ModalHeader>
        <ModalBody>
            <img className="modal-image" src={props.product.image}></img>
            <span className="name">{props.product.name}</span>
            <span className="price"> {props.product.price}</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={redirectToCart}>View Cart</Button>{' '}
          <Button color="secondary" onClick={toggle}>Continue Shopping</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
})

export default AddToCartConfirmationModal;