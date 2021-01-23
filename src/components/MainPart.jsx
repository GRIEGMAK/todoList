import React from 'react';
import Form from "./Form";
import store from './../store'
import {observer} from "mobx-react";

const MainPart = () => {
    const { addNewCard, getCard } = store
    return (
        <div>
            <Form addNewCard={addNewCard}/>
            {getCard()}
        </div>
    )
};

export default observer(MainPart);