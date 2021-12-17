import React, {useEffect, useState} from "react";
import style from './users.module.scss';
import {Link, Outlet} from "react-router-dom";

export interface IUser {
    id: number
    name: string
}

export interface IUserInfo {
    job: string
    isActive: boolean
}

export const users: IUser[] = [
    {id: 0, name: 'User 0'},
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
];

export const mockUsersInfo = [
    { job: 'Worker', isActive: true },
    { job: 'Boss', isActive: true },
    { job: 'Super boss', isActive: true },
    { job: 'Sleeper', isActive: true },
];




export const Users = () => {
    const [usersInfo, setUsersInfo] = useState<IUserInfo[]>([]);

    useEffect(() => {
        const usersInfo = mockUsersInfo;
        setUsersInfo(usersInfo);
    }, []);

    return (
        <section className={style.users}>
            <h2>Users</h2>
            <div className={style.usersList}>
                {
                    users.map(({id, name}) => (
                        <Link to={String(id)}
                              className={style.link}
                              key={id}
                        >
                            {name}
                        </Link>
                    ))
                }
                <Link
                    to='create'
                    className={style.link}
                >
                    Create new user
                </Link>
            </div>
            <Outlet context={usersInfo}
            />
        </section>
    )
};