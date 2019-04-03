import { userConstants } from '../constants/userConst';
  

export function registration(state = {}, action) {
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
          return { registering: true };
        case userConstants.REGISTER_SUCCESS:
          return state;
        case userConstants.REGISTER_FAILURE:
          return {
            error: action.error
          };
        default:
          return state;
    }
  }