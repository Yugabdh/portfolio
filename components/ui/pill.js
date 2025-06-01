import React from 'react'

const Pill = ({ text }) => {
    return (
        <div className='inline-block mr-1 my-1 py-1 px-2 rounded-3xl bg-heading-attention-0 text-bg-color-2 font-semibold'>{text}</div>
    )
}

export default Pill;