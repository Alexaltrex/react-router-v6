import React from "react";
import {NavigateButtonLink} from "../common/NavigateButtonLink/NavigateButtonLink";

export const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>

            <NavigateButtonLink to='/'
                                text='Назад на домашнюю страницу'
            />
        </div>
    )
}