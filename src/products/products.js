import randomFloat from "random-float";
import { LoremIpsum } from "lorem-ipsum";
import randomBool from "random-bool";
import images from "./images";

const lorem = new LoremIpsum();

const products = images.map((image, idx) => {
  return {
    id: idx,
    name: lorem.generateWords(2),
    image: image,
    price: randomFloat(1000, 5000).toFixed(2),
    description: lorem.generateSentences(2),
    engagement: randomBool(),
    sale: randomBool(),
    new: randomBool(),
    luxury: randomBool(),
    all: true,
  };
});

export default products;
