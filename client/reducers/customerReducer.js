import * as types from '../constants/actionTypes';

const initialState = {
  vendorList: ['Hilton Honey', 'Dirty Danzing', 'SarahSalads', 'LukesLavendarLillys'],
  marketDisplayTog: false,
}

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MARKET_DISPLAY_TOGGLE: {
      let {marketDisplayTog} = state;
      marketDisplayTog = !marketDisplayTog;
      return {
      ...state,
      marketDisplayTog
    }
    }
    default:
      return state;
  }

  
}

export default customerReducer;