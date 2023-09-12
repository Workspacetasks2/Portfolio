import React from 'react'

const Projects = () => {
  return (
    <section id="s-projects">
    <div className="grid-layout">
      <h2 className="delaySmallReveal">Projects <span>.</span></h2>
      <div id="projects">
        <article className="intervalCardReveal teslabank">
          <h3>Apes In Space</h3>
          <p>
            Crypto Marketplace Website, I have built this website using React.js, Material UI Components, and Connected with NFT Marketplace Platform and add a Road Maps etc..
          </p>
          <a href="https://apesinspace.io/" target="_blank" id="teslabank">view project
          </a>
        </article>
        <article className="intervalCardReveal naped">
          <h3>Xampra.com</h3>
          <p>
           One Stop IT Solution, <br/>xampra.com is Your gateway to a world of cutting-edge IT services. I have built this website using React.js and PHP.
          </p>
          <a href="https://xampra.com/" target="_blank" id="naped">view project
          </a>
        </article>
        <article className="intervalCardReveal">
          <h3>Coming soon</h3>
          <p>
            Now I'm Working on Big E-commerce website using React.js, Node.js,  Taiwand CSS, Redux Toolkit, with payment gateway using Stripe. Grab your coffee and wait a while, I'm developing the project.
          </p>
        </article>
      </div>
      <a href="https://github.com/Workspacetasks2" target="_blank" className="delayExtraBigReveal">Repositories on GitHub</a>
    </div>
  </section>
  )
}

export default Projects