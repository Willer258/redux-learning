//ACTION

const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

//fonction pour appliquer le dispatch
function buyphone() {
  return {
    type: BUY_PHONE,
  };
}
function buytablet() {
  return {
    type: BUY_TABLET,
  };
}
function buytv() {
  return {
    type: BUY_TV,
  };
}

//Reducer
// (prevState, action)=> newState

//notre state initial
const initialStatePhone = {
  phones: 10,
  tablets: 20,
};

const initialStateTV = {
  tv: 5,
};

//le reducer pour le tel et la tab
const phonesReducer = (state = initialStatePhone, action) => {
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

//le reducer pour la tv
const tvReducer = (state = initialStateTV, action) => {
  // l'action s'effectue grace au switch si le cas est bon alors le retour correspondant sera celui demande
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1,
      };

    default:
      return state;
  }
};

//Combiner un reducer
const rootReducer = Redux.combineReducers({
  phone: phonesReducer,
  tv: tvReducer,
});

//Redux.createStore(element)
const store = Redux.createStore(rootReducer);

// Recuperation des datas dans le store
const phonedispo = document.getElementById("count");
const tabletdispo = document.getElementById("count-tablet");
const tvdispo = document.getElementById("count-tv");

//getState pour reruperer le state dans le reducer
phonedispo.innerHTML = store.getState().phone.phones;
tabletdispo.innerHTML = store.getState().phone.tablets;
tvdispo.innerHTML = store.getState().tv.tv;

//dispatch pour emmetre l'action
document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyphone());
});

document.getElementById("buy-tablet").addEventListener("click", () => {
  store.dispatch(buytablet());
});

document.getElementById("buy-tv").addEventListener("click", () => {
  store.dispatch(buytv());
});

//subscribe pour pouvoir recuprerer les etats du nouveau store
store.subscribe(() => {
  phonedispo.innerHTML = store.getState().phone.phones;
  tvdispo.innerHTML = store.getState().tv.tv;
  tabletdispo.innerHTML = store.getState().phone.tablets;
});

//Pour la tv
