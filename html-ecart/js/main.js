var productList = [
    {
        name: "bike shoe",
        price: 1500,
        topProduct: true,
        category : "Shoes",
        imgUrl : "./images/shoe.jpg"
    },
     {
        name: "Hoodie",
        price: 400,
        topProduct: true,
        category : "clothes",
        imgUrl : "./images/hoddies-500x500.jpg"
    },
    {
        name: "back Bag Lenovo",
        price: 1700,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
     {
        name: "slipper",
        price: 300,
        category: "Shoes",
        imgUrl : "./images/slipper.jpg"
    },
     {
        name: "wonderboom",
        price: 700,
        category: "Speakers",
        imgUrl : "./images/speaker.jpg"
    }, 
    {
        name: "nike shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/shoe.jpg"
    },
     {
        name: "Hoodie Limited Edition",
        price: 500,
        category : "clothes",
        imgUrl : "./images/hoddies-500x500.jpg"
    },
    {
        name: "back Bag",
        price: 700,
        topProduct: true,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
     {
        name: "slipper",
        price: 300,
        topProduct: true,
        category: "Shoes",
        imgUrl : "./images/slipper.jpg"
    },
     {
        name: "wonderboom Type 2",
        price: 900,
        category: "Speakers",
        imgUrl : "./images/speaker.jpg"
    },
      {
        name: "shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/shoe.4.jpg"
    },
     {
        name: "Nike shoe",
        price: 3900,
        category : "Shoes",
        imgUrl : "./images/shoe.5.jpg"
    },
     {
        name: "shoe",
        price: 900,
        category : "Shoes",
        imgUrl : "./images/shoe.4.jpg"
    },
     {
        name: "shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/slipper2.jpeg"
    },
     {
        name: "shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/shoe.4.jpg"
    }
];

var category = ['All category' , 'Shoes', 'Speakers', 'clothes','bag'];

var pageNo = 1;

var selectedCategory = 'All category';

var pageSize = 9;


 this.getCategory();

function getCategory(){     
     var categoryItem = '';
    category.forEach((obj, index)=> {
        categoryItem += `<p class=${selectedCategory == obj ? "selected-category" : "pointer" } id='${obj}' onclick="categoryFilter('${obj}')">${obj}</p>`
    })
        document.getElementById('category-list').innerHTML = categoryItem
    }


    var dropdownlist = '';
    category.forEach((obj, index)=> {
        if(obj !==  'All category'){
             dropdownlist += `<option>${obj}</option>`
        }
       
    })
document.getElementById('categoryListSelect').innerHTML = dropdownlist  

document.getElementById("sortingRange").value = "default";
document.getElementById('product-total').innerHTML = productList.length;
document.getElementById("input-product-file").value = null;
document.getElementById("input-product-name").value  = null;
document.getElementById("input-product-price").value = null;

// product listing in onload 
getProductList(productList);


// document.querySelector("addProductForm").addEventListener("click", function(event) {
//          event.preventDefault();
// }, false);

// to add the product's item
function addProduct(){
  
   let name = document.getElementById("input-product-name").value;
    let price= document.getElementById("input-product-price").value
    let inputFile = document.getElementById("input-product-file").files[0];
    let isTopProduct = document.getElementById('topProduct').checked 

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
            topProduct : isTopProduct,
            imgUrl : reader.result
        })
        getProductList(productList);    
    };
    reader.readAsDataURL(file);
    document.getElementById("input-product-name").value = null
    document.getElementById("input-product-price").value = null
    document.getElementById("input-product-file").value = null ;
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById('fileName').innerHTML = "";
    document.getElementById("cancelBtn").click();
    document.getElementById('topProduct').checked = false;
}

function getFileName(){
    let file = document.getElementById('input-product-file')
    document.getElementById('fileName').innerHTML = file.files[0].name
     document.getElementById('error-msg-file').innerHTML = ""
}

function sortProduct(){
    var range = document.getElementById('sortingRange').value;
    var sortedProduct = [];

    let products =  JSON.parse(JSON.stringify(productList)) ;

    if(selectedCategory !== "All category" && selectedCategory){
        products =  products.filter(product => product.category === selectedCategory)
    }
   
    if(range == 'low'){
        sortedProduct = products.sort(function(a,b){
            return a.price - b.price;
            }
        );
    }
    if(range == 'high'){
        sortedProduct = products.sort(function(a,b){
            return b.price - a.price;
            }
        );
    }
    if(range == "default"){
        sortedProduct = productList
    }

    getProductList(sortedProduct, true);
}

function changePage(number){
    pageNo = number;
    let selectedProducts = productList
    if(selectedCategory !== "All category" && selectedCategory){
        selectedProducts =  selectedProducts.filter(product => product.category === selectedCategory)
    }
    getProductList(selectedProducts)
}

function categoryFilter(val){
    selectedCategory = val;
    document.getElementById(val).className="selected-category"
    changePage(1);
    getCategory();
}


function getProductList(products, disableTopProductSort){
    // Show Product List 
    var productItem = '';
    var topProducts = '';
    let totalProduct = Math.ceil(products.length/pageSize);
    
    
    var paginationList = ``

    var i;
    for (i = 0; i < totalProduct; i++) {
        paginationList += `<li class="page-item"><button class="page-link" onclick="changePage(${i+1})">${i+1}</button></li>`;
    } 

    document.getElementById('pagination').innerHTML = paginationList;
    
    let endPageNumber = pageNo * pageSize;
    let startPageNumber = endPageNumber - pageSize ;
    var slicedproducts = products.slice(startPageNumber, endPageNumber);
    slicedproducts.forEach((obj, index)=> {

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

     productList.forEach((obj, index)=> {

        if(obj.topProduct){
              topProducts += ` <section class="row py-2">
                            <div class="col-4">
                                <img src=${obj.imgUrl}>
                            </div>
                            <div class="col-8">
                                <h6>${obj.name}</h6>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </section>`

        }
    })


   document.getElementById('product-item').innerHTML = productItem;

   if(!disableTopProductSort){
        document.getElementById('top-products').innerHTML = topProducts; 
   }
}

function uploadBtn(){
    document.getElementById("input-product-file").click()
}



