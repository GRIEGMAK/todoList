import React from 'react';
import s from "../styles/Card.module.sass"

const Card = (props) => {
    const {task, completed, id, removeCard, onClickCheck, category} = props
    return (
        <div className={s.container}>
            <div className={s.container_card}>
                <input type="checkbox" defaultChecked={completed} onChange={() => onClickCheck(id)}/>
                <div className={s.text_card}>{task}</div>
                <div className={s.text_card}>{category}</div>
                <button onClick={() => removeCard(id)}>Удалить</button>
            </div>
        </div>
    )
};

export default Card;
