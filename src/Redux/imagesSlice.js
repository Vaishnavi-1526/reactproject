import { createSlice } from '@reduxjs/toolkit';
import image1 from '../folder/image1.png';
import image2 from '../folder/image2.png';
import image3 from "../folder/image3.png"
import image4 from "../folder/image4.png"
import image5 from "../folder/image5.png"
import image6 from "../folder/image6.png"
import image7 from "../folder/image7.png"
import image8 from "../folder/image8.png"
import image9 from "../folder/image9.png"
import image10 from "../folder/image10.png"
import image11 from "../folder/image11.png"
import image12 from "../folder/image12.png"
import image13 from "../folder/image13.png"
import image14 from "../folder/image14.png"
import image15 from "../folder/image14-1.png"
import image16 from "../folder/image15.png"
import image17 from "../folder/image16.png"
import image18 from "../folder/image17.png"
import image19 from "../folder/image18.png"
import image20 from "../folder/image19.png"
// Import all other images...

const images = [
    { id: 1, src: image1, description: 'Tree 1' },
    { id: 2, src: image2, description: 'Tree 2' },
    { id: 3, src: image3, description: 'Tree 3' },
    { id: 4, src: image4, description: 'Tree 4' },
    { id: 5, src: image5, description: 'Plant 1' },
    { id: 6, src: image6, description: 'Plant 2' },
    { id: 7, src: image7, description: 'Plant 3' },
    { id: 8, src: image8, description: 'Plant 4' },
    { id: 9, src: image9, description: 'Tray' },
    { id: 10, src: image10, description: 'Soil' },
    { id: 11, src: image11, description: 'Soil2' },
    { id: 12, src: image12, description: 'Spade' },
    { id: 13, src: image13, description: 'Duck 1' },
    { id: 14, src: image14, description: 'Duck 2' },
    { id: 15, src: image15, description: 'Duck 3' },
    { id: 16, src: image16, description: 'Duck 4' },
    
    { id: 17, src: image17, description: 'Pot 1' },
    { id: 18, src: image18, description: 'Pot 2' },
    { id: 19, src: image19, description: 'Pot 3' },
    { id: 20, src: image20, description: 'Pot 4' },
    // Add all other images...
];

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: images,
        currentPage: 1,
        itemsPerPage: 8, // Number of items per page
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        nextPage: (state) => {
            if (state.currentPage < Math.ceil(state.images.length / state.itemsPerPage)) {
                state.currentPage += 1;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = Math.ceil(state.images.length / state.itemsPerPage);
        },
    },
});

export const { setPage, nextPage, prevPage, goToFirstPage, goToLastPage } = imagesSlice.actions;
export default imagesSlice.reducer;