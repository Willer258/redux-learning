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
    phones = 5
}

//le reducer
const reducer = (state = initialState ,action)=>{
// l'action s'effectue grace au switch si le cas est bon alors le retour correspondant sera celui demande
   
    switch (action.type) {
        case BUY_PHONE:
        return{
            ...state,
            phones:state.phones - 1
        }
        
        default: return state
    }
}