main();

function main() {
  getArticles();
}

function getArticles() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      return res.json();
    })
  }


let Produit = [];
console.log(Produit);

const fetchProduit = async () => {
  await fetch(": http://localhost:3000/api/product")
    .then((res) => res.json())
    .then((promise) => {
      Produit = promise;
      console.log(Produit);
    });
};

/*
const ProduitDisplay = async () => {
    await fetchProduit();
  
    document.getElementById(
      "items",
    ).innerHTML = `<div><img class="image-items" src="${Produit[3].imageUrl}" alt=""/>
    </div>
    `;
    document.getElementById("items").innerHTML = Produit
      .map(
        (Produit) => `
    <div id="card${Produit._id}" class="flex-column-around card-size card">
    <h3 class="titre-card">${Produit.name.toUpperCase()}</h3>
    <img class="image-size" src="${Produit.imageUrl}" alt="image de Produit ${
          Produit.name
        }"/>
      <div class="bouton-chene">CHÊNE</div>
      <p class="description-Produit">${Produit.description}</p>
      <button id="${Produit._id}" class="bouton-details">Voir</button>
      <p>${Produit.price.toString().replace(/0+$/, "")} Euro</p>
  
    
    </div>
    `,
      )
      .join("");
  
    let boutons = document.querySelectorAll(".bouton-details");
    console.log(boutons);
  
    boutons.forEach((bouton) =>
      bouton.addEventListener("click", () => {
        console.log(bouton);
  
        window.location = `produit.html?${bouton.id} `;
      }),
    );
  };
  
  ProduitDisplay();*/
  
 