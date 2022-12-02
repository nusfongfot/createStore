import React, { useContext, useState } from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap/"
import ProductContext from "../Context/ProductContext"
import DetailModal from "./DetailModal"
import ClipLoader from "react-spinners/ClipLoader"
import axios from "axios"

function Home({ data, handleChange, loading }) {
  const { onProdChange, onShouldShow } = useContext(ProductContext)
  const [dataModal, setDataModal] = useState(0)
  const [search, setSearch] = useState("")
  const url = "https://fakestoreapi.com/products"
  const [resultSearch, setResultSearch] = useState([])

  const handleSearch = async () => {
    const res = await axios.get(url)
    const items = await res.data
    const selectedProduct = items.filter((item) => {
      const category = item.category
      const filterCate = category.toLowerCase().includes(search.toLowerCase())
      return filterCate
    })
    setResultSearch(selectedProduct)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleSearch()
    setSearch("")
  }

  return (
    <Container className="container-fluid d-flex flex-wrap align-items-center justify-content-center gap-4 vh-100">
      {loading ? null : (
        <div className=" input-group mt-3">
          <form className="w-100" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search ['electronics','men's clothing','jewelery','women's clothing']"
              aria-label="Search a item"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      )}

      {resultSearch.length === 0 ? (
        <div className="d-flex flex-wrap justify-content-center gap-3">
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
          })}
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-3 vh-100">
          {resultSearch.map((item) => {
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
          })}
        </div>
      )}
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <DetailModal
        data={data}
        dataModal={dataModal}
        setDataModal={setDataModal}
        handleChange={handleChange}
      />
    </Container>
  )
}

export default Home
