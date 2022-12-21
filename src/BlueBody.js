import React from 'react'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'

function BlueBody() {
    return (
        <div className='Blue-main mt-5'>
            <div className='Blue-internal container'>
                <div className='Blue-title container'>
                    <div className='Blue-title-text container'>Ways to work with us</div>
                    <div className='Blue-title-a hover-point container'><text className='Blue-title-a-text'>Get Started</text></div>
                </div>
                <div className='Blue-content container'>
                    <div className='Blue-content-p1 container'>
                        <div className='Blue-design1'></div>
                        <div className='Blue-design2'></div>
                        <img className='Blue-content-p1-img' src={b1} />
                        <div className='Blue-content-p1-title'>Project Management</div>
                        <div className='Blue-content-p1-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>

                    </div>
                    <div className='Blue-content-p1 container'>
                        <img className='Blue-content-p1-img' src={b2} />
                        <div className='Blue-content-p1-title'>Advanced Analytics</div>
                        <div className='Blue-content-p1-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>

                    </div>
                    <div className='Blue-content-p1 container'>
                        <img className='Blue-content-p1-img' src={b3} />
                        <div className='Blue-content-p1-title'>Project Management</div>
                        <div className='Blue-content-p1-des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlueBody