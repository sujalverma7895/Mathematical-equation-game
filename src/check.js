import React from 'react'

const Checkbox=({heading,fn})=>{

    return(
        <div className={`chdiv ${heading==='Correct'?'green':'red'}`}>
            <p>{heading} Answer</p>
            <p>Multiplying both the side by 3</p>
            <p><span className='main-spain-ch'><span className='span1-ch'>1</span>
            <span className='span2-ch'>__</span><span className='span4-ch'>3</span>
            <span className='span3-ch'>X x 3=5x3=15 </span></span>
            </p>
            <p>so x = 15</p>
            <p><button onClick={fn}>NEXT</button></p>
        </div>
    )
}

export default Checkbox