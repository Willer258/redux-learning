//ACTION

const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET"

function buyphone() {
  return {
    type: BUY_PHONE 
  };
}
function buytablet(){
    return {
        type:BUY_TABLET
    }
}

//Reducer
// (prevState, action)=> newState

//notre state initial
const initialState = {
  phones: 10,
  tablets: 20
};
//le reducer
const reducer = (state = initialState, action) => {
  // l'action s'effectue grace au switch si le cas est bon alors le retour correspondant sera celui demande

  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
      break;
      case BUY_TABLET:
      return {
        ...state,
        tablets: state.tablets - 1,
      };

    default:
      return state;
  }
};

//Redux.createStore(element)
const store = Redux.createStore(reducer);

const phonedispo = document.getElementById("count");

//getState pour reruperer le state dans le reducer
phonedispo.innerHTML = store.getState().phones;
//dispatch pour emmetre l'action
document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyphone());
});

//subscribe pour pouvoir recuprerer les etats du nouveau store
store.subscribe(() => {
  phonedispo.innerHTML = store.getState().phones;
});


//Pour la tablette
const tabletdispo = document.getElementById('count-tablet')
tabletdispo.innerHTML = store.getState().tablets

document.getElementById('buy-tablet').addEventListener("click",()=>{
    store.dispatch(buytablet())
})

store.subscribe(()=>{
    
tabletdispo.innerHTML = store.getState().tablets

})