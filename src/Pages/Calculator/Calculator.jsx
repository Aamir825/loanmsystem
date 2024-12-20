import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import useCalculators from '@/Hooks/useCalculator'
import PrintPage from './PrintPage'

const Calculator = () => {
  const { product, setProduct, handleSubmit, handleChange, installments, pButton, handlePrint, handleClear } = useCalculators();
  // Update the product state directly when the date is selected
  const handleDateSelect = (selectedDate) => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd"); // format the date to a suitable format
    setProduct((prev) => ({
      ...prev,
      prdate: formattedDate, // Add the date to the product state directly
    }));
  };
  return (
    <>
      <div>
        {/* Calculator Inputs */}
        <div>
          <h1 className=' mb-2 text-slate-300'>Credit Calculator</h1>
          <form action="" onSubmit={handleSubmit} className=''>
            <div className='flex gap-2 mb-2'>
              <Select onValueChange={(value) => setProduct((prev) => ({ ...prev, prname: value }))}>
                <SelectTrigger className="text-black w-full">
                  <SelectValue placeholder="Product Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iphone 14">iphone 14</SelectItem>
                  <SelectItem value="Samsung S24">Samsung S24</SelectItem>
                  <SelectItem value="Infinix Note 30">Infinix Note 30</SelectItem>
                </SelectContent>
              </Select>
              <input onChange={handleChange} value={product.prprice} name='prprice' className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Price' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input onChange={handleChange} value={product.pradvance} name='pradvance' className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Advance' />
              <input onChange={handleChange} value={product.prgrandtotal} name='prgrandtotal' disabled className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Grand Amount' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input onChange={handleChange} value={product.prprofit} name='prprofit' className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product Profit' />
              <input onChange={handleChange} value={product.prnetamount} name='prnetamount' disabled className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Net Amount' />
            </div>
            <div className='flex gap-2 mb-2'>
              <input onChange={handleChange} value={product.prmonths} name='prmonths' className=' w-1/2 py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Months' />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " w-[45%] justify-start text-left font-normal text-black",
                      !product.prdate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {product.prdate ? format(new Date(product.prdate), "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={product.prdate ? new Date(product.prdate) : null}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <button type='submit' className='w-full py-2 px-2 bg-[#ff3300] rounded-md flex justify-center items-center gap-1 hover:tracking-wider duration-150'>Calculate <MdKeyboardDoubleArrowRight size={20} /></button>
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
              {installments.map((item, index) => (
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
          <div className=' flex gap-2'>
            <button
              className={`w-[28%] py-2 px-2 bg-transparent border mt-2 border-[#1a2b2e] rounded-md
            ${pButton == true ? "flex" : "hidden"} 
            justify-center items-center gap-1 hover:tracking-wider duration-150`} onClick={() => handlePrint("print")}>
              Print Installment <MdKeyboardDoubleArrowRight size={20} />
            </button>
            <button
              className={`w-[28%] py-2 px-2 bg-transparent border mt-2 border-[#1a2b2e] rounded-md
            ${pButton == true ? "flex" : "hidden"} 
            justify-center items-center gap-1 hover:tracking-wider duration-150`} onClick={handleClear}>
              Clear Record <MdKeyboardDoubleArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <PrintPage installments={installments} product={product} className=" hidden" id="print" />
    </>
  )
}

export default Calculator