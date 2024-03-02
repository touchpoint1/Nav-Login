import react from 'react'
import Nav from './component/nav';
const nav = () => {
  let links =[
    {name:"HOME",link:"/"}
  ]
  return (
    <div className='shadow-md w-full fixed top-o=0 left-0'>
      <div className= 'md:flex bg-white py-4 md:px-10 px-7'>
        <div>className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
          text-gray-800'
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          TOUCHPOINT
        </div>
      </div>
    </div>
  )
}