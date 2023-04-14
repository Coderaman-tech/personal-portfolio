import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
// import Instagram from '../../img/instagram.png';

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Aman Kumar Shrivastava</span>
                    <span>Frontend and Machine Learning Developer with high level of
                        experience in web designing and development with machine learning
                        features and producting the Quality work
                    </span>
                </div>

                <button className="button i-button">
                    Hire me
                </button>

                <div className="i-icons">
                    <a href="https://github.com/Coderaman-tech" rel='noreferrer' target={'_blank'}>
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/coderaman-tech/" rel='noreferrer' target={'_blank'}>
                        <img src={Linkedin} alt="" />
                    </a>
                   
                </div>
            </div>
            <div className="i-right">
                I am right side
            </div>

        </div>
    )
}

export default Intro
