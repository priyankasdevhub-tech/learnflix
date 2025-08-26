    // import React from 'react'
    
    // const Header = () => {
    //   return (
    //     <div className='absolute mx-40 py-2 bg-gradient-to-b from-black z-10  '>
    //         <img className="w-48" src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'>
    //         </img>
      
    //     </div>
    //   )
    // }
    
    // export default Header
    import React from 'react'

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/70 to-transparent">
      <div className="px-8 sm:px-12 py-4">
        <img
          className="w-32 sm:w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
      </div>
    </header>
  )
}

export default Header
