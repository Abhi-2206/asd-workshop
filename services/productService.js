const { readData } = require("../database/productDatabase");

async function delay() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1500);
  });

  return await readData();
}

async function getProducts() {
  return await delay();
}

async function getProductsById(id) {
  let data = await delay();

  return data.find((x) => x.id === id);
}

module.exports = {
  getProducts,
  getProductsById,
};
