import PaymentChart from '@/PaymentChart/PaymentChart'
import React from 'react'

const Payments = () => {
  return (
    <>
      <div>
        <h1 className=' text-slate-300 mb-3'>Monthly Record</h1>
        <div className='bg-white bg-opacity-5 mt-4 mb-4'>
          <PaymentChart/>
        </div>
        <div>
          <table className=' w-full border-collapse'>
            <thead className=' bg-gradient-to-r from-[#1a2b2e] to-[#000000]'>
              <tr>
                <th className=' text-left border border-[#1a2b2e] p-2'>Sr.</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Month</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>T items</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Actual Pay</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Total Amount</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>1</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>November</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>08</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>125000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>150000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'><span className=' text-green-600 text-lg'>+</span>25000</td>
              </tr>
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>2</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>December</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>05</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>80000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>100000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'><span className=' text-green-600 text-lg'>+</span>20000</td>
              </tr>
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>3</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>January</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>09</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>180000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>240000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'><span className=' text-green-600 text-lg'>+</span>60000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Payments