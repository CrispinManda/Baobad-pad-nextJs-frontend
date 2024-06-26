import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    frontend: [],
    backend: [],
    business: [],
    industry: [],
    company_type: [],
    product_type: [],
    trl: [],
    business_information: {
      company_name: "",
      business_type: "",
      phone_number: "",
      email: "",
      address: "",
      country: "",
      business_number: "",
      city: ""
    }
  },
  reducers: {
    updateFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetFormData(state) {
      return {
        frontend: [],
        backend: [],
        business: [],
        industry: [],
        company_type: [],
        product_type: [],
        trl: [],
        business_information: {
          company_name: "",
          business_type: "",
          phone_number: "",
          email: "",
          address: "",
          country: "",
          business_number: "",
          city: ""
        }
      };
    }
  }
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
