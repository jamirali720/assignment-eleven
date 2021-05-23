import React from 'react';
import {Link} from 'react-router-dom'

const FooterCol = (props) => {   
    const {menuItems, menuTitle} = props;
   

    return (        
            <div className="col-md-3">
            <h1 className="text-primary py-5">{menuTitle}</h1>
                <ul className="list-inline">
                    {
                        menuItems.map((item, index)=> <li className="m-2" index={index}> <Link to={item.link} > {item.name}</Link></li>)
                    }
                </ul>
                {props.children && props.children}
            </div>
         
       
    );
};

export default FooterCol;