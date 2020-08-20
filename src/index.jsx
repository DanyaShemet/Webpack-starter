import * as $ from 'jquery'
import Post from "@models/Post";
import json from './assets/json'
import csv from './assets/data.csv'
import starImg from './assets/img.jpg'
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/style.css'
import './styles/less.less'
import './styles/sass.sass'
import './styles/scss.scss'

const post = new Post('Wasasx', starImg)

// $('pre').addClass('code').html(post.toString())
console.log(post.toString())

const App = () => (
    <div className="container">
        <h1>Name</h1>
        <p>Lorem ipsum.</p>

        <hr/>

        <div className="logo"></div>
        <hr/>
            <pre />

            <div className="box">
                <h2>Less</h2>
            </div>

            <div className="card">
                <h2>sass</h2>
            </div>

            <div className="item">
                <h2>Scss</h2>
            </div>
    </div>
)

render(
<App/>
, document.getElementById('app'))
