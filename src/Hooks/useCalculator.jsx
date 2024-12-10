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
  const [installments, setInstallmants] = useState([]);
  useEffect(() => {
    const { prprice, pradvance, prprofit } = product;
    let grandAmount = 0;
    let netAmount = 0;
    let finalAmount = 0;
    if (prprice && pradvance) {
      grandAmount = parseFloat(prprice) - parseFloat(pradvance);
      setProduct((prev) => ({ ...prev, prgrandtotal: grandAmount }))
    }
    if (prprofit) {
      netAmount = parseFloat(prprofit) * grandAmount / 100;
      finalAmount = grandAmount + netAmount;
      setProduct((prev) => ({ ...prev, prnetamount: finalAmount }))
    }

  }, [product.prprice, product.pradvance, product.prprofit])

  // Data inserting into table on Monthwise
  const [pButton, setpButton] = useState(false);
  const TableData = () => {
    const { prmonths, prdate, prnetamount } = product;
    if (prnetamount && prmonths) {
      const installmentsAmount = prnetamount / prmonths;
      let balance = prnetamount;
      const installmentsArray = [];
      const startDate = new Date(prdate);
      for (let i = 0; i < prmonths; i++) {
        let installmentDate = new Date(startDate);
        installmentDate.setMonth(startDate.getMonth() + i);
        balance -= installmentsAmount;
        installmentsArray.push({
          date: installmentDate.toLocaleDateString(),
          month: installmentDate.toLocaleString("default", { month: "long" }),
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
    console.log("Installments ", installments)
    // setProduct({
    //   prname: "",
    //   prprice: "",
    //   pradvance: "",
    //   prgrandtotal: "",
    //   prprofit: "",
    //   prnetamount: "",
    //   prmonths: ""
    // })
  }

  // Function for Print Installments
  const handlePrint = (id) => {
    // let content = document.getElementById(id).innerHTML;
    // document.body.innerHTML = content;
    // window.print();
    const printContent = document.getElementById(id);
    if (!printContent) return;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules).map(rule => rule.cssText).join('');
        } catch (e) {
          console.log('Access to stylesheet blocked by CORS policy');
          return '';
        }
      })
      .join('\n');

    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.write(`
      <html>
        <head>
          <style>${styles}</style>
          <style>
            @media print {
              @page { size: portrait; margin: 0; }
              body { -webkit-print-color-adjust: exact; }
              html, body { height: 100%; margin: 0 !important; padding: 12px !important; overflow: hidden; }
            }
          </style>
        </head>
        <body>${printContent.innerHTML}</body>
      </html>
    `);
    iframeDocument.close();

    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => document.body.removeChild(iframe), 100);
    };
  }

  const handleClear = () => {
    setProduct({
      prname: "",
      prprice: "",
      pradvance: "",
      prgrandtotal: "",
      prprofit: "",
      prnetamount: "",
      prmonths: "",
      prdate: ""
    });
    setInstallmants([]);
    setpButton(false);
  }

  return { product, setProduct, handleChange, handleSubmit, installments, pButton, handlePrint, handleClear }
}
export default useCalculators