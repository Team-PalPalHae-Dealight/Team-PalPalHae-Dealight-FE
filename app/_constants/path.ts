const pageRoute = {
  customer: {
    cart: (id: string) => `/customer/cart/${id}`,
    home: () => `/customer/home`,
    login: () => '/customer/login',
    myPage: (id: string) => `/customer/my-page/${id}`,
    orderDetail: (id: string) => `/customer/order-detail/${id}`,
    orderList: (id: string) => `/customer/order-list/${id}`,
    orderItem: (id: string) => `/customer/order-item/${id}`,
    orderResult: (id: string) => `/customer/ order-result/${id}`,
    review: (id: string) => `/customer/review/${id}`,
    reviewWrite: (id: string) => `/customer/review-write/${id}`,
    search: (id: string) => `/customer/search/${id}`,
    signup: () => '/customer/signup',
    storeDetail: (id: string) => `/customer/store-detail/${id}`,
    itemDetail: (id: string) => `/customer/item-detail/${id}`,
  },
  store: {
    itemEdit: (id: string) => `/store/item-edit/${id}`,
    home: () => `/store/home`,
    login: () => `/store/login`,
    myPage: (id: string) => `/store/my-page/${id}`,
    orderDetail: (id: string) => `/store/order-detail/${id}`,
    orderList: (id: string) => `/store/order-list/${id}`,
    itemDetail: (id: string) => `/store/item-detail/${id}`,
    itemRegister: () => '/store/item-register',
    signup: () => '/store/signup',
    storeManage: (id: string) => `/store/store-manage/${id}`,
    registerStoreNumber: (id: string) =>
      `/store/register-store/store-number/${id}`,
    registerStoreInfo: (id: string) => `/store/register-store/store-info/${id}`,
    registerStoreTime: (id: string) => `/store/register-store/store-time/${id}`,
    itemManage: (id: string) => `/store/item-manage/${id}`,
  },
};

export default pageRoute;
