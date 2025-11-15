const urls = {
  auth: { login: '/auth/login', register: '/auth/register' },
  products: {
    products: '/products',
    productById: (id: string) => `/products/${id}`,
    productLike: (id: string) => `/products/${id}/likes`,
  },
};

export default urls;
