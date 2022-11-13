import React, { useContext, useState } from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap/"
import ProductContext from "../Context/ProductContext"
import DetailModal from "./DetailModal"
import ClipLoader from "react-spinners/ClipLoader";

function Home({ data, handleChange,loading }) {
  const { productId, onProdChange, show, onShouldShow } =
    useContext(ProductContext)
  const [dataModal, setDataModal] = useState(0)

  return (
    <Container className="container-fluid d-flex flex-wrap align-items-center justify-content-center gap-4 vh-100">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Row>
              <Col className="d-flex flex-row">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ width: "250px", height: "250px" }}
                    variant="top"
                    src={item.image}
                  />
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
                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => {
                          onProdChange(item.id)
                          onShouldShow(true)
                           setDataModal(item)
                      }}
                    >
                      Add to Store
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        )
      })
      }     
       <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <DetailModal data={data}  dataModal={dataModal} setDataModal={setDataModal} handleChange={handleChange} />
    </Container>
  )
}

export default Home
