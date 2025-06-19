import { createContext, useContext, useEffect, useState } from "react";
import rating5 from "../assets/svg/flashsales/Five star.svg";
import rating1 from "../assets/img/flashsalescomp/1rating.png";
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import rating3 from "../assets/img/flashsalescomp/3rating.png";
import rating4 from "../assets/img/flashsalescomp/4rating.png";
import { toast } from 'react-toastify';
import { auth } from "../js/firebase";
import { onAuthStateChanged } from "firebase/auth";

const valueContext = createContext();

function ContextProvider({ children }) {
 
  const [displayterm, setDisplayTerm] = useState("category");
  const [displayValue, setDisplayValue] = useState("groceries");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messages,setMessages] = useState([]);
  const [placedorders,setPlacedOrders] = useState([]);
   const [action,setAction] = useState("login");
 
  

  const [brandterm, setBrandTerm] = useState("brand");
  const [brandvalue, setBrandValue] = useState("Rolex");
  const [cart, setCart] = useState([]);
  const [cartitemquantity, setCartItemQuantity] = useState(0);
  const [cartitemdeliverychoice, setCartItemDeliveryChoice] = useState(0);
  const [wishlist, setWishList] = useState([]);
  const [billingdetails, setBillingDetails] = useState({
    firstname: "",
    address: "",
    town: "",
    phonenumber: "",
    email: "",
  });



  function HandleCategory(e) {
    setDisplayTerm("category");
    setDisplayValue(e.target.value);
  }

  function HandleBrands(e) {
    setBrandValue(e.target.value);
  }

  function HandleDelivery(e) {
    setCartItemDeliveryChoice(e.target.value);
  }
  function HandleQuantity(e) {
    setCartItemQuantity(e.target.value);
  }

  function GetRatings(rating) {
    const productRating = Math.floor(rating);
    switch (productRating) {
      case 1:
        return rating1;
      case 2:
        return rating2;
      case 3:
        return rating3;
      case 4:
        return rating4;
      default:
        rating5;
    }
  }

  function ToUp(option) {
    const firstLetter = option.slice(0, 1).toUpperCase();
    const restOfLetters = option.slice(1, option.length);
    const newOption = `${firstLetter}${restOfLetters}`;

    return newOption;
  }
    function addToCart(cart, id, price, cartitemdeliverychoice, cartitemquantity,setCart) {
            if (cartitemquantity <= 0) {
                toast.error("Quantity must be greater than 0");
                return;
            }

            const existingItem = cart.find((item) => item.id === id);
            let updatedCart;

            if (!existingItem) {
                const newCartItem = {
                id,
                price,
                quantity: Number(cartitemquantity),
                delivery: cartitemdeliverychoice,
                };
                updatedCart = [...cart, newCartItem];
                toast.success("Added to cart");
            } else {
                updatedCart = cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Number(cartitemquantity),
                        delivery: cartitemdeliverychoice,
                    }
                    : item
                );
                toast.info("Item exists in cart and has been updated");
  }

      setCart(updatedCart);
      const user = auth.currentUser;
        if (user) {
          localStorage.setItem(`cart_${user.uid}`, JSON.stringify(updatedCart));
        } else {
          toast.warning("User not logged in. Cart will not be saved persistently.");
        }
}


  const cartProducts = cart.map(item => {
    const product = products.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      delivery: item.delivery,
      price: item.price,
    };
  });

  function SubTotal() {
    let subtotal = 0;
    const newtotal = cart.map((item) => {
      let pricetotal = Number(item.quantity) * Number(item.price);

      subtotal += pricetotal;
    });
    return subtotal;
  }
  function SubDelivery() {
    let subtotal = 0;
    const newtotal = cart.map((item) => (subtotal += Number(item.delivery)));
    return subtotal;
  }

  function Total(SubDelivery, SubTotal) {
    return (SubDelivery() + SubTotal()).toFixed(2);
  }

function AddToWishlist(id) {
    const user = auth.currentUser;

    if (!user) {
        toast.error("You must be logged in to use wishlist");
        return;
    }

    const userWishlistKey = `wishlist_${user.uid}`;
    const storedWishlist = localStorage.getItem(userWishlistKey);
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

    const present = wishlist.find((item) => item.id === id);
    if (present) {
        toast.error("Item already exists in your wishlist");
        return;
    }

    const matchingItem = products.find((product) => product.id === id);
    if (!matchingItem) {
        toast.error("Product not found");
        return;
    }

    const newWishlistItem = {
        id: matchingItem.id,
        price: matchingItem.price,
        thumbnail: matchingItem.thumbnail,
        title: matchingItem.title,
    };

    const updatedWishlist = [...wishlist, newWishlistItem];

    
    setWishList(updatedWishlist);
    localStorage.setItem(userWishlistKey, JSON.stringify(updatedWishlist));

    toast.success("Added to wishlist");
}


 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.uid}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]);
      }
    } else {
      setCart([]); 
    }
  });

  return () => unsubscribe(); 
}, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userOrderKey = `placedorders_${user.uid}`;
        const storedOrders = localStorage.getItem(userOrderKey);
        setPlacedOrders(storedOrders ? JSON.parse(storedOrders) : []);
      } else {
        setPlacedOrders([]);
      }
  });

  return () => unsubscribe();
}, []);
   useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
 useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const key = `billingdetails_${user.uid}`;
          const stored = localStorage.getItem(key);
          setBillingDetails(stored ? JSON.parse(stored) : {});
        } else {
          setBillingDetails({});
        }
      });

      return () => unsubscribe();
    }, []);


 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const userWishlistKey = `wishlist_${user.uid}`;
      const storedWishlist = localStorage.getItem(userWishlistKey);

      if (storedWishlist) {
        setWishList(JSON.parse(storedWishlist));
      } else {
        setWishList([]); 
      }
    } else {
      setWishList([]); 
    }
  });
    return () => unsubscribe();
}, []);



  useEffect(() => {
    const getApiDetail = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const responseData = await response.json();
        setProducts(responseData.products);
        const response1 = await fetch(
          "https://dummyjson.com/products/category-list"
        );
        const response1Data = await response1.json();
        setCategories(response1Data.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    getApiDetail();
  }, []);

  return (
    <>
      <valueContext.Provider
        value={{
          SubTotal,
          cartProducts,
          SubDelivery,
          Total,
          AddToWishlist,
          wishlist,
          setWishList,
          addToCart,
          cart,
          setCart,
          cartitemdeliverychoice,
          cartitemquantity,
          HandleQuantity,
          HandleDelivery,
          GetRatings,
          brandterm,
          brandvalue,
          products,
          categories,
          HandleBrands,
          ToUp,
          HandleCategory,
          displayValue,
          setDisplayTerm,
          displayterm,
          setDisplayValue,
          billingdetails,
          setBillingDetails,
          messages,
          setMessages,
          placedorders,
          setPlacedOrders,
          action,
          setAction
        }}
      >
        {children}
      </valueContext.Provider>
    </>
  );
}

export default ContextProvider;

export const useValueContext = () => {
  return useContext(valueContext);
};
