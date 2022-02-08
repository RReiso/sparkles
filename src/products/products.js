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
    gifts: randomBool(),
    sale: randomBool({ likelihood: 30 }),
    new: randomBool({ likelihood: 30 }),
    luxury: randomBool(),
    all: true,
  };
});

export default products;
