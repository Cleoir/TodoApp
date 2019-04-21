import 'module/bootstrap/dist/css/bootstrap.min.css'
import 'module/font-awesome/css/font-awesome.min.css'
import '../template/css/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)