let initialState = []

const searchHotelResultsReducer = (dataState = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.searchResults
    case 'CLEAR_SEARCH_RESULTS':
      return [];
    default:
      return dataState;
  }
}

export default searchHotelResultsReducer;