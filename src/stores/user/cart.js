import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [
      {
        name: "test",
        imageUrl:
          "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 1,
        about: "testt",
        status: "open",
        price: 100,
      },
    ],
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
    addToCart(productData) {
      this.items.push(productData);
    },
    updateQuantitiy(index, quantitiy) {
      this.items[index].quantity = quantitiy;
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
    },
  },
});
