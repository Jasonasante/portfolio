import React from 'react'
import './biography.css'
import { FaHandshake } from 'react-icons/fa'
import { AiOutlineStock } from 'react-icons/ai'
import { TfiThought } from 'react-icons/tfi'

const DetailsABoutMe = () => {
    const para1 = `My passion for software engineering is deeply rooted in my background in Biomedical Science, 
    providing me with a unique and innovative perspective when approaching coding. Just like my experiences in
     the lab, I thoroughly enjoy dissecting and analysing complex code, which not only leads to effective understanding
      of intricate concepts but also drives meaningful results with a positive impact on the world.`

    const para2 = ` During the summer of my second year at university, I was exposed technology via UX/UI templates on
    my Instagram feed. Sparking interest, I immersed myself in online tutorials covering HTML, CSS, and JavaScript. Eager
     to explore more, I participated in SEO London's Step Into Technology Programme and Bright Network's Virtual Technology
      Internship. These experiences exposed me to the tech giants like Vodafone, Google, and EY, providing valuable insights
     into the potential of technology. During the internship, I was challenged to create a YouTube command application using any programming language.
     Despite my initial uncertainty, I embraced the opportunity to code with my own hands and took on the challenge. Although 
     unsuccessful in the completion of the task, which was to be expected, the process of finding a solution from scratch was both
      exciting and rewarding. Especially in the format of an application that is used in everyone’s daily life. It was a stark 
      difference from my time in Biomedical Science, where creativity was often constrained by a set of methods and limited access. 
      In software engineering, there's a beautiful balance of creation and deduction, allowing limitless possibilities for creativity
    and problem-solving.`

    const para3 = `As a result, I decided to join 01Founders as a member of the first cohort, which has cultivated my self-motivation and 
    tenacity for taking on new challenges with the continuous strive to learn and improve my skills as a software engineer in this dynamic
     field that impact people's lives positively.`

    return (
        <section className='know-me-better'>
            <h5>Get To Know</h5>
            <h2>me better</h2>
            <div className='container my-start-container'>
                <h3>How I Got My Start</h3>
                <p>{para1}</p>
                <br></br>
                <p>{para2}</p>
                <br></br>
                <p>{para3}</p>
            </div>
            <div className="my-values-container">
                <h3>My Values</h3>
                <div className='my-values'>
                    <article className='value'>
                        <FaHandshake className='about-icon' />
                        <h5>Collaboration</h5>
                        <small> Exploring Diverse Ideas And Perspectives</small>
                    </article>
                    <article className='value'>
                        <TfiThought className='about-icon' />
                        <h5>Curiousity</h5>
                        <small> Forever Learning</small>
                    </article>
                    <article className='value'>
                        <AiOutlineStock className='about-icon' />
                        <h5>Personal Investment</h5>
                        <small> To Make My Weakness my Strengths</small>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default DetailsABoutMe