import React, {useEffect} from "react";
import style from './user.module.scss';
import {useOutletContext, useParams} from "react-router-dom";
import {IUserInfo} from "../Users/Users";


export const User = () => {
    let {userId} = useParams();
    const usersInfo = useOutletContext<IUserInfo[]>();

    const job = userId && usersInfo && usersInfo.length && usersInfo[Number(userId)].job;

    return (
        <div>
            <p className={style.info}>
                {`User with id = ${userId}`}
            </p>
            {
                job &&
                <p className={style.info}>
                    {`User job - ${job}`}
                </p>
            }
        </div>

    )
};