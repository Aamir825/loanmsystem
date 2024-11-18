import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, CircleFadingPlus, PrinterIcon, FilePenLine } from 'lucide-react'
import React from 'react'

const Installments = () => {
  return (
    <>
      <div>
        <div className=' flex justify-between items-center pt-2 pb-3'>
          <div>
            <h1 className=' text-slate-300'>Installments Record</h1>
          </div>
          <div className=' flex gap-3'>
            <div className=' relative'>
              <Search className=' absolute top-3 right-2 text-[#696969]' size={16} />
              <input type="text" placeholder='Search id here' className=' bg-transparent border border-[#233c41] px-4 py-2 outline-none rounded-md' />
            </div>
            <Select>
              <SelectTrigger className="w-[180px] text-black">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Ascending</SelectItem>
                <SelectItem value="dark">Descending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=' grid grid-cols-2 gap-3'>
          <div>
            <Accordion type="single" collapsible className=' w-full'>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" relative border-none bg-white bg-opacity-5 flex-col-reverse items-start justify-start gap-3 rounded-xl" CustomIcon={CircleFadingPlus}>
                  <div className='w-full'>
                    <div className=' text-left'>
                      <h1 className=' text-3xl'>50,000</h1>
                      <p className='text-[11px] text-slate-600'>Loan Paid</p>
                    </div>
                    <div className='border-t border-slate-700 w-full mt-3 flex justify-between py-2'>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Consumer Name</h1>
                      <p className='text-[11px] text-slate-500'>Muhammad Aamir</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Father Name</h1>
                      <p className='text-[11px] text-slate-500'>Kaleem Ullah</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Remaining Loan</h1>
                      <p className='text-[11px] text-slate-500'>120000</p>
                    </div>
                    </div>
                  </div>
                  <div className=' flex gap-3'>
                    <h1 className=' text-white absolute top-1 left-8'>#09765421098</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                      <div>
                        <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                      </div>
                      <div className=' flex gap-3'>
                        <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                        <button className='bg-transparent border border-slate-500 py-2 px-8 flex items-center gap-2 rounded-tr-xl'><FilePenLine size={18} /> Update</button>
                      </div>
                    </div>
                    <div className=' flex flex-col'>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>January</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>February</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>March</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>April</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>May</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>June</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>July</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>August</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>September</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>October</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>November</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>December</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className=' w-full'>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" relative border-none bg-white bg-opacity-5 flex-col-reverse items-start justify-start gap-3 rounded-xl" CustomIcon={CircleFadingPlus}>
                  <div className='w-full'>
                    <div className=' text-left'>
                      <h1 className=' text-3xl'>50,000</h1>
                      <p className='text-[11px] text-slate-600'>Loan Paid</p>
                    </div>
                    <div className='border-t border-slate-700 w-full mt-3 flex justify-between py-2'>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Consumer Name</h1>
                      <p className='text-[11px] text-slate-500'>Muhammad Aamir</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Father Name</h1>
                      <p className='text-[11px] text-slate-500'>Kaleem Ullah</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Remaining Loan</h1>
                      <p className='text-[11px] text-slate-500'>120000</p>
                    </div>
                    </div>
                  </div>
                  <div className=' flex gap-3'>
                    <h1 className=' text-white absolute top-1 left-8'>#09765421098</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                      <div>
                        <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                      </div>
                      <div className=' flex gap-3'>
                        <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                        <button className='bg-transparent border border-slate-500 py-2 px-8 flex items-center gap-2 rounded-tr-xl'><FilePenLine size={18} /> Update</button>
                      </div>
                    </div>
                    <div className=' flex flex-col'>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>January</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>February</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>March</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>April</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>May</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>June</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>July</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>August</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>September</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>October</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>November</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>December</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className=' w-full'>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" relative border-none bg-white bg-opacity-5 flex-col-reverse items-start justify-start gap-3 rounded-xl" CustomIcon={CircleFadingPlus}>
                  <div className='w-full'>
                    <div className=' text-left'>
                      <h1 className=' text-3xl'>50,000</h1>
                      <p className='text-[11px] text-slate-600'>Loan Paid</p>
                    </div>
                    <div className='border-t border-slate-700 w-full mt-3 flex justify-between py-2'>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Consumer Name</h1>
                      <p className='text-[11px] text-slate-500'>Muhammad Aamir</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Father Name</h1>
                      <p className='text-[11px] text-slate-500'>Kaleem Ullah</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Remaining Loan</h1>
                      <p className='text-[11px] text-slate-500'>120000</p>
                    </div>
                    </div>
                  </div>
                  <div className=' flex gap-3'>
                    <h1 className=' text-white absolute top-1 left-8'>#09765421098</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                      <div>
                        <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                      </div>
                      <div className=' flex gap-3'>
                        <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                        <button className='bg-transparent border border-slate-500 py-2 px-8 flex items-center gap-2 rounded-tr-xl'><FilePenLine size={18} /> Update</button>
                      </div>
                    </div>
                    <div className=' flex flex-col'>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>January</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>February</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>March</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>April</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>May</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>June</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>July</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>August</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>September</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>October</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>November</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>December</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className=' w-full'>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" relative border-none bg-white bg-opacity-5 flex-col-reverse items-start justify-start gap-3 rounded-xl" CustomIcon={CircleFadingPlus}>
                  <div className='w-full'>
                    <div className=' text-left'>
                      <h1 className=' text-3xl'>50,000</h1>
                      <p className='text-[11px] text-slate-600'>Loan Paid</p>
                    </div>
                    <div className='border-t border-slate-700 w-full mt-3 flex justify-between py-2'>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Consumer Name</h1>
                      <p className='text-[11px] text-slate-500'>Muhammad Aamir</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Father Name</h1>
                      <p className='text-[11px] text-slate-500'>Kaleem Ullah</p>
                    </div>
                    <div className=' text-left'>
                      <h1 className=' text-slate-400 text-[14px]'>Remaining Loan</h1>
                      <p className='text-[11px] text-slate-500'>120000</p>
                    </div>
                    </div>
                  </div>
                  <div className=' flex gap-3'>
                    <h1 className=' text-white absolute top-1 left-8'>#09765421098</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                      <div>
                        <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                      </div>
                      <div className=' flex gap-3'>
                        <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                        <button className='bg-transparent border border-slate-500 py-2 px-8 flex items-center gap-2 rounded-tr-xl'><FilePenLine size={18} /> Update</button>
                      </div>
                    </div>
                    <div className=' flex flex-col'>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>January</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>February</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>March</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>April</p>
                          <h1 className=' text-slate-500'>15000</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>May</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>June</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>July</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>August</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>September</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                      <div className=' flex justify-between border-b border-[#1a2b2e]'>
                        <div className='w-full border-r border-[#1a2b2e] py-3'>
                          <p className=' text-[13px]'>October</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full border-r border-[#1a2b2e] p-3'>
                          <p className=' text-[13px]'>November</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                        <div className='w-full p-3'>
                          <p className=' text-[13px]'>December</p>
                          <h1 className=' text-slate-500'>0</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default Installments