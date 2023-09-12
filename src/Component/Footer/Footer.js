import React from 'react'

const Footer = () => {
  return (
    <footer>
       <div className="grid-layout">
         <p id="direitos-autorais">&copy; {new Date().getFullYear()} Copyright By Haseeb Ali </p>
       <div>
         <p>Powered by</p>
         <img src="assets/icons/iuricode-logo-footer.svg" alt="logo do iuricode" width="60px" height="60px" />
       </div>
     </div>
   </footer>
    )
}

export default Footer;