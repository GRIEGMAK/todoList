import Card from "../components/Card";
import React from "react";
import {makeAutoObservable} from "mobx";

class Store {
    card = [];
    index = 0;
    constructor() {
        makeAutoObservable(this)
    }
    getCard = () => {
        let getCardArray = undefined
        if (this.card) {
            getCardArray = this.card.map((c, i) => <Card key={i} id={i + 1} {...c} removeCard={this.removeCard}
                                                         onClickCheck={this.onClickCheck}/>)
        }
        return getCardArray;
    }
    addNewCard = (newElement) => {
        let newTask = newElement.current.value
        let newCard = {
            id: this.index + 1,
            task: newTask,
            completed: false,
        };
        if (newTask !== "") {
            this.card.push(newCard)
            this.index = this.index + 1
        }
        newElement.current.value = ''
    }
    removeCard = (id) => {
        this.card = this.card.filter(el => el.id !== id)
    }
    onClickCheck = (id) => {
        this.card = this.card.map(el => el.id === id ? {...el, completed: !el.completed} : el)
    }
}

export default new Store();