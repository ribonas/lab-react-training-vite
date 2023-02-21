import React from 'react'

function Greetings(props) {

    const { lang, children } = props

  return (
    <div className='card'>
        {lang === 'en'? <h1 className='card-text'>Hello {children}</h1> : 
         lang === 'es'? <h1 className='card-text'>Hola {children}</h1> :
         lang === 'fr'? <h1 className='card-text'>Bonjour {children}</h1> : <h1 className='card-text'>Hallo {children}</h1>}
    </div>
  )
}

export default Greetings