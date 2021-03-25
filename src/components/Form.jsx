import React from "react";
import s from "../styles/Form.module.sass"

const Form = (props) => {
    let newElement=React.createRef()
    let newCategory=React.createRef()
    const { addNewCard } = props
    return (
            <div className={s.container}><input type="text" placeholder="Введите задачу..." ref={newElement} className={s.input}/>
                <input type="text" placeholder="Введите категорию..." ref={newCategory} className={s.inputCategory}/>
                <button onClick={()=>addNewCard(newElement, newCategory)}>Добавить
                </button>
            </div>
    )
}

export default Form;
