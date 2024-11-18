import React from 'react'
import { MdArrowRightAlt, MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Calculator = () => {
  return (
    <>
      <div>
        {/* Calculator Inputs */}
        <div>
          <h1 className=' mb-2 text-slate-300'>Credit Calculator</h1>
          <form action="" className=''>
            <div className='flex gap-2 mb-2'>
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Product Name' />
              <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Price' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Advance' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Grand Amount' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Profit' />
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Net Amount' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Months' />
              <button type='submit' className='w-full py-2 px-2 bg-[#ff3300] rounded-md flex justify-center items-center gap-1'>Calculate <MdKeyboardDoubleArrowRight size={20}/></button>
            </div>
          </form>
        </div>
        <div>
          {/* Calculator Months Table */}
          <table className=' w-full border-collapse'>
            <thead className=' bg-gradient-to-r from-[#1a2b2e] to-[#000000]'>
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
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>1</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>8/11/24</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>November</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>2024</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>25000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>125000</td>
              </tr>
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>2</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>8/12/24</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>December</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>2024</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>25000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>100000</td>
              </tr>
              <tr>
                <td className=' text-left border border-[#1a2b2e] p-2'>3</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>8/01/25</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>January</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>2025</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>25000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>75000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Calculator