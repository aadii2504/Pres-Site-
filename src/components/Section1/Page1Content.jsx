import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props.brands)
  return (
    <div className='pb-14 pt-2 flex gap-10 items-center px-16 h-[90vh] '>

      <LeftContent/>
      <RightContent brands={props.brands}/> 
    </div>
  )
}

export default Page1Content