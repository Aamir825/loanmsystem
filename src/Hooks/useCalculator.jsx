import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCalculators = () => {

  const navigate = useNavigate();

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
  const [installments, setInstallmants] = useState([]);
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

  // Data inserting into table on Monthwise
  const [pButton, setpButton] = useState(false);
  const TableData = () =>{
    const {prmonths, prdate, prnetamount} = product;
    if(prnetamount && prmonths){
      const installmentsAmount = prnetamount/prmonths;
      let balance = prnetamount;
      const installmentsArray = [];
      const startDate = new Date(prdate);
      for(let i = 0; i<prmonths; i++){
        let installmentDate = new Date(startDate);
        installmentDate.setMonth(startDate.getMonth()+ i);
        balance -= installmentsAmount;
        installmentsArray.push({
          date: installmentDate.toLocaleDateString(),
          month: installmentDate.toLocaleString("default",{month: "long"}),
          year: installmentDate.getFullYear(),
          installments: installmentsAmount.toFixed(),
          balance: balance
        })
      }
      setInstallmants(installmentsArray)
      setpButton(true);
    }
  }

  // Function for Form Submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product ", product)
    TableData();
    console.log("Installments ",installments)
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

  // Function for Print Installments
  const handlePrint = () =>{
    navigate("/print");
  }

  return {product , setProduct, handleChange, handleSubmit, installments, pButton, handlePrint}
}
export default useCalculators