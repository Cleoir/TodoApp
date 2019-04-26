import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: () => ({
        description: 'Ler livros',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{
            _id: 2,
            description: 'Pagar ipva',
            done: false
        },{
            _id: 3,
            description: 'Pagar geladeira',
            done: false
        }]
    })
})

export default rootReducers