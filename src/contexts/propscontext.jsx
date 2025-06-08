import { createContext,useContext,useEffect, useState } from "react";
import rating5 from "../assets/svg/flashsales/Five star.svg";
import rating1 from "../assets/img/flashsalescomp/1rating.png";
import rating2 from "../assets/img/flashsalescomp/2rating.png";
import rating3 from "../assets/img/flashsalescomp/3rating.png";
import rating4 from "../assets/img/flashsalescomp/4rating.png";


const valueContext = createContext();




function ContextProvider ({ children }){


    const [displayterm, setDisplayTerm] = useState("category"); 
     const [displayValue, setDisplayValue] = useState("groceries"); 
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

     const [brandterm,setBrandTerm] = useState("brand");
     const [brandvalue,setBrandValue] = useState("Rolex");
     const  [cart, setCart] = useState([]);
     const [cartitemquantity, setCartItemQuantity]= useState(0);
    const [cartitemdeliverychoice, setCartItemDeliveryChoice]= useState(0);
    const [wishlist,setWishList]= useState([]);

    console.log(cart);


    
    
      
        

  
     
  


   

  
 


    function HandleCategory (e){
        setDisplayTerm("category");
        setDisplayValue(e.target.value);
    

    }

     function HandleBrands (e){
      
        setBrandValue(e.target.value);
         
       

    }

    function HandleDelivery (e){
        setCartItemDeliveryChoice(e.target.value);

    }
      function HandleQuantity (e){
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


    
   


 

    

    function ToUp (option){
        const firstLetter = option.slice(0,1).toUpperCase();
        const restOfLetters = option.slice(1,option.length)
        const newOption= `${firstLetter}${restOfLetters}`

        return newOption;
        
    }
    function addToCart(cart, id, price, cartitemdeliverychoice, cartitemquantity) {
        const present = cart.filter(item => item.id === id);

        if (cartitemquantity > 0) {
            let updatedCart;

            if (present.length === 0) {
            const newCartItem = {
                id: id,
                price: price,
                quantity: Number(cartitemquantity),
                delivery: cartitemdeliverychoice
            };
            updatedCart = [...cart, newCartItem];
            } else {
            updatedCart = cart.map(item => {
                if (item.id === id) {
                return {
                    ...item,
                    quantity: Number(item.quantity) + Number(cartitemquantity),
                    delivery: cartitemdeliverychoice
                };
                }
                return item;
            });
            }

            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  }
}

const cartProducts = cart.map(item => {
            const product = products.find(product => product.id === item.id);
            return {
            ...product,
            quantity: item.quantity,
            delivery: item.delivery,
            price: item.price,
            };
        });


function SubTotal () {
  let subtotal = 0;
  const newtotal = cart.map(item =>{
     let pricetotal=  Number(item.quantity) * Number(item.price);
  
     subtotal += pricetotal;
    

  })
  return subtotal;
   
}
function SubDelivery () {
  let subtotal = 0;
  const newtotal = cart.map(item =>  subtotal += Number(item.delivery))
  return subtotal;
   
}

function Total (SubDelivery,SubTotal) {
  return (SubDelivery() + SubTotal()).toFixed(2);
}



   function AddToWishlist(id) {
        const present = wishlist.find(item => item.id === id);

        if (!present) {
            const matchingItem = products.find(product => product.id === id);
            const newWishlistItem = {
            id: matchingItem.id,
            price: matchingItem.price,
            thumbnail: matchingItem.thumbnail,
            title: matchingItem.title
            };

            const updatedWishlist = [...wishlist, newWishlistItem];
            setWishList(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
        }
}

   
   

  

   useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        setCart(JSON.parse(storedCart));
    }
}, []);

   useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        setWishList(JSON.parse(storedWishlist));
    }
}, []);




   
  



    useEffect(()=>{
        const getApiDetail = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products?limit=0');
                const responseData = await response.json();
                setProducts(responseData.products);
                const response1 =await fetch('https://dummyjson.com/products/category-list');
                const response1Data = await response1.json();
                setCategories(response1Data.slice(0,10));
             
               
         

            }
            catch(err) {
                console.log( err)
            }
           
        }
        getApiDetail();

    },[])

    return(
        <>
         <valueContext.Provider value={{SubTotal,cartProducts,SubDelivery,Total,AddToWishlist,wishlist,setWishList,addToCart,cart,setCart,cartitemdeliverychoice,cartitemquantity,HandleQuantity,HandleDelivery,GetRatings,brandterm,brandvalue,products, categories, HandleBrands,ToUp,HandleCategory,displayValue,setDisplayTerm,displayterm,setDisplayValue}}>
                 {children}
        </valueContext.Provider>
        </>
    )





    
}

export default ContextProvider

export const useValueContext = () => {
    return useContext(valueContext);
  };