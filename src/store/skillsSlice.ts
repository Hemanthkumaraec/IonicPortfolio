import { createSlice } from "@reduxjs/toolkit";

interface Skill {
  image: string;
  name: string;
}

interface Person {
  id: number;
  name: string; // Added Name for Display
  skills: Skill[];
}

interface SkillsState {
  details: Person[];
  currentIndex: number;
}

const initialState: SkillsState = {
  details: [
    {
      id: 1,
      name: "Priyabharathi",
      skills: [
        { image: "./assets/about/react.png", name: "React" },
        { image: "./assets/about/java.png", name: "JAVA" },
        { image: "./assets/about/pytho.jpg", name: "Python" },
        { image: "./assets/about/kotlin.jpg", name: "Kotlin" },
        { image: "./assets/about/html.jpg", name: "HTML" },
        { image: "./assets/about/css.png", name: "CSS" },
      ],
    },
    {
      id: 2,
      name: "Hemanthkumar",
      skills: [
        { image: "./assets/about/react.png", name: "React" },
        { image: "./assets/about/c++.jpg", name: " C++" },
        { image: "./assets/about/vue.jpg", name: "VUE" },
        { image: "./assets/about/kotlin.jpg", name: "Kotlin" },
        { image: "./assets/about/html.jpg", name: "HTML" },
        { image: "./assets/about/css.png", name: "CSS" },
      ],
    },
    {
      id: 3,
      name: "Varadharaj",
      skills: [
        { image: "./assets/about/react.png", name: "React" },
        { image: "./assets/about/angular.png", name: "Angular" },
        { image: "./assets/about/pytho.jpg", name: "Python" },
        { image: "./assets/about/flutter.png", name: "Flutter" },
        { image: "./assets/about/html.jpg", name: "HTML" },
        { image: "./assets/about/css.png", name: "CSS" },
      ],
    },
  ],
  currentIndex: 0,
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    nextPerson: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.details.length;
    },
    updateSkills: (state, action) => {
      state.details[state.currentIndex] = { ...state.details[state.currentIndex], ...action.payload };
    },
  },
});

export const { nextPerson, updateSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
