import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'


const RecordForm = () => {
  return (
    <>
      <div>
        <form action="" className=''>
          <Accordion type='single' collapsible defaultValue="item-1" className='mb-2'>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className=''>Customer Details</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className='flex gap-2 mb-2'>
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Customer Name' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Father Name' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Contact Number' />
                  </div>
                  <div className='flex gap-2'>
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='CNIC No' />
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Address' />
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Products list' />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='mb-2'>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h1 className=''>Guarrantor Details</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='flex gap-2'>
                  <div className='border border-[#1a2b2e] rounded-md p-4'>
                    <h1 className=' mb-2 text-slate-300'>Guarrantor 1</h1>
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="file" />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md my-2' type="text" placeholder='Contact No' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Occupation' />
                  </div>
                  <div className='border border-[#1a2b2e] rounded-md p-4'>
                    <h1 className=' mb-2 text-slate-300'>Guarrantor 2</h1>
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="file" />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md my-2' type="text" placeholder='Contact No' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Occupation' />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='mb-2'>
            <AccordionItem value="item 3">
              <div>
                <AccordionTrigger>
                  <h1 className=''>Product Details</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex gap-2 mb-2'>
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="text" placeholder='Model No' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Product price' />
                    <input className='w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Advance pay' />
                  </div>
                  <div className='flex gap-2 mb-2'>
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Total Amount' />
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Net Amount' />
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Profit %' />
                  </div>
                  <div className='flex gap-2 mb-2'>
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Months' />
                    <input className=' w-full py-2 px-2 bg-transparent border border-[#1a2b2e] rounded-md' type="number" placeholder='Monthly Pay' />
                    <input className=' w-full py-2 px-2 bg-[#ff3300] rounded-md cursor-pointer' type="submit" />
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </form>
      </div>
    </>
  )
}

export default RecordForm