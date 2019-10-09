import React, { Component } from 'react'

import RecipeList from '../components/RecipeList/RecipeList'
import Search from '../components/Search/Search'
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this);

    }
    state = {
        recipes: recipeData,
        search: '',

        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url :`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query:'&q=',
        error:''
    }

    async getRecipes() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            if(jsonData.recipes.length === 0){
                this.setState({
                    error:"Soory Your Search Not found please Type Correctly"
                })
            } else{
                this.setState({
                    recipes:jsonData.recipes,
                    error:''
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getRecipes();
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {base_url, query, search} = this.state;
        this.setState({
            url:`${base_url}${query}${search}`,
            search:''
        }, ()=>this.getRecipes())
    }

    render() {
        return (
            <>
                <Search search={this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {
                    this.state.error ? (
                        <section>
                            <div className='row'>
                                <div className='col'>
                                    <h6 className='text-orange text-center text-uppercase mt-5'>
                                        {this.state.error}
                                    </h6>
                                </div>
                            </div>
                        </section>
                    )
                    : (
                        <RecipeList recipes={this.state.recipes} />
                    )
                }
               
            </>
        )
    }
}
