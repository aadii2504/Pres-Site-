import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
 
  return (
    <div id='right' className='h-full w-2/3  p-6 flex flex-nowrap gap-5 overflow-x-auto'>
      {props.brands.map((elem , idx) => {
        return  <RightCard key ={idx} img={elem.img} tag={elem.tag} order={idx}/> 
      })}
    </div>
  )
}

export default RightContent