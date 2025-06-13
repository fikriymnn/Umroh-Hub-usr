export const saveSelectedPackage = (data: any) => {
    localStorage.setItem("selectedPackage", JSON.stringify(data));
  };
  
  export const getSelectedPackage = () => {
    const data = localStorage.getItem("selectedPackage");
    return data ? JSON.parse(data) : null;
  };

  export const saveOrderData = (data: any[]) => {
    localStorage.setItem("orderData", JSON.stringify(data));
  };
  
  export const getOrderData = () => {
    const data = localStorage.getItem("orderData");
    return data ? JSON.parse(data) : null;
  };
  
  export const clearOrderData = () => {
    localStorage.removeItem("orderData");
  };
  
  