// Store for column rendering functionality

import {createStore} from 'redux';
import reducer from './RenderReducer';

const store = createStore(reducer);

export default store;