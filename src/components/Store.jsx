import { useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap/"
import { FaTrashAlt } from "react-icons/fa"

function Store({ store, setStore }) {

  const deleteClick = (id) => {
    const remove = store.filter((item) => {
      return item.id !== id
    })
    setStore(remove)
  }
  return (
    <div>
      {store.length === 0 ? (
        <h1 className="d-flex align-items-center justify-content-center">
          This Store is Empty!
        </h1>
      ) : (
        <Container className="d-flex flex-wrap gap-3 mt-2">
          {store.map((item, index) => {
            return (
              <div key={index} className="d-flex">
                <Row>
                  <Col>
                    <Card style={{ width: "14rem" }}>
                      <div className="d-flex align-items-center justify-content-center">
                        <Card.Img
                          style={{ width: "50%", height: "100px" }}
                          variant="top"
                          src={item.image}
                        />
                      </div>

                      <Card.Body>
                        <Card.Title
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.description}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                          <Card.Text>${item.price}</Card.Text>
                          <Button
                            className="bg-danger"
                            onClick={() => deleteClick(item.id)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )
          })}
        </Container>
      )}
    </div>
  )
}

export default Store
