import { createContext,useState } from "react";
import { food_list } from "../assets/assets";
import { toast } from "react-toastify";

export const StoreContext = createContext(null)

const StoreContextProvidar =(props) =>{

    const [cartItems,setCartItems] = useState({});

    const addTocart = (id) => {
        if (!cartItems[id]) {
         setCartItems((prev)=>({...prev,[id]:1}))
         toast.success("Add To Cart Successfully")
        }
       else{
         setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
        }

    }
    const removeFromCart =(id)=>{
      setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }
    
    const getTotalCartAmount = () =>{
        let TotalAmount = 0;
        for(const item in cartItems)
        {
          if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id === item);
            TotalAmount += itemInfo.price*  cartItems[item];
          }
      
        }
        return TotalAmount;
      }

      const getTotalCartQuantity = () => {
        let totalQuantity = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            totalQuantity += cartItems[item];
          }
        }
        return totalQuantity;
      };
    


    const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addTocart,
       removeFromCart,
       getTotalCartAmount,
       getTotalCartQuantity 
    }
    return(
       <StoreContext.Provider value={contextValue}>
            {props.children}
       </StoreContext.Provider>

    )

    
}
export default StoreContextProvidar;