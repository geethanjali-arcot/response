

// export const getCartItems = () => {
//   const items = localStorage.getItem("cartItems");
//   return items ? JSON.parse(items) : [];
// };

// export const isInCart = (slug) => {
//   const items = getCartItems();
//   return items.some((item) => item.slug === slug);
// };

// // ADD ONLY ONCE
// export const addToCart = (product) => {
//   const existingItems = getCartItems();
//   const alreadyExists = existingItems.find((item) => item.slug === product.slug);

//   // if already in cart, do not increase quantity here
//   if (alreadyExists) {
//     window.dispatchEvent(new Event("cartUpdated"));
//     return existingItems;
//   }

//   const updatedItems = [
//     ...existingItems,
//     {
//       ...product,
//       quantity: 1,
//     },
//   ];

//   localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   window.dispatchEvent(new Event("cartUpdated"));
//   return updatedItems;
// };

// export const removeFromCart = (slug) => {
//   const items = getCartItems();
//   const updatedItems = items.filter((item) => item.slug !== slug);

//   localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   window.dispatchEvent(new Event("cartUpdated"));
//   return updatedItems;
// };

// // quantity set directly like 1, 2, 3
// export const updateCartQuantity = (slug, quantity) => {
//   const items = getCartItems();

//   const updatedItems = items.map((item) =>
//     item.slug === slug
//       ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
//       : item
//   );

//   localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//   window.dispatchEvent(new Event("cartUpdated"));
//   return updatedItems;
// };

// export const getCartCount = () => {
//   const items = getCartItems();
//   return items.length;
// };

// export const getWishlistItems = () => {
//   const items = localStorage.getItem("wishlistItems");
//   return items ? JSON.parse(items) : [];
// };

// export const addToWishlist = (product) => {
//   const existingItems = getWishlistItems();
//   const alreadyExists = existingItems.find((item) => item.slug === product.slug);

//   if (alreadyExists) {
//     window.dispatchEvent(new Event("wishlistUpdated"));
//     return existingItems;
//   }

//   const updatedItems = [...existingItems, product];
//   localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));
//   window.dispatchEvent(new Event("wishlistUpdated"));
//   return updatedItems;
// };

// export const removeFromWishlist = (slug) => {
//   const items = getWishlistItems();
//   const updatedItems = items.filter((item) => item.slug !== slug);

//   localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));
//   window.dispatchEvent(new Event("wishlistUpdated"));
//   return updatedItems;
// };

// export const isInWishlist = (slug) => {
//   const items = getWishlistItems();
//   return items.some((item) => item.slug === slug);
// };

// export const getWishlistCount = () => {
//   const items = getWishlistItems();
//   return items.length;
// };




// ================= CART =================

export const getCartItems = () => {
  const items = localStorage.getItem("cartItems");
  return items ? JSON.parse(items) : [];
};

export const isInCart = (slug) => {
  const items = getCartItems();
  return items.some((item) => item.slug === slug);
};

// add only once
export const addToCart = (product) => {
  const existingItems = getCartItems();
  const alreadyExists = existingItems.find((item) => item.slug === product.slug);

  if (alreadyExists) {
    window.dispatchEvent(new Event("cartUpdated"));
    return existingItems;
  }

  const updatedItems = [
    ...existingItems,
    {
      ...product,
      quantity: 1,
    },
  ];

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedItems;
};

export const removeFromCart = (slug) => {
  const items = getCartItems();
  const updatedItems = items.filter((item) => item.slug !== slug);

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedItems;
};

export const updateCartQuantity = (slug, quantity) => {
  const items = getCartItems();

  const updatedItems = items.map((item) =>
    item.slug === slug
      ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
      : item
  );

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedItems;
};

export const increaseCartQuantity = (slug) => {
  const items = getCartItems();

  const updatedItems = items.map((item) =>
    item.slug === slug
      ? { ...item, quantity: (item.quantity || 1) + 1 }
      : item
  );

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedItems;
};

export const decreaseCartQuantity = (slug) => {
  const items = getCartItems();

  const updatedItems = items.map((item) =>
    item.slug === slug
      ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
      : item
  );

  localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("cartUpdated"));
  return updatedItems;
};

export const getCartCount = () => {
  const items = getCartItems();
  return items.reduce((total, item) => total + (item.quantity || 1), 0);
};

// ================= WISHLIST =================

export const getWishlistItems = () => {
  const items = localStorage.getItem("wishlistItems");
  return items ? JSON.parse(items) : [];
};

export const addToWishlist = (product) => {
  const existingItems = getWishlistItems();
  const alreadyExists = existingItems.find((item) => item.slug === product.slug);

  if (alreadyExists) {
    window.dispatchEvent(new Event("wishlistUpdated"));
    return existingItems;
  }

  const updatedItems = [...existingItems, product];
  localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("wishlistUpdated"));
  return updatedItems;
};

export const removeFromWishlist = (slug) => {
  const items = getWishlistItems();
  const updatedItems = items.filter((item) => item.slug !== slug);

  localStorage.setItem("wishlistItems", JSON.stringify(updatedItems));
  window.dispatchEvent(new Event("wishlistUpdated"));
  return updatedItems;
};

export const isInWishlist = (slug) => {
  const items = getWishlistItems();
  return items.some((item) => item.slug === slug);
};

export const getWishlistCount = () => {
  const items = getWishlistItems();
  return items.length;
};