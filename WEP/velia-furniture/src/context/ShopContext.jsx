import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Cart state with localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('velia_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 }, // Default 1 product to immediately show lively luxury cart
        { product: PRODUCTS[2], quantity: 1 }
      ];
    } catch (e) {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  // Wishlist state with localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('velia_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id, PRODUCTS[3].id];
    } catch (e) {
      return [];
    }
  });

  // Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); // For detail/quickview modal
  const [toastMessage, setToastMessage] = useState(null);
  
  // Active page / category filter
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'shop', 'collections', 'living-room', 'bedroom', 'about'
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('velia_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast helper
  const showToast = (message, type = 'info') => {
    if (!message) {
      setToastMessage(null);
      return;
    }
    const toastId = Date.now();
    setToastMessage({ message, type, id: toastId });
    setTimeout(() => {
      setToastMessage((prev) => (prev?.id === toastId ? null : prev));
    }, 3800);
  };

  // Cart actions
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name}" to your shopping bag.`, 'success');
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from shopping bag.', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist actions
  const toggleWishlist = (productId) => {
    const isWishlisted = wishlist.includes(productId);
    const product = PRODUCTS.find((p) => p.id === productId);
    if (isWishlisted) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast(`Removed from your curated wishlist.`, 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast(`Saved "${product?.name || 'Item'}" to your wishlist.`, 'success');
    }
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart computations
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Free shipping threshold: ₹1500
  const freeShippingThreshold = 1500;
  const freeShippingProgress = Math.min(
    100,
    Math.round((cartSubtotal / freeShippingThreshold) * 100)
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const navigateTo = (tab, category = 'All') => {
    setActiveTab(tab);
    if (tab === 'shop' || tab === 'collections') {
      setActiveCategoryFilter(category || 'All');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        freeShippingProgress,
        amountToFreeShipping,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,

        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,

        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,

        isCheckoutOpen,
        setIsCheckoutOpen,

        activeProduct,
        setActiveProduct,

        activeTab,
        setActiveTab,
        activeCategoryFilter,
        setActiveCategoryFilter,
        navigateTo,

        toastMessage,
        showToast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
