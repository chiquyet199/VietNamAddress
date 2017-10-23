import { combineReducers } from 'redux';
import AddressesReducer from './addresses.reducer';
import { reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  addresses: AddressesReducer,
  form: FormReducer
});

export default rootReducer;

