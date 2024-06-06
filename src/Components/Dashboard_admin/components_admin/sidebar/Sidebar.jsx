import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import Logo from '../../components_admin/imgs/logo.png'

import { SidebarData } from '../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    

  return (
    <>
        <div className="Sidebar">
            <div className="logo">
                <img src={Logo} alt='' />
            </div>
            <div className="menu">
               {SidebarData.map((item, index)=>{
                return(
                <div className={selected===index?'menuItem active':'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                    <Link to={item.link}>
                        <item.icon/>
                    </Link>
                        <span>
                            {item.heading}
                        </span>
                    
                </div>
                )
               })}

               <div className="menuItem">
                    <UilSignOutAlt/>
               </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
