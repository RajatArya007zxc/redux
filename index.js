const redux =require('redux');
const reduxlogger=require('redux-logger')
const createStore=redux.createStore;
const combineReducer=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware

const logger=reduxlogger.createLogger()


const BUy_Cake="Buy a cake ";
const IceCream="ja re";

///an action and action producer 
function buyCake(){

    return{
        type:BUy_Cake,
        info:"this is the action which"
    }
}

const ice=()=>{
 return{
     type:IceCream,
     info:"bhg"
 }
}
/// now we are talking about the reducer


const intitalStateCake={
    numCake:12
}
const intitalStateCream={
    cream:21
}

// const reducer=(state=initialState,action)=>{

//     switch(action.type){
//         case BUy_Cake:return {
//             ...state, /// its means take the copy of state(using spread)
//             numCake:state.numCake -1
//         }
//         case IceCream:return{
//             ...state,
//             cream:state.cream -1
//         }

//         default:return state
//     }
// }
const cakeReducer=(state=intitalStateCake,action)=>{

    switch(action.type){
        case BUy_Cake:return {
            ...state, /// its means take the copy of state(using spread)
            numCake:state.numCake -1
        }
        
        default:return state
    }
}
const creamReducer=(state=intitalStateCream,action)=>{

    switch(action.type){
        case IceCream:return{
            ...state,
            cream:state.cream -1
        }

        default:return state
    }
}


const rootReducer=combineReducer({
    cakes:cakeReducer,
    creams:creamReducer
})

///// 
const store=redux.createStore(rootReducer,applyMiddleware(logger));  ///
console.log("initial state",store.getState()) /// get the initial state

//store.subscribe(()=>console.log('updated state',store.getState()))
const unsubscribe=store.subscribe(()=>{});
store.dispatch(buyCake()) //action creator
store.dispatch(buyCake()) //action creator
store.dispatch(buyCake()) //action creator
store.dispatch(ice())
store.dispatch(ice())
store.dispatch(buyCake()) //action creator

///unsubscribe


unsubscribe()

//the redux.creatStore only pass single reducer 
/// but when we have multiple reducer
//we use combineReducer () this method accept object

