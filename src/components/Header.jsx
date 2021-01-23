import React from 'react';
import s from "../styles/Header.module.sass"

const Header = () => {
    return(<div>
        <div className={s.header}>
            <h1 className={s.header_text}>TODOLIST</h1>
        </div>
            <h3 className={s.header_text_two}>Список задач:</h3>
        </div>
    )
};

export default Header;
