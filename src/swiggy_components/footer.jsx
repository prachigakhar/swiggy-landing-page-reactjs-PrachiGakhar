import React from 'react'
// import './footer.css'
import './ftr.css';
import {footer_section,midFooter} from '../All_Data/mydata';
import Ftr from './ftr';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function footer() {
    return (
        <div className="main_footer">
            
                <div className="top__footer">
                <Ftr footer_section={footer_section}></Ftr>
            <div className="footer_1">
                <img src="https://web.archive.org/web/20210903175340im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" />
                <img src="https://web.archive.org/web/20210903175341im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" />
            </div>
            </div>
            
<div className="mid__footer">
    <h4>WE DELIVER TO</h4>
    <div className="mid_footer_div">
   <Ftr footer_section={midFooter}/>
    </div>
</div>
<div className="last_footer">
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="" />
    <p>©️2021 Swiggy</p>
    <div>
   <a><FacebookIcon/></a> 
    <a><PinterestIcon/></a> 
    <a><InstagramIcon/></a> 
    <a><TwitterIcon/></a> 
    </div>
</div>

        </div>
    )
}

export default footer
