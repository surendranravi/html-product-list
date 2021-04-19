var productList = [
    {
        name: "nike shoe",
        price: 1500,
        category : "shoe",
        imgUrl : "./images/shoe.jpg"
    },
     {
        name: "Hoodie",
        price: 400,
        category : "shirts",
        imgUrl : "./images/hoddies-500x500.jpg"
    },
    {
        name: "back Bag",
        price: 700,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
     {
        name: "slipper",
        price: 300,
        category: "shoe",
        imgUrl : "./images/slipper.jpg"
    },
     {
        name: "wonderboom",
        price: 700,
        category: "speaker",
        imgUrl : "./images/speaker.jpg"
    },
    


];

document.getElementById("sortingRange").value = "";
document.getElementById('product-total').innerHTML = productList.length;
document.getElementById("input-product-file").value = null;
document.getElementById("input-product-name").value  = null;
document.getElementById("input-product-price").value = null;


// product listing in onload 
getProductList();


// document.querySelector("addProductForm").addEventListener("click", function(event) {
//          event.preventDefault();
// }, false);

// to add the product's item
function addProduct(){
  
   let name = document.getElementById("input-product-name").value;
    let price= document.getElementById("input-product-price").value
    let inputFile = document.getElementById("input-product-file").files[0];

    if(!name){
        document.getElementById("error-msg-title").innerHTML = "Please Enter the Title";
        return
    }
     document.getElementById("error-msg-title").innerHTML = "";


    if(!price){
        document.getElementById("error-msg-price").innerHTML = "Please Enter the Price";
        return
    }
    document.getElementById("error-msg-price").innerHTML = "";

    if(!inputFile){
        document.getElementById("error-msg-file").innerHTML = "Please Upload the file";
        return
    }
    document.getElementById("error-msg-file").innerHTML = "";

    

    const file = inputFile;
    const reader = new FileReader();

    reader.onloadend = () => {
        productList.push({
            name: name,
            price: price,
            category: "dress",
            imgUrl : reader.result
        })
        getProductList();
        
    };

    reader.readAsDataURL(file);

    document.getElementById("input-product-name").value = null
    document.getElementById("input-product-price").value = null
    document.getElementById("input-product-file").value = null ;
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById('fileName').innerHTML = "";
    document.getElementById("cancelBtn").click()
    
}

function getFileName(){
    let file = document.getElementById('input-product-file')
    document.getElementById('fileName').innerHTML = file.files[0].name
     document.getElementById('error-msg-file').innerHTML = ""
}

function sortProduct(){
    var range = document.getElementById('sortingRange').value;
    if(range == 'low'){
        productList = productList.sort(function(a,b){
            return a.price - b.price;
            }
        );
    }
    if(range == 'high'){
        productList = productList.sort(function(a,b){
            return b.price - a.price;
            }
        );
    }
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

 

function uploadBtn(){
    document.getElementById("input-product-file").click()
}


