import { faker } from '@faker-js/faker';
import MongoProductManager from '../Dao/mongo/managers/products.js';

const context = async ()=>{



const pm = new MongoProductManager()


const productList = [];

for (let i = 1; i <= 1; i++) {
  const product = {
    title: `Producto ${i.toString().padStart(3, '0')} rtp con Code alfanumerico`,
    description: "Producto Creado de prueba con timestamps",
    price: faker.commerce.price(),
    thumbnail: "imagenPostman.jpg",
    code: faker.string.alphanumeric(5),
    stock: faker.number.int({ min: 1, max: 100 }),
    category: faker.commerce.productAdjective(),
    status: true
  };

  await pm.addProduct(product);

}


}

context();

