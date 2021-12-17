import style from './about.module.scss';
import React from "react";
import {NavigateButtonLink} from "../common/NavigateButtonLink/NavigateButtonLink";

export const About = () => {
    return (
        <section className={style.about}>
            <h2>About</h2>
            <NavigateButtonLink to='/'
                                text='Назад на домашнюю страницу'
                                className={style.back}
            />
        </section>
    );
};