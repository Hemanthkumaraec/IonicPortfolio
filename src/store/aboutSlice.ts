import { createSlice } from "@reduxjs/toolkit";

interface Person {
  id: number;
  image?: string;
  name: string;
  designation: string;
  about: string;
  linkedin: string;
  instagram: string;
}

interface AboutState {
  people: Person[];
  currentIndex: number;
}

const initialState: AboutState = {
  people: [
    {
      id: 1,
      image: "./assets/about/girl2.jpg",
      name: "Priyabharathi",
      designation: "Full Stack Developer",
      about: "Priya is a skilled full stack developer with experience in multiple frameworks Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum sint repellat ipsam perferendis fugit similique atque modi, debitis ea distinctio voluptates possimus ab ratione molestias veniam tenetur! Sed, ratione.",
      linkedin: "https://linkedin.com/in/priyabharathi",
      instagram: "https://instagram.com/priyabharathi",
    },
    {
      id: 2,
      image: "./assets/about/boy1.jpg",
      name: "Hemanthkumar",
      designation: "UI/UX Designer",
      about: "Hemanth is an experienced designer specializing in UI and UX Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum sint repellat ipsam perferendis fugit similique atque modi, debitis ea distinctio voluptates possimus ab ratione molestias veniam tenetur! Sed, ratione.",
      linkedin: "https://linkedin.com/in/hemanthkumar",
      instagram: "https://instagram.com/hemanthkumar",
    },
    {
      id: 3,
      image: "./assets/about/boy2.jpg",
      name: "Varadharaj",
      designation: "AI Engineer",
      about: "Varadharaj is an AI engineer specializing in deep learning and artificial intelligence Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum sint repellat ipsam perferendis fugit similique atque modi, debitis ea distinctio voluptates possimus ab ratione molestias veniam tenetur! Sed, ratione.",
      linkedin: "https://linkedin.com/in/varadharaj",
      instagram: "https://instagram.com/varadharaj",
    },
  ],
  currentIndex: 0,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    nextPerson: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.people.length;
    },
    updateAbout: (state, action) => {
      state.people[state.currentIndex] = { ...state.people[state.currentIndex], ...action.payload };
    },
  },
});

export const { nextPerson, updateAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
