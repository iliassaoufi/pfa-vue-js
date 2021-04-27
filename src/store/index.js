import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItem: JSON.parse(localStorage.getItem("cart")) || [],
    cartTotalPrice:0
  },
  mutations: {
    increment (state, n) {
      state.cartItem.push( n);
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
      

    },
    setTotal (state) {
     let p =0  ;
     let price = state.cartItem.map((value, index, array)=>{
       return  value.product.price*value.quantity; 
     });
     price.forEach(i=>{
       p +=Number(i)  ; 
     });
    state.cartTotalPrice = p ;
    },
    cartDeleteItem(state , index){
     
      state.cartItem.splice(index,1);
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
     // setTotal();

    }

  },
  actions: {
  },
  modules: {
  }
})
