import React from 'react'

const Knowledge = () => {
  return (
    <section id="s-skills">
      <div className="grid-layout">
        <div id="skills">
          <article id="skills-text">
            <h2 className="delaySmallReveal">Knowledge <span>.</span></h2>
            <p className="delayMediumReveal changeDescription">
              {/* *mouse cursor over card to read* */}
            </p>
          </article>
          <div id="skills-cards">     
          <article className="sass intervalCardReveal">
              <span className="skills-cards-name-high">Sass</span>
              <img src="assets/icons/sass.svg" width="60px" height="60px" alt="ícone do sass" className="skills-icons" />
            </article>    
            <article className="react intervalCardReveal">
              <span className="skills-cards-name-high">React JS</span>
              <img src="assets/icons/react.svg" width="60px" height="60px" alt="ícone do react" className="skills-icons" />
            </article>   
            <article className="styled intervalCardReveal">
              <span className="skills-cards-name-low aumento-hover">Styled Components</span>
              <img src="assets/icons/styled.svg" width="60px" height="60px" alt="ícone do styled" className="skills-icons" />
            </article>
            <article className="js intervalCardReveal">
              <span className="skills-cards-name-high">JavaScript</span>
              <img src="assets/icons/js.svg" width="60px" height="60px" alt="ícone do javascript" className="skills-icons" />
            </article>          
            
            <article className="next intervalCardReveal">
              <span className="skills-cards-name-low">Node js</span>
              <img src="assets/image/Node_JS.png" width="60px" height="60px" alt="ícone do node" className="skills-icons" />
            </article>
           
            <article className="tailwind intervalCardReveal">
              <span className="skills-cards-name-low">Tailwind CSS</span>
              <img src="assets/icons/tailwind.svg" width="60px" height="60px" alt="ícone do tailwind" className="skills-icons" />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledge