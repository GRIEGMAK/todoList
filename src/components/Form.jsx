import React from "react";
import s from "../styles/Form.module.sass"

const Form = (props) => {
    let newElement=React.createRef()
    const { addNewCard } = props
    return (
            <div className={s.container}><input type="text" placeholder="Введите задачу..." ref={newElement} className={s.input}/>
                <button onClick={()=>addNewCard(newElement)}>Добавить
                </button>
            </div>
    )
}

export default Form;