import React from "react"
import store from './../store/index'

const Categories = () => {
    const {categories} = store
    let getCategories = undefined
    if(categories.length !== 0){
        categories.map(el => <button>{el}</button>)
    }
    return (
        <div>
            {getCategories}
        </div>
    )
}

export default Categories;
