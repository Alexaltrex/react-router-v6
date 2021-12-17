import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import style from './layout.module.scss';
import clsx from "clsx";

export interface ILink {
    text: string
    to: string
}

export const links: ILink[] = [
    {text: 'About', to: 'about'},
    {text: 'Users', to: 'users'},
    {text: 'Search', to: 'search'},
    // {text: '', to: ''},
];


export const Layout = () => {
    return (
       <div className={style.layout}>
           <header>
               <p className={style.logo}>React-router v6</p>
               <nav>
                   {
                       links.map(({text, to}, i) => (
                           <NavLink key={i}
                                    to={to}
                                    className={
                                        ({isActive}) => clsx({
                                            [style.link]: true,
                                            [style.link_active]: isActive,
                                        })
                                    }
                                    // style={({isActive}) => ({
                                    //     color: isActive ? 'red' : ''
                                    // })}
                           >
                               {text}
                           </NavLink>
                       ))
                   }
               </nav>
           </header>

           <main>
               <Outlet/>
           </main>
       </div>
    )
};