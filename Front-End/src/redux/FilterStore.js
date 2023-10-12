// Store for filter functionality

import {createStore} from 'redux';
import reducer from './FilterReducer';

const store = createStore(reducer);

export default store;