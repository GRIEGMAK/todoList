import {makeAutoObservable} from "mobx";

class Store {
    card = [];
    index = 0;
    categories = []
    constructor() {
        makeAutoObservable(this)
    }
    addNewCard = (newElement, newCategory) => {
        let newTask = newElement.current.value
        let newCategories = newCategory.current.value
        if(newCategories === ''){
            newCategories = 'без категории'
        }
        let newCard = {
            id: this.index + 1,
            task: newTask,
            category: newCategories,
            completed: false,
        };
        if (newTask !== "") {
            this.card.push(newCard)
            this.index = this.index + 1
            this.categories.push(newCategories)
            newCategory.current.value = ''
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
