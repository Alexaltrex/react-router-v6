import React, {FC} from "react";
import style from './navigateButtonLink.module.scss';
import {useNavigate} from "react-router-dom";
import clsx from "clsx";

interface INavigateButtonLink {
    text: string
    to: string
    className?: string
}

export const NavigateButtonLink: FC<INavigateButtonLink> = ({
                                                                text,
                                                                to,
                                                                className
                                                            }) => {
    let navigate = useNavigate();
    const onClickHandler = () => {
        navigate(to)
    };

    return (
        <button className={clsx(style.navigateButtonLink, className)}
                onClick={onClickHandler}

        >
            {text}
        </button>
    )
};