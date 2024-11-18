import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Bs0Circle } from 'react-icons/bs'
import { FaFileWaveform } from 'react-icons/fa6'

const ProductForm = ({model, setModel}) => {
    
    return (
        <Dialog open={model} onClose={setModel} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform py-6 px-6 overflow-hidden rounded-lg bg-gradient-to-r from-[#000000] to-[#1a2b2e] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <h1 className=' text-white text-2xl mb-3'>Product Form</h1>
                        <form action="">
                        <input className=' w-full py-3 px-1 mb-4 rounded-md bg-transparent border border-[#1a2b2e] text-white outline-none' type="text" placeholder='Product name'/>
                        <input className=' w-full py-3 px-1 mb-4 rounded-md bg-transparent border border-[#1a2b2e] text-white outline-none' type="number" placeholder='Product Price' />
                        <input className=' w-full py-3 px-1 mb-4 rounded-md bg-transparent border border-[#1a2b2e] text-white outline-none' type="datetime-local" name="" id="" />
                        <button className=' w-full py-3 px-1 rounded-md text-white bg-[#ff3300]' type='submit'>Add Product</button>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ProductForm