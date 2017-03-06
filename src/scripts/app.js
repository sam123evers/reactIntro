import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


const app = function() {
  document.querySelector('.container').innerHTML = `<h1>${'learn how to use React'}</h1>`
  document.querySelector('.container').innerHTML = `<h3> ${100*3} </h3>`
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..