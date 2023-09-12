import React, { useState } from 'react'
import  ExperienceData  from "./ExperienceData"
import Experience from "./Experience"

const MyExp = () => {
  const [Data, setData] = useState(ExperienceData)
  return (
    <>
    <section id="s-experience">
      <div className="container">
      <h2 className="ExpHeading">Experience <span>.</span>
      </h2>
      </div>
      {
        Data.map((currElem) => {
          const {id}=currElem;
          return <Experience   key={id} {...currElem} />
        }) 
}
</section>
    </>
  )
}

export default MyExp; 