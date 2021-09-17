//ACTION

const BUY_PHONE = "BUY_PHONE";

function buyphone() {
  return {
    type: BUY_PHONE,
  };
}

//Reducer
// (prevState, action)=> newState

//notre state initial
const initialState = {
  phones: 10,
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

    default:
      return state;
  }
};

//Redux.createStore(element)
const store = Redux.createStore(reducer);

const objetdispo = document.getElementById("count");

//getState pour reruperer le state dans le reducer
objetdispo.innerHTML = store.getState().phones;
//dispatch pour emmetre l'action
document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyphone());
});

//subscribe pour pouvoir recuprerer les etats du nouveau store
store.subscribe(() => {
  objetdispo.innerHTML = store.getState().phones;
});
