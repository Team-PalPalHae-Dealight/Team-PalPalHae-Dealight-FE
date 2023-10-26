const pageRoute = {
  custumer: {
    cart: (id: string) => `custumer/cart/${id}`,
    home: () => `custumer/home`,
    login: () => 'custumer/login',
    mypage: (id: string) => `custumer/my-page/${id}`,
    orderDetail: (id: string) => `custumer/order-detail/${id}`,
    orderList: (id: string) => `custumer/order-list/${id}`,
    orderProduct: (id: string) => `custumer/order-product/${id}`,
    orderResult: (id: string) => `custumer/ order-result/${id}`,
    review: (id: string) => `custumer/review/${id}`,
    reviewWrite: (id: string) => `custumer/review-write/${id}`,
    search: (id: string) => `custumer/search/${id}`,
    signUp: () => 'custumer/sign-up',
    storeDetail: (id: string) => `custumer/store-detail/${id}`,
  },
  store: {
    editProduct: (id: string) => `store/edit-product/${id}`,
    home: () => `store/home`,
    login: () => `store/login`,
    myPage: (id: string) => `store/my-page/${id}`,
    orderDetail: (id: string) => `store/order-detail/${id}`,
    orderList: (id: string) => `store/order-list/${id}`,
    productDetail: (id: string) => `store/product-detail/${id}`,
    registerProduct: () => 'store/register-product',
    signUp: () => 'store/sign-up',
    storeManage: (id: string) => `store/store-manage/${id}`,
  },
};

export default pageRoute;
