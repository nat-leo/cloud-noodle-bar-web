export const reducer = (state, action) => {
  switch(action.type) {
    case "add": return {
      ...state,
      cart: handleAppendItem(state.cart, action.payload),
      total: state.total+1
    }
    default: return state   
  }
}

export const initialState = {
  cart: [],
  total: 0
}

const handleAppendItem = (list, item) => {
  list.push(item);
  return list
}