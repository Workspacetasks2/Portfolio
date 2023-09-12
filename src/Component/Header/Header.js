import React from 'react'
const Header = () => {
  return (
    <header>
      <div className="grid-layout d-flex">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#s-about">Who am I</a>
            </li>
            <li>
              <a href="#s-projects">Projects</a>
            </li>
            <li>
              <a href="#s-services">Services</a>
            </li>
            <li>
              <a href="#s-skills">Knowleadge</a>
            </li>
          </ul>
        </nav>
        {/* <Link className='youtubeBTN' target="_blank" to="https://www.youtube.com/channel/UCMYPUSzVJECA_wcddUHI4YA">YOUTUBE</Link> */}

      </div>
    </header>
  )
}

export default Header;