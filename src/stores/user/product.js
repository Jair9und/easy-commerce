import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl: "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 1,
        about: "testt",
        status: "open",
        price: 100,
      },
      {
        name: "test123",
        imageUrl: "https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg",
        quantity: 1,
        about: "Recheck for detail",
        status: "open",
        price: 100,
      }
    ],
    loaded: false,
  }),
  actions:{
    filterProducts(searchText){
      return this.list.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    }
  }
});
