var productList = [
    {
        name: "Bag",
        price: 700,
        imgUrl : "./images/8853128773662.webp"
    },
    {
        name: "Hoodie",
        price: 400,
        imgUrl : "./images/hoddies-500x500.jpg"
    }
];

document.getElementById('product-total').innerHTML = productList.length;

// product listing in onload 
getProductList();


// to add the product's item
function addProduct(){
    productList.push({
        name: "Wonderboom",
        price: 5500,
        imgUrl : "./images/speaker.jpg"
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


