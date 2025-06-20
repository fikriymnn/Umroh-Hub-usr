import { Jamaah, Order } from "../types/Order";
import { Package } from "../types/Package";

export const saveSelectedPackage = (data: Package) => {
    localStorage.setItem("selectedPackage", JSON.stringify(data));
  };
  
  export const getSelectedPackage = () => {
    const data = localStorage.getItem("selectedPackage");
    return data ? JSON.parse(data) : null;
  };

  export const saveSelectedOrder = (data: Order) => {
    localStorage.setItem("selectedOrder", JSON.stringify(data));
  };

  export const getSelectedOrder = () => {
    const data = localStorage.getItem("selectedOrder");
    return data ? JSON.parse(data) : null;
  };

  export const saveOrderData = (data: Jamaah[]) => {
    localStorage.setItem("orderData", JSON.stringify(data));
  };

  export const getOrderData = () => {
    const data = localStorage.getItem("orderData");
    return data ? JSON.parse(data) : null;
  };

  export const savePayment = (data: Order) => {
    localStorage.setItem("payment", JSON.stringify(data));
  };

  export const getPayment = () => {
    const data = localStorage.getItem("payment");
    return data ? JSON.parse(data) : null;
  };
  
  export const clearOrderData = () => {
    localStorage.removeItem("orderData");
    localStorage.removeItem('selectedPackage');
    localStorage.removeItem('selectedOrder');
    localStorage.removeItem('payment');
  };
  
  