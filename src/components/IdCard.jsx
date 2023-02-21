import React from 'react'

function IdCard(props) {
    
    const { lastName, firstName, gender, height, birth, picture } = props;
    console.log(birth.toLocaleDateString()); 

  return (
    <div className='card'>
        <div className='img-card'>
            <img src={picture} alt={firstName} />
        </div>
        <div className='card-text'>
            <p><span>First name: </span>{firstName}</p>
            <p><span>Last name: </span>{lastName}</p>
            <p><span>Gender: </span>{gender}</p>
            <p><span>Height: </span>{height}</p>
            <p><span>Birth: </span>{birth.toLocaleDateString()}</p>
        </div>
    </div>
  )
}

export default IdCard