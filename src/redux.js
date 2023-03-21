import { configureStore, createSlice } from "@reduxjs/toolkit";



export const authentification = createSlice(
    {
        name: 'authentification',
        initialState: {
            email: 'kad@gmail.com',
            password: 'kadkad',

        },
        reducers: {
            addEmail: (state, action) => {
                state.email = action.payload;
                console.log(state.email);
                return state;
            },
            addPassword: (state, action) => {
                state.password = action.payload
                // if adresse mail correct return state.
                console.log(state.password);
                return state;
            }

        }
    }
)

// export 
export const { addEmail, addPassword } = authentification.actions;

 
export const store = configureStore({
    reducer: {
        authentification: authentification.reducer
    }
})