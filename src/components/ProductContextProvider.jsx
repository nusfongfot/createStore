import { useState } from "react"
import ProductContext from "../Context/ProductContext"

const ProductContextProvider = ({ children }) => {
  const [productId, setProductId] = useState(0)
  const [show, setShow] = useState(false)
  const [price, setPrice] = useState("")
  
  return (
    <ProductContext.Provider
      value={{
        productId,
        onProdChange: (id) => {
          setProductId(id)
        },
        show,
        onShouldShow: (value) => {
          setShow(value)
        },
        price,
        onPriceChange: (id) => {
          setPrice(id)
        }
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
