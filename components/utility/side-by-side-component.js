import React from 'react'

const SideBySideComponent = (props) => {
  return (
    <div className='w-full grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-6'>
      <article>{props.leftSide}</article>
      <aside>{props.rightSide}</aside>
    </div>
  )
}

export default SideBySideComponent