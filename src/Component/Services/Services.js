import React from 'react'

const Services = () => {
  return (
    <section id="s-services">
    <div className="grid-layout">
      <h2 className="delaySmallReveal">Services <span>.</span></h2>
      <div id="services">
        <article className="intervalCardReveal">
          <div>
            <img src="assets/icons/icon-design.svg" width="100px" height="100px" alt="ícone layers" />
          </div>
          <h3>UI / UX</h3>
          <p>
            I develop the interface so that it is clear, objective and,
            above all,= intuitive for the user.
          </p>
        </article>
        <article className="intervalCardReveal">
          <div>
            <img src="assets/icons/icon-front.svg" width="100px" height="100px" alt="ícone código" />
          </div>
          <h3>Development</h3>
          <p>
            I develop professional websites, blogs, portfolios, landing
            pages and e-commerce.
          </p>
        </article>
        <article className="intervalCardReveal">
          <div>
            <img src="assets/icons/icon-app-design.svg" width="100px" height="100px" alt="ícone imagem" />
          </div>
          <h3>Motion</h3>
          <p>
            I create interactions that convey a sense of modernity, as well
            as attracting the user's attention.
          </p>
        </article>
      </div>
    </div>
  </section>
  )
}

export default Services