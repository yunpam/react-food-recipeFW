import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header/Header'

export default class Home extends Component {
    render() {
        return (
           <Header title='Amazing Recipes'>
               <Link className='text-uppercasebtn btn-secondary btn-lg mt-3'  >
                    Search Recipes
               </Link>
           </Header>
        )
    }
}
