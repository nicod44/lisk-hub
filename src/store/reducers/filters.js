import actionTypes from '../../constants/actions';

const filters = (state = { transactions: 0 }, action) => {
  switch (action.type) {
    case actionTypes.addFilter:
      return {
        ...state,
        [action.filterName]: action.value,
      };
    default:
      return state;
  }
};

export default filters;
