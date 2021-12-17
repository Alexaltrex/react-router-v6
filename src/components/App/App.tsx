import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout/Layout";
import {About} from "../About/About";
import {Users} from "../Users/Users";
import {User} from "../User/User";
import {CreateUser} from "../CreateUser/CreateUser";
import {NotFound} from "../NotFound/NotFound";
import {UsersIndex} from "../UsersIndex/UsersIndex";
import {Search} from "../Search/Search";

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<div><h2>Home</h2></div> }/>
                <Route path='about' element={<About/>}/>
                <Route path='users' element={<Users/>}>
                    <Route index element={<UsersIndex/>}/>
                    <Route path=':userId' element={<User/>}/>
                    <Route path='create' element={<CreateUser/>}/>
                </Route>
                <Route path='search' element={<Search/>}/>
                <Route path='*' element={<NotFound />}/>
            </Route>
        </Routes>
    );
};

