const initialValue = {
    items: []
}

export const CoreReducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case 'CORE_ADD':
      return {
        ...state, items: action.items
      }
      default:
        return state;
  }
}