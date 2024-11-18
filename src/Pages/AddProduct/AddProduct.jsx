import ProductForm from '@/ProductForm/ProductForm'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaFileWaveform } from 'react-icons/fa6'
import { MdDeleteSweep } from 'react-icons/md'

const AddProduct = () => {
  const [model, setModel] = useState(false);
  return (
    <>
      <div>
        <div className=' flex justify-between'>
          <div></div>
          <div>
            <button className=' bg-gradient-to-r from-[#1a2b2e] to-[#000000] py-2 px-4 flex gap-1 items-center rounded-md'
              onClick={() => setModel(true)}
            >
              <FaFileWaveform /> Add Product</button>
          </div>
        </div>
        <div className=' mt-4'>
          <table className=' w-full border-collapse'>
            <thead className=' bg-gradient-to-r from-[#1a2b2e] to-[#000000]'>
              <tr>
                <th className=' text-left border border-[#1a2b2e] p-2'>Sr.</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Product Name</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Product Price</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Date/Time</th>
                <th className=' text-center border border-[#1a2b2e] p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=' border border-[#1a2b2e] p-2'>1</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>iphone 14 Pro</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>250000</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>11/06/24-10:08 PM</td>
                <td className=' text-center border border-[#1a2b2e] p-2'>
                  <div className=' flex gap-2 justify-center'>
                    <CiEdit className=' bg-gradient-to-r from-[#0c1516] to-[#000000] p-1 rounded-md text-white' size={28} />
                    <MdDeleteSweep className=' bg-gradient-to-r from-[#0c1516] to-[#000000] p-1 rounded-md text-red-700' size={28} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ProductForm model={model} setModel={setModel} />
    </>
  )
}

export default AddProduct