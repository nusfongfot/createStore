import { useState, useEffect, useContext } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavUs from "./components/NavUs"
import Store from "./components/Store"
import ProductContext from "./Context/ProductContext"

function App() {
  const { productId, onProdChange, show, onShouldShow, price, onPriceChange } = useContext(ProductContext)
  const [data, setData] = useState([])
  const [url, setUrl] = useState("https://fakestoreapi.com/products")
  const [loading, setLoading] = useState(true)
  const [store, setStore] = useState(() => {
    const items = localStorage.getItem("stores")
    if (items) {
      return JSON.parse(items)
    } else {
      return []
    }
  })

  const fetchData = async () => {
    const res = await axios.get(url)
    setData(res.data)
    setLoading(false)
  }
  
  const handleChange = (item) => { 
    const isProductInCart = store.some((item) => {
      return item.id === productId
    })
    if (isProductInCart) {
      alert("Product already in store");
    } else {
      setStore([...store, item])  
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  useEffect(() => {
    localStorage.setItem("stores", JSON.stringify(store))
  }, [store])

  return (
    <HashRouter>
      <NavUs badge={store.length} />
      <Routes>
        <Route
          path="/"
          element={<Home data={data} loading={loading} handleChange={handleChange} />}
        />
        <Route path="store" element={<Store store={store} setStore={setStore} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
