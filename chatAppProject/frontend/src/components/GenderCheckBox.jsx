import React from 'react'

function GenderCheckBox() {
  return (
    <div className='flex'>
        <div className='form-control mt-5'>
         <label className='label gap-2 cursor-pointer'>
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checlbox border-slate-900' />
         </label>
        </div>
        
        <div className='form-control m-5 mb- -mb-2'>
         <label className='label gap-2 cursor-pointer'>
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checlbox border-slate-900' />
         </label>
        </div>
    </div>
  )
}

export default GenderCheckBox
