import tonkotsu from "./tonkotsu.jpg";
import tori_paitan from "./chicken_paitan.jpg";

let products = [
  {
    name: "Tonkotsu",
    price: "8.00",
    image: tonkotsu,
    opener: "Rich and creamy pork broth and chewy noodles, with the toppings you crave.",
  },
  {
    name: "Tori Paitan",
    price: "7.00",
    image: tori_paitan,
    opener: "Decadent white chicken broth with traditional ramen toppings and noodles."
  },
  {
    name: "Mushroom",
    price: "7.00",
    image: "./tori_paitan.jpg",
    opener: "Creamy vegan mushroom broth and our own curated vegan toppings and noodles.",
  },
  {
    name: "Vegetable",
    price: "7.00",
    image: "./tonkotsu.jpg",
    opener: "Fragrant vegan broth made from a mix of vegetables and our own curated vegan toppings and noodles."
  }
];

export function getProducts() {
  return products;
}