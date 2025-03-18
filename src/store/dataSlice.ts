

import { createSlice } from "@reduxjs/toolkit";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Person {
  id: number;
  name: string;
  title: string;
  image: string;
  about: string;
  projects: Project[];
}

interface DataState {
  people: Person[];
  currentIndex: number;
}

const initialState: DataState = {
  people: [
    {
      id: 1,
      name: "Priyabharathi",
      title: "Full Stack Developer",
      image: "./assets/woman.png",
      about: "Priya is a skilled full stack developer with experience in multiple frameworks.",
      projects: [
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/5.jpg" },
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/fd1.jpg"},
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/1.jpg"},
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/fd2.png"},
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/3.jpg"},
        { id: 1, title: "Project One", description: "A cool web app.",image:"./assets/project/fd3.jpg"},
      ],
    },
    {
      id: 2,
      name: "Hemanthkumar",
      title: "UI/UX Designer",
      image: "./assets/boy.png",
      about: "Hemanth is an experienced designer specializing in UI and UX.",
      projects: [
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/1.jpg"},
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/2.jpg"},
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/3.jpg"},
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/4.jpg"},
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/5.jpg"},
        { id: 2, title: "Design Hub", description: "A design system project.",image:"./assets/project/6.jpg"},
      ],
    },
    {
      id: 2,
      name: "Varadharaj",
      title: "Ai engineer",
      image: "./assets/boy2.png",
      about: "varadha is an experienced designer specializing in Ai Engineering.",
      projects: [
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/ai3.jpg" },
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/3.jpg" },
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/ai1.jpg" },
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/6.jpg" },
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/ai2.png" },
        { id: 3, title: "Chatbot AI", description: "An AI-based chatbot.",image:"./assets/project/4.jpg" },
      ],
    },
    // Add more persons as needed...
  ],
  currentIndex: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    nextPerson: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.people.length;
    },
    // other reducers as needed...
  },
});

export const { nextPerson } = dataSlice.actions;
export default dataSlice.reducer;

