import { useState } from 'react'

function App() {
  const [color, setColor] = useState('green')

  // function changeColor (color){
  //   setColor(color)
  // }

  return (
 
  <div className=' w-full h-screen duration-200  absolute left-0 top-0 text-white' style={{backgroundColor :color}}> 
   
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-black'> 
      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' onClick={() => setColor('yellow')}> yellow </button>
      <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' onClick={() => setColor('red')}> red </button>
      
      </div>
    </div>
  </div>
  )
}

export default App
