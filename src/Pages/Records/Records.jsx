import React from 'react'
import { BaggageClaim, BriefcaseBusiness, CalendarDays, CalendarFold, CalendarRange, CircleFadingPlus, Handshake, IdCard, Images, Layers, MapPinHouse, Phone, Plus, PrinterIcon, QrCode, Radar, Radical, Search, Smartphone, TrendingUp, UserRound, UsersRound } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Records = () => {
  return (
    <>
      <div>
        <div className=' flex justify-between items-center pt-2 pb-3'>
          <div>
            <h1 className=' text-slate-300'>Consumer Record</h1>
            </div>
          <div className=' flex gap-3'>
            <div className=' relative'>
            <Search className=' absolute top-3 right-2 text-[#696969]' size={16}/>
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
        <Accordion type="single" collapsible className=' mb-2'>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" border-none bg-gradient-to-r from-[#ffff] to-[#04363e] flex-row-reverse justify-end gap-3" CustomIcon={CircleFadingPlus}>
              <p className=' text-black'>Muhammad Aamir</p>
              <h1 className=' text-black'>#09765421098</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                  <div>
                    <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                  </div>
                  <div className=' flex gap-3'>
                    <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                    <button className='bg-white py-2 px-8 flex items-center gap-2 text-black'><CalendarFold size={18} /> Add Installment</button>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><UserRound className=' text-[#616161]' size={18} /> Customer Name</p>
                      <h1 className=' text-slate-500'>Kaleem Ullah</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><UsersRound className=' text-[#616161]' size={18} /> Father Name</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Smartphone className=' text-[#616161]' size={18} /> Phone</p>
                      <h1 className=' text-slate-500'>03325467893</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><IdCard className=' text-[#616161]' size={18} /> CNIC</p>
                      <h1 className=' text-slate-500'>14301-5675789-4</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><MapPinHouse className=' text-[#616161]' size={18} /> Address</p>
                      <h1 className=' text-slate-500'>Phase 04 Sector N1 Street 02 House 88 Hayattabad Peshawar</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BaggageClaim className=' text-[#616161]' size={18} /> Item name</p>
                      <h1 className=' text-slate-500'>iphone 14 Pro Max</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Images className=' text-[#616161]' size={18} /> Guarrantor One</p>
                      <div className=' flex gap-2'>
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                      </div>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Phone className=' text-[#616161]' size={18} /> Contact No</p>
                      <h1 className=' text-slate-500'>09278653421</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BriefcaseBusiness className=' text-[#616161]' size={18} /> Accupation</p>
                      <h1 className=' text-slate-500'>Bank Manager</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Images className=' text-[#616161]' size={18} /> Guarrantor Two</p>
                      <div className=' flex gap-2'>
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                      </div>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Phone className=' text-[#616161]' size={18} /> Contact No</p>
                      <h1 className=' text-slate-500'>09278655901</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BriefcaseBusiness className=' text-[#616161]' size={18} /> Accupation</p>
                      <h1 className=' text-slate-500'>Accountant</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><QrCode className=' text-[#616161]' size={18} /> Model No</p>
                      <h1 className=' text-slate-500'>KL0923RTH</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><TrendingUp className=' text-[#616161]' size={18} /> Product Price</p>
                      <h1 className=' text-slate-500'>150000</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Handshake className=' text-[#616161]' size={18} /> Advance Pay</p>
                      <h1 className=' text-slate-500'>25000</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Radar className=' text-[#616161]' size={18} /> Total Amount</p>
                      <h1 className=' text-slate-500'>160000</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Layers className=' text-[#616161]' size={18} /> Net Amount</p>
                      <h1 className=' text-slate-500'>125000</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Radical className=' text-[#616161]' size={18} /> Profit %</p>
                      <h1 className=' text-slate-500'>18000</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><CalendarDays className=' text-[#616161]' size={18} /> Total Months</p>
                      <h1 className=' text-slate-500'>08</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><CalendarRange className=' text-[#616161]' size={18} /> Monthly Pay</p>
                      <h1 className=' text-slate-500'>25000</h1>
                    </div>
                    <div className='w-full p-3'></div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className=' mb-2'>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" border-none bg-gradient-to-r from-[#ffff] to-[#04363e] flex-row-reverse justify-end gap-3" CustomIcon={CircleFadingPlus}>
              <p className=' text-black'>Muzamil Shah</p>
              <h1 className=' text-black'>#06265494532</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div className=' flex justify-between items-center py-2 border-b border-[#1a2b2e]'>
                  <div>
                    <h1>Id No: <span className=' text-slate-500'>#09765421098</span></h1>
                  </div>
                  <div>
                    <button className='bg-[#ff3300] py-2 px-8 flex items-center gap-2'><PrinterIcon size={18} /> Print</button>
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><UserRound className=' text-[#ff3300]' size={18} /> Customer Name</p>
                      <h1 className=' text-slate-500'>Kaleem Ullah</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><UsersRound className=' text-[#ff3300]' size={18} /> Father Name</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Smartphone className=' text-[#ff3300]' size={18} /> Phone</p>
                      <h1 className=' text-slate-500'>03325467893</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><IdCard className=' text-[#ff3300]' size={18} /> CNIC</p>
                      <h1 className=' text-slate-500'>14301-5675789-4</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><MapPinHouse className=' text-[#ff3300]' size={18} /> Address</p>
                      <h1 className=' text-slate-500'>Phase 04 Sector N1 Street 02 House 88 Hayattabad Peshawar</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BaggageClaim className=' text-[#ff3300]' size={18} /> Item name</p>
                      <h1 className=' text-slate-500'>iphone 14 Pro Max</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Images className=' text-[#ff3300]' size={18} /> Guarrantor One</p>
                      <div className=' flex gap-2'>
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                      </div>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Phone className=' text-[#ff3300]' size={18} /> Contact No</p>
                      <h1 className=' text-slate-500'>09278653421</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BriefcaseBusiness className=' text-[#ff3300]' size={18} /> Accupation</p>
                      <h1 className=' text-slate-500'>Bank Manager</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Images className=' text-[#ff3300]' size={18} /> Guarrantor Two</p>
                      <div className=' flex gap-2'>
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                        <img src="/images/creditcard.png" className=' w-14 object-cover' alt="" />
                      </div>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Phone className=' text-[#ff3300]' size={18} /> Contact No</p>
                      <h1 className=' text-slate-500'>09278655901</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><BriefcaseBusiness className=' text-[#ff3300]' size={18} /> Accupation</p>
                      <h1 className=' text-slate-500'>Accountant</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><QrCode className=' text-[#ff3300]' size={18} /> Model No</p>
                      <h1 className=' text-slate-500'>KL0923RTH</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><TrendingUp className=' text-[#ff3300]' size={18} /> Product Price</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Handshake className=' text-[#ff3300]' size={18} /> Advance Pay</p>
                      <h1 className=' text-slate-500'>03325467893</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><Radar className=' text-[#ff3300]' size={18} /> Total Amount</p>
                      <h1 className=' text-slate-500'>Kaleem Ullah</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><Layers className=' text-[#ff3300]' size={18} /> Net Amount</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'>
                      <p className=' text-[13px]'><Radical className=' text-[#ff3300]' size={18} /> Profit %</p>
                      <h1 className=' text-slate-500'>03325467893</h1>
                    </div>
                  </div>
                  <div className=' flex justify-between border-b border-[#1a2b2e]'>
                    <div className='w-full border-r border-[#1a2b2e] py-3'>
                      <p className=' text-[13px]'><CalendarDays className=' text-[#ff3300]' size={18} /> Total Months</p>
                      <h1 className=' text-slate-500'>Kaleem Ullah</h1>
                    </div>
                    <div className='w-full border-r border-[#1a2b2e] p-3'>
                      <p className=' text-[13px]'><CalendarRange className=' text-[#ff3300]' size={18} /> Monthly Pay</p>
                      <h1 className=' text-slate-500'>Jibran Khan</h1>
                    </div>
                    <div className='w-full p-3'></div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default Records