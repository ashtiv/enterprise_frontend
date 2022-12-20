import React from 'react'
import video from './video.png'

function BodyC2() {
    return (
        <div className='Video container'>
            <div className='Video-title container'>
                <div className='Video-pic my-auto'>
                </div>
                <p className='Video-text my-auto'>
                    Video Title
                </p>
            </div>
            <div className='Video-heading container'>
                <p className='Video-heading-text'>
                    Inform users with video sections
                </p>
                <img className='Video-thumb' src={video} />
                <div className='Video-smallpic'></div>
            </div>
            <div className='Video-description container'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
            </div>
        </div>
    )
}

export default BodyC2