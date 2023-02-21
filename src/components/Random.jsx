import React from 'react'

function Random(props) {

    const { min, max } = props;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className='card'>
        <p className='card-text'>Random value between {min} and {max} ={'>'} {num}</p>
    </div>
  )
}

export default Random