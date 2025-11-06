import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.img)
  return (
   <div className='h-full w-70 bg-red-200 rounded-4xl overflow-hidden relative shrink-0'>
           <img className='h-full w-full  object-cover' src={props.img} alt="" />
           <RightCardContent tag ={props.tag} order={props.order}/>
   </div>
  )
}

export default RightCard