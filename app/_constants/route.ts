const pageRoute = {
  customer: {
    cart: (id: string) => `costumer/cart/${id}`,
    home: () => `costumer/home`,
    login: () => 'costumer/login',
    myPage: (id: string) => `costumer/my-page/${id}`,
    orderDetail: (id: string) => `costumer/order-detail/${id}`,
    orderList: (id: string) => `costumer/order-list/${id}`,
    orderProduct: (id: string) => `costumer/order-product/${id}`,
    orderResult: (id: string) => `costumer/ order-result/${id}`,
    review: (id: string) => `costumer/review/${id}`,
    reviewWrite: (id: string) => `costumer/review-write/${id}`,
    search: (id: string) => `costumer/search/${id}`,
    signUp: () => 'costumer/sign-up',
    storeDetail: (id: string) => `costumer/store-detail/${id}`,
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
