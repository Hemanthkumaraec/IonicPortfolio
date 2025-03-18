import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Detail {
  id: number;
  skill1:string;
  skill2:string;
  skill3:string;
  skill4: string;
  skill5: string;
  skill6:string;
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  image5:string;
  image6:string;
}
interface About{
  id: number;
  name: string;
  designation: string;
  about: string;
  image: string;
  linkedin: string;
  instagram: string;
}
interface DetailsState {
  details: Detail[];
  abouts:About[];
}

const initialState: DetailsState = {
  details: [],
  abouts:[],
};




const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    addDetails: (state, action: PayloadAction<Detail>) => {
      state.details.push(action.payload);
    },
    setAbouts: (state, action: PayloadAction<About[]>) => {
      state.abouts = action.payload;
    }
    
  },
});



export const { addDetails,setAbouts } = detailSlice.actions;
export default detailSlice.reducer;
