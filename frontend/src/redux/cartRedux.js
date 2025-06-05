import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products : [],
        quantity: 0,
        total: 0,
        email: ''
    },
    reducers: {

        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.email = action.payload.email
            state.total += action.payload.price * action.payload.quantity;
        },

        removeProduct: (state , action) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);

            if(index !== -1)
            {
                state.quantity -= 1;
                state.total += state.products[index].price * state.products[index].quantity;
                state.products.splice(index , 1);
            }
        },

        clearCart: (state) => {
            state.quantity = 0,
            state.total = 0,
            state.products = []
        }
    }
})

export const {addProduct , removeProduct , clearCart} = cartSlice.actions;
export default cartSlice.reducer;