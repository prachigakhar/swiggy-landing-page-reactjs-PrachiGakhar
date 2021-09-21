import React from 'react';
function ftr(props) {
    return (
        <>
            {
                props.footer_section.map((cur)=>{
                    return <div className="footer_1">
                            <h4><a className="hdng">{cur.heading}</a></h4><ul type="none">
                            {
                                cur.list.map((cur1)=>{
                                 return <li><a href="#">{cur1}</a></li>
                                })
                            }
                            </ul>
                    </div>
                   

                    
                })
            }
        </>
    )
}

export default ftr
