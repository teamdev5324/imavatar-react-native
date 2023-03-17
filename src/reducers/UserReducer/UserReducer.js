import {template} from '@babel/core';
import user_types from './user_types';
const initialState = {
  login_token: '',
  user_id: '',
  mo_number: '',
  user_name: '',
  email: '',
  add_pushnotification_token: '',
  address: [],
  is_vip: '',
  cart_t: '',
  is_login: '',
  is_m_f: '',
  month_time: '',
  month_date: '',
  female_st: '',
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user_types.LOGIN_TOKEN:
      return {
        ...state,
        login_token: action.payload,
      };

    case user_types.MONTH_TIME:
      return {
        ...state,
        month_time: action.payload,
      };

    case user_types.FEMALE_ST:
      return {
        ...state,
        female_st: action.payload,
      };

    case user_types.MONTH_DATE:
      return {
        ...state,
        month_date: action.payload,
      };

    case user_types.IS_LOGIN:
      return {
        ...state,
        is_login: action.payload,
      };

    case user_types.IS_M_F:
      return {
        ...state,
        is_m_f: action.payload,
      };
    case user_types.USER_NAME:
      return {
        ...state,
        user_name: action.payload,
      };

    case user_types.PUSH_TOKEN:
      return {
        ...state,
        add_pushnotification_token: action.payload,
      };

    case user_types.USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };

    case user_types.EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case user_types.MO_NUMBER:
      return {
        ...state,
        mo_number: action.payload,
      };
    case user_types.IS_VIP:
      return {
        ...state,
        is_vip: action.payload,
      };
    case user_types.CART_TYPE:
      return {
        ...state,
        cart_t: action.payload,
      };

    case user_types.LOGOUT:
      return {
        ...state,
        login_token: '',
        user_id: '',
        mo_number: '',
        user_name: '',
        email: '',
        // add_pushnotification_token: '',
      };

    default:
      return state;
  }
};

export default UserReducer;
