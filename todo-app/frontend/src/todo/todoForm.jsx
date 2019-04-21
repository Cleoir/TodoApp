import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props =>{
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Alt') {
            props.handleClear()
        }
    }
    
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>  
                <input id='description' className='form-control' 
                placeholder='Adicione uma tarefa' onKeyUp={keyHandler}
                value={props.description} onChange={props.handleChange}/>
            </Grid>
    
            <Grid cols='12 3 2'> 
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='warning' icon='eraser' onClick={props.handleClear}></IconButton>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>      
        </div>
    )
}
