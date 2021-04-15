var productList = [
    {
        name: "back Bag",
        price: 700,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
    {
        name: "Hoodie",
        price: 400,
        category : "shirts",
        imgUrl : "./images/hoddies-500x500.jpg"
    }
];

document.getElementById('product-total').innerHTML = productList.length;

// product listing in onload 
getProductList();


// to add the product's item
function addProduct(){
    let name = document.getElementById("input-product-name").value
    let price= document.getElementById("input-product-price").value
    let image= document.getElementById("input-product-image").value
    

    productList.push({
        name: name,
        price: price,
        category: "dress",
        imgUrl : image
    })
    getProductList();
    
   

}

function getProductList(){
     var productItem = ''
    productList.forEach((obj, index)=> {
    
    productItem += `<div class="col-12 col-sm-4">
                <div class="card mb-3">
                <img src=${obj.imgUrl} alt="Card image cap">
                <div class="card-body text-center">
                    <h5>${obj.name}</h5>
                    <p>${obj.price}</p>
                </div>
                <br>
            </div>
        </div>`
    })
document.getElementById('product-item').innerHTML = productItem
}


