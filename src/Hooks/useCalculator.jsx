import React, { useEffect, useState } from 'react'

const useCalculators = () => {

  // state for product calculator
  const [product, setProduct] = useState({
    prname: "",
    prprice: "",
    pradvance: "",
    prgrandtotal: "",
    prprofit: "",
    prnetamount: "",
    prmonths: "",
    prdate: ""
  })

  // Function for values change in product inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  // Automatically calculate grand total
  useEffect(()=>{
    const {prprice, pradvance, prprofit} = product;
    let grandAmount = 0;
    let netAmount = 0;
    let finalAmount = 0;
    if(prprice && pradvance){
      grandAmount = parseFloat(prprice) - parseFloat(pradvance);
      setProduct((prev)=> ({...prev, prgrandtotal: grandAmount}))
    }
    if(prprofit){
      netAmount = parseFloat(prprofit) * grandAmount / 100;
      finalAmount = grandAmount + netAmount;
      setProduct((prev)=> ({...prev, prnetamount: finalAmount}))
    }
  },[product.prprice, product.pradvance, product.prprofit])
  // Function for Form Submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product ", product)
    setProduct({
      prname: "",
      prprice: "",
      pradvance: "",
      prgrandtotal: "",
      prprofit: "",
      prnetamount: "",
      prmonths: ""
    })
}
  return {product , setProduct, handleChange, handleSubmit}
}
export default useCalculators