import React from 'react';
import ReactDom from 'react-dom/client'

const parent = React.createElement('h1',{id:'parent'},'welcome to react')

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(parent)