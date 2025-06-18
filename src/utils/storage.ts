import { Jamaah } from "../types/Order";
import { Package } from "../types/Package";

export const saveSelectedPackage = (data: Package) => {
    localStorage.setItem("selectedPackage", JSON.stringify(data));
  };
  
  export const getSelectedPackage = () => {
    const data = localStorage.getItem("selectedPackage");
    return data ? JSON.parse(data) : null;
  };

  export const saveOrderData = (data: Jamaah[]) => {
    localStorage.setItem("orderData", JSON.stringify(data));
  };
  
  export const getOrderData = () => {
    const data = localStorage.getItem("orderData");
    return data ? JSON.parse(data) : null;
  };
  
  export const clearOrderData = () => {
    localStorage.removeItem("orderData");
    localStorage.removeItem('selectedPackage');
  };
  
  