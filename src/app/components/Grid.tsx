import React from 'react'

function Grid() {
  return (
<>

<div className='h-screen'>

<div className='text-center text-4xl my-4'>Grid</div>
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center">
        <div className="bg-orange-500 h-40 m-4 rounded-md"></div>
        <div className="bg-slate-600 h-40 m-4 rounded-md"></div>
        <div className="bg-red-600 h-40 m-4 rounded-md"></div>
        <div className="bg-yellow-500 h-40 m-4 rounded-md"></div>
        <div className="bg-lime-600 h-40 m-4 rounded-md"></div>
        <div className="bg-pink-700 h-40 m-4 rounded-md"></div>
        <div className="bg-teal-400 h-40 m-4 rounded-md"></div>
        <div className="bg-emerald-700 h-40 m-4 rounded-md"></div>
        <div className="bg-indigo-800 h-40 m-4 rounded-md"></div>
        <div className="bg-purple-700 h-40 m-4 rounded-md"></div>
        <div className="bg-rose-400 h-40 m-4 rounded-md"></div>
        <div className="bg-blue-400 h-40 m-4 rounded-md"></div>
      </div>
</div>
</>
)
}

export default Grid