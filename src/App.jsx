import Swal from "sweetalert2";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
export const GlobalInfo = createContext();
const App = () => {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const Swal = require("sweetalert2");

  const cartItem = (data) => {
    setCart(cart + 1);
    setCartItems([...cartItems, data]);
    Swal.fire({
      title: "Added To The Cart",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Yes",
    });
  };

  const emptyCart = () => {
    setCartItems([]);
    setCart(0);
  };

  return (
    <GlobalInfo.Provider
      value={{
        cartValue: cart,
        cartItem: cartItem,
        cartItems: cartItems,
        emptyCart,
      }}
    >
      <div>
        <Navbar cart={cart} />
        <div style={{ padding: 50 }}>
          <Outlet cart={cart} cartItem={cartItem} />
        </div>
      </div>
    </GlobalInfo.Provider>
  );
};

export default App;
