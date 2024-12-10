import useCalculators from '@/Hooks/useCalculator'
import React from 'react'
import { IoLogoSass } from 'react-icons/io5'

const PrintPage = ({ installments, product, className, id }) => {
    return (
        <>
            <div className={`${className}`} id={id}>
                <div>
                    <div className=''>
                        <hr />
                        <h1 className=' text-4xl text-center font-semibold pt-2'><IoLogoSass /> SASS INSTALLMENTS SYSTEM</h1>
                        <p className=' text-center text-lg tracking-wider'>Hayattabad Peshawar KPK</p>
                        <p className=' text-center -mt-1'>0334-9847321</p>
                    </div>
                    <div className=''>
                        <p>Print Date: {product.prdate}</p>
                    </div>
                    <h3 className=" text-center text-2xl pb-2 font-semibold">CREDIT PLAN REPORT</h3>
                    <hr />
                    <div className="product_details py-2">
                        <h3 className=' text-2xl pb-2 underline font-semibold'>PRODUCT DETAILS</h3>
                        <div className="flex justify-between">
                            <div className="box_1">
                                <p className=' font-semibold'>Product Name:</p>
                                <p>{product.prname}</p><br />
                                <p className=' font-semibold'>Product Price:</p>
                                <p>{product.prprice}</p><br />
                                <p className=' font-semibold'>Profit %:</p>
                                <p>{product.prprofit}%</p><br />
                                <p className=' font-semibold'>No. Months:</p>
                                <p>{product.prmonths}</p><br />
                            </div>
                            <div className="box_2">
                                <p className=' font-semibold'>Advance:</p>
                                <p>{product.pradvance}</p><br />
                                <p className=' font-semibold'>Grand:</p>
                                <p>{product.prgrandtotal}</p><br />
                                <p className=' font-semibold'>Net Amt:</p>
                                <p>{product.prnetamount}</p><br />
                                <p className=' font-semibold'>1st Installment:</p>
                                <p>{product.prdate}</p><br />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="product_table">
                        <h3 className=' pb-2 text-2xl underline font-semibold'>INSTALLMENTS</h3>
                        <table className=' border-collapse border-black w-full'>
                            <thead>
                                <tr>
                                    <th className=' text-left border border-[#1a2b2e] p-2'>Sr.</th>
                                    <th className=' text-center border border-[#1a2b2e] p-2'>Date</th>
                                    <th className=' text-center border border-[#1a2b2e] p-2'>Month</th>
                                    <th className=' text-center border border-[#1a2b2e] p-2'>Year</th>
                                    <th className=' text-center border border-[#1a2b2e] p-2'>Installment</th>
                                    <th className=' text-center border border-[#1a2b2e] p-2'>Balance</th>
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