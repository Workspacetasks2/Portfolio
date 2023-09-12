import React from 'react'

const About = () => {
    return (
        <section id="s-about">
            <div className="grid-layout">
                <div id='about'>
                    <div id="about-photo">
                        <img src="assets/image/iuricode.svg" width="400px" height="400px" alt="gene" className="delayMediumReveal" id="photo-iuricode" />
                        <div className="about-figure figure-one icon-one delayExtraBigReveal">
                            <img src="assets/image/Node_JS.png" width="45px" height="45px" alt="ícone html" />
                        </div>
                        <div className="about-figure figure-two icon-two delayExtraBigReveal">
                            <img src="assets/image/React_JS.png" width="45px" height="45px" alt="ícone css" />
                        </div>
                        <div className="about-figure figure-three icon-three delayExtraBigReveal">
                            <img src="assets/icons/js-cor.svg" width="45px" height="45px" alt="ícone javascript" />
                        </div>
                    </div>
                    <div id="about-text">
                        <h2 className="delaySmallReveal">Who am I <span>.</span></h2>
                        <p className="delayMediumReveal">
                            My name is Haseeb Ali. I'm a freelancer as a Mern-Stack Web Developer. I develop modern and high quality interfaces, focusing on performance, animations, responsiveness, SEO and SSR.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;