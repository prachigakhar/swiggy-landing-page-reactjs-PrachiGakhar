import React from 'react';
import './body.css'
function body(props) {
    return (
        <div className="body__container">
            {
                props.data.map((cur)=>{
                return(
                    <div className="data">
                            <img src={cur.image} alt="" />
                            <h3>{cur.heading}</h3>
                            <p>{cur.paragraph}</p>
                    </div>);
                
                })
            }
        </div>
    )
}

export default body
