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
    registerStoreNumber: () => '/store/register-store/store-number',
    registerStoreInfo: () => '/store/register-store/store-info',
    registerStoreTime: () => '/store/register-store/store-time',
  },
};

export default pageRoute;
