import { useContext, useState } from "react"
import ProductContext from "../Context/ProductContext"

import { Button, Form, Modal } from "react-bootstrap/"

function DetailModal({ data, dataModal, setDataModal, handleChange }) {
  const { productId, onProdChange, show, onShouldShow, price, onPriceChange } =
    useContext(ProductContext)
  const product = data.filter((item) => item.id === productId).pop()

  const handleClose = () => {
    onShouldShow(false)
    // setDataModal(null)
  }

  const handleInputChange = (e) => {
    const target = e.target.value
    onPriceChange(target)
  }

  const priceInputChange = () => {
    const index = data.findIndex((object) => {
      return object.id === productId
    })
    if (index !== -1) {
      data[index].price = parseInt(price)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleChange(product)
    priceInputChange()
    onPriceChange("")
    onShouldShow(false)
  }

  // const handlePriceChange = (item, value) => {
  //   const idx = cart.indexOf(item)
  //   const arr = cart
  //   arr[idx].price += value

  //   if (arr[idx].price === 0) {
  //     arr[idx].price = 1
  //   }

  //   setStore([...arr])
  // }

  const handleSubmit = () => {
    onShouldShow(false)
    onPriceChange("")
  }

  const handleShow = (id) => {
    onShouldShow(true)
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dataModal?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                <img
                  src={dataModal?.image}
                  style={{ width: "40%", height: "150px" }}
                  alt=""
                />
                <h4>{dataModal.description}</h4>
              </div>
              <Form.Control
                required
                type="number"
                placeholder="Price"
                min={1}
                autoFocus
                value={price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleChange(product)
              priceInputChange()
              handleSubmit(false)
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DetailModal
