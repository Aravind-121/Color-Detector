export function modelReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_RESULT':
      return [action.payload];
    case 'DELETE_RESULT':
      return [];
    default:
      return state;       
  }
}