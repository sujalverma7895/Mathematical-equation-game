import React from 'react'

const Infomsg = (props) =>
{
    return(
        <div className='infocs'>
            <h1>Heading</h1>
            <p>This Is Para</p>
            <button onClick={props.fn}>X</button>
        </div>
    )
}

export default Infomsg;
