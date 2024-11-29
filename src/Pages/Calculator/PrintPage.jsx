import useCalculators from '@/Hooks/useCalculator'
import React from 'react'

const PrintPage = () => {
    const { installments, product } = useCalculators();
    console.log('product', product)
    return (
        <>
            <div>
                <div>
                    <div className=''>
                        <hr />
                        <h1>NEW BROTHER INSTALLMENTS</h1>
                        <p>Hayattabad Peshawar KPK</p>
                        <p>0334-9847321</p>
                    </div>
                    <div className=''>
                        <p>Print Date:
                            <span id="c_date"></span>
                        </p>
                    </div>
                    <h3 className="Heading">CREDIT PLAN REPORT</h3>
                    <hr />
                    <div className="product_details">
                        <h3>PRODUCT DETAILS</h3>
                        <div className="flex_boxes">
                            <div className="box_1">
                                <p>Product Name:
                                    <span id="p_name"></span></p><br />
                                <p>Product Price:
                                    <span id="p_price"></span></p><br />
                                <p>Profit %:
                                    <span id="p_profit"></span></p><br />
                                <p>No. Months:
                                    <span id="p_month"></span></p><br />
                            </div>
                            <div className="box_2">
                                <p>Advance:
                                    <span id="p_advance"></span></p><br />
                                <p>Grand:
                                    <span id="p_grand"></span></p><br />
                                <p>Net Amt:
                                    <span id="p_Amt"></span></p><br />
                                <p>1st Installment:
                                    <span id="p_install"></span></p><br />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="product_table">
                        <h3>INSTALLMENT</h3>
                        <table className=' border-collapse border-black w-full'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Date</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Installment</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {installments?.map((item, index) => (
                                    <tr key={index}>
                                        <td className=' text-left border border-[#1a2b2e] p-2'>{index + 1}</td>
                                        <td className=' text-center border border-[#1a2b2e] p-2'>{item.date}</td>
                                        <td className=' text-center border border-[#1a2b2e] p-2'>{item.month}</td>
                                        <td className=' text-center border border-[#1a2b2e] p-2'>{item.year}</td>
                                        <td className=' text-center border border-[#1a2b2e] p-2'>{item.installments}</td>
                                        <td className=' text-center border border-[#1a2b2e] p-2'>{item.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PrintPage