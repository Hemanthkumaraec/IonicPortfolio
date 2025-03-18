// export default contactSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  name:string;
  id: number;
  email: string;
  phone: string;
  address: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [
    { id: 1, name:"Priyabharathi", email: "priyabharathi1003@gmail.com", phone: "6381261991", address: "123 Street, City" },
    { id: 2, name:"Hemanthkumar",email: "aechemanth@gmail.com", phone: "9363399198", address: "456 Avenue, Town" },
    { id: 3,name:"Varadharaj", email: "varadharaj@gmail.com", phone: "9786462137", address: "789 Boulevard, District" },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
  },
});

export default contactSlice.reducer;
