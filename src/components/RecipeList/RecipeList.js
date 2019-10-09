import React, { Component } from 'react'

import Recipe from '../Recipe/Recipe'


export default class RecipeList extends Component {
    render() {
        const { recipes } = this.props
        return (
            <>
                <div className='container py-5'>
                    {/* {title} */}
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-8 text-center text-uppercase'>
                            <h1 className='text-slanted'>Recipe List</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className='row'>
                        {
                            recipes.map(recipe=> {
                                return <Recipe key={recipe.recipe_id} recipe={recipe}/>
                            })
                        }
                    </div>
                    
                </div>

            </>
        )
    }
}
