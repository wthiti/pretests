import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk(
    'fetchCategory',
    async () => {
        const response = await fetch('https://api.publicapis.org/categories')
        console.log(response);
        return await response.json();
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
    },
    reducers: {},
    extraReducers: {
        [fetchCategory.fulfilled]: (state, action) => {
            state.categories = action.payload;
            console.log(action.payload);
        }
    },
});

export const selectCategories = state => state.category.categories;

export default categorySlice.reducer;
