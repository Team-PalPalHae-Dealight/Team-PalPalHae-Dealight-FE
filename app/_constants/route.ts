const PAGE_ROUTE = {
  CUSTOMER: {
    HOME: {
      CART: (id: string) => `custumer/home/cart/${id}`,
      ORDER_RESULT: (id: string) => `custumer/home/order-result/${id}`,
      LOGIN: 'custumer/home/login',
      MY_PAGE: (id: string) => `custumer/home/my-page/${id}`,
      ORDER_DETAIL: (id: string) => `custumer/home/order-detail/${id}`,
      ORDER_LIST: (id: string) => `custumer/home/order-list/${id}`,
      PRODUCT_DETAIL: (id: string) => `custumer/home/product-detail/${id}`,
      REVIEW: (id: string) => `custumer/home/review/${id}`,
      SEARCH: (id: string) => `custumer/home/search/${id}`,
      SIGNUP: 'custumer/home/signup',
      STORE_DETAIL: (id: string) => `custumer/home/store-detail/${id}`,
    },
  },
  STORE: {
    HOME: {
      REGISTER_PRODUCT: 'store/home/register-product',
      EDIT_PRODUCT: (id: string) => `store/home/edit-product/${id}`,
      MY_PAGE: (id: string) => `store/home/my-page/${id}`,
      ORDER_DETAIL: (id: string) => `store/home/order-detail/${id}`,
      ORDER_LIST: (id: string) => `store/home/order-list/${id}`,
      PREVIEW: (id: string) => `store/home/preview/${id}`,
      PRODUCT_DETAIL: (id: string) => `store/home/product-detail/${id}`,
    },
    LOGIN: 'store/login',
    SIGNUP: 'store/signup',
  },
};

export default PAGE_ROUTE;
