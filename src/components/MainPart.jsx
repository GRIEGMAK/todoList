import React from 'react';
import Form from "./Form";
import store from './../store'
import {observer} from "mobx-react";
import Categories from "./Categories";
import Card from "./Card";

const MainPart = () => {
    const { addNewCard, card, removeCard, onClickCheck } = store
    let getCardArray = undefined
    if (card) {
        getCardArray = card.map((c, i) => <Card key={i} id={i + 1} {...c} removeCard={removeCard}
                                                     onClickCheck={onClickCheck}/>)
    }
    return (
        <div>
            <Form addNewCard={addNewCard}/>
            <Categories />
            {getCardArray}
        </div>
    )
};

export default observer(MainPart);
