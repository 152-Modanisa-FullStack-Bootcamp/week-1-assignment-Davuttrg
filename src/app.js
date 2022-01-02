import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    console.log(response)
    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;
    products.forEach(element => {
      console.log(element.name)
    });
    // Print names of all product to the console
    // by calling foreach  method (use arrow function)

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products.filter((product) => product.name.includes("Şal")).map((item) => { return { name: item.name, image: item.image } })
    console.log(mappedProducts)
    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    let element = document.getElementById('products');
    mappedProducts.forEach((product) => {
      let divElement = document.createElement("div")
      divElement.classList.add("product")
      let imgElement = document.createElement("img")
      imgElement.src = product.image;
      let pElement = document.createElement("p");
      pElement.innerText = product.name;
      divElement.appendChild(imgElement)
      divElement.appendChild(pElement)
      element.appendChild(divElement)

    })

  });
