import React, { useState } from 'react'
const Experience = ({ Name, Head, Date, Com, Des }) => {

    const [show, setShow] = useState(false)
    return (
        <section id="s-experience">
            <div className="grid-layout">
                <div id="experience">
                    <div onClick={() => setShow(!show)} className="option-experience intervalCardReveal">
                        <div className="d-flex">
                            {/* <h1>{show ? "-" : "+"}</h1> */}
                            <h3>{Name}</h3>
                        </div>
                    </div>
                    {
                        show &&
                        <div className="text-experience  intervalCardReveal">
                            <div>
                                <h4 className="titleExperience">{Head}</h4>
                                <p className="dateExperience">{Date}</p>
                            </div>
                            <h5 className="companyExperience">{Com}</h5>
                            <p className="changeExperience"> {Des}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience;

