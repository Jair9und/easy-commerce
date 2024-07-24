import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    checkout: {}
  }),
  getters:{
    summaryQuantity(state){
      return state.items.reduce((acc, item) => acc + item.quantity, 0) //short
    },
    summaryPrice(state){
        return state.items.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }
  },
  actions: {
    loadCart(){
      const previousCart = localStorage.getItem('cart-data')
      if(previousCart){
        this.items = JSON.parse(previousCart)
      }
    },
    addToCart(productData) {
      const findProductIndex = this.items.findIndex(item => {
        return item.name === productData.name
      })

      if(findProductIndex < 0){
        productData.quantitiy = 1;
        this.items.push(productData);
      } else {
        const currentItem = this.items[findProductIndex]
        this.updateQuantitiy(findProductIndex, currentItem.quantity + 1)
      }
      
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    updateQuantitiy(index, quantitiy) {
      this.items[index].quantity = quantitiy;
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem('cart-data', JSON.stringify(this.items))
    },
    checkout(userData){
      const orderData = {
        ...userData,
        totalPrice: this.summaryPrice,
        paymentMethod: 'Credit Card',
        createdDate: (new Date()).toLocaleString(),
        orderNumber: `AA${(Math.floor(Math.random() * 90000)+10000)}`
      }
      localStorage.setItem('order-data', JSON.stringify(orderData))
    },
    loadCheckout(){
      const previousOrder = localStorage.getItem('order-data')
      if(previousOrder){
        this.checkout = JSON.parse(previousOrder)
      }
    }
  },
});
