export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProduct = id => ({
  type: FETCH_PRODUCT,
  payload: id,
});

export const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = error => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});
