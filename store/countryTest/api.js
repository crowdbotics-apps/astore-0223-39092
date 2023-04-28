import axios from "axios";
const countryTest = axios.create({
  baseURL: "https://restcountries.com/v2/name/{name}",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function countrytest_get_name_list(payload) {
  return countryTest.get(`/name`);
}

export const apiService = {
  countrytest_get_name_list
};