import user_types from './user_types';

export const addMonthTime = payload => ({
  type: user_types.MONTH_TIME,
  payload,
});

export const addMonthDate = payload => ({
  type: user_types.MONTH_DATE,
  payload,
});

export const addFemaleSt = payload => ({
  type: user_types.FEMALE_ST,
  payload,
});

export const addLogin = payload => ({
  type: user_types.IS_LOGIN,
  payload,
});

export const addmalefemale = payload => ({
  type: user_types.IS_M_F,
  payload,
});

export const addLoginToken = payload => ({
  type: user_types.LOGIN_TOKEN,
  payload,
});

export const addUserId = payload => ({
  type: user_types.USER_ID,
  payload,
});

export const addUserName = payload => ({
  type: user_types.USER_NAME,
  payload,
});

export const addEmail = payload => ({
  type: user_types.EMAIL,
  payload,
});

export const addPhoneNumber = payload => ({
  type: user_types.MO_NUMBER,
  payload,
});

export const Logout = payload => ({
  type: user_types.LOGOUT,
  payload,
});
export const add_pushnotification_token = payload => ({
  type: user_types.PUSH_TOKEN,
  payload,
});
export const add_is_vip = payload => ({
  type: user_types.IS_VIP,
  payload,
});

export const add_cart_type = payload => ({
  type: user_types.CART_TYPE,
  payload,
});
