var productList = [
    {
        productId : "p01",
        name: "bike shoe",
        price: 1500,
        topProduct: true,
        category : "Shoes",
        imgUrl : "./images/shoe.jpg"
    },
     {
         productId : "p02",
        name: "Hoodie",
        price: 400,
        topProduct: true,
        category : "clothes",
        imgUrl : "./images/hoddies-500x500.jpg"
    },
    {
        productId : "p03",
        name: "back Bag Lenovo",
        price: 1700,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
     {
         productId : "p04",
        name: "slipper",
        price: 300,
        category: "Shoes",
        imgUrl : "./images/slipper.jpg"
    },
     {
         productId : "p05",
        name: "wonderboom",
        price: 700,
        category: "Speakers",
        imgUrl : "./images/speaker.jpg"
    }, 
    {
        productId : "p06",
        name: "nike shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/shoe.jpg"
    },
     {
         productId : "p07",
        name: "Hoodie Limited Edition",
        price: 500,
        category : "clothes",
        imgUrl : "./images/hoddies-500x500.jpg"
    },
    {
        productId : "p08",
        name: "back Bag",
        price: 700,
        topProduct: true,
        category: "bag",
        imgUrl : "./images/8853128773662.webp"
    },
     {
         productId : "p09",
        name: "slipper",
        price: 300,
        topProduct: true,
        category: "Shoes",
        imgUrl : "./images/slipper.jpg"
    },
     {
         productId : "p10",
        name: "wonderboom Type 2",
        price: 900,
        category: "Speakers",
        imgUrl : "./images/speaker.jpg"
    },
      {
          productId : "p11",
        name: "shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/shoe.4.jpg"
    },
     {
         productId : "p12",
        name: "Nike shoe",
        price: 3900,
        category : "Shoes",
        imgUrl : "./images/shoe.5.jpg"
    },
     {
         productId : "p13",
        name: "shoe",
        price: 900,
        category : "Shoes",
        imgUrl : "./images/shoe.4.jpg"
    },
     {
         productId : "p14",
        name: "shoe",
        price: 1500,
        category : "Shoes",
        imgUrl : "./images/slipper2.jpeg"
    },
     {
         productId : "p15",
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

var editProductIndex = null;

var priceSliderValue = 0;   

document.getElementById('priceRange').value = 0;

var updatedProduct = [];

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
document.getElementById('categoryListSelectEdit').innerHTML = dropdownlist

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
            productId : 'pn' + productList.length,
            name: name,
            price: price,
            category: document.getElementById('categoryListSelect').value,
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

function editModelView(id){
    let product = productList.findIndex((obj) => obj.productId === id );
    editProductIndex = product;
    product = productList[product];
    document.getElementById("edit-product-name").value = product.name
    document.getElementById("edit-product-price").value = product.price
    document.getElementById('categoryListSelectEdit').value = product.category
    document.getElementById('editTopProduct').checked = product.topProduct
    document.getElementById('editModelViewBtn').click();
}

function editProduct(){
  
    let name = document.getElementById("edit-product-name").value;
    let price= document.getElementById("edit-product-price").value
    let inputFile = document.getElementById("edit-product-file").files[0];
    //let isTopProduct = document.getElementById('editTopProduct').checked 

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

    // if(!inputFile){
    //     document.getElementById("error-msg-file").innerHTML = "Please Upload the file";
    //     return
    // }


    document.getElementById("error-msg-file").innerHTML = "";


    let editObj = productList[editProductIndex]

    editObj['name'] = name;
    editObj['price'] = price;
    editObj['topProduct'] =  document.getElementById('editTopProduct').checked
    editObj['category'] = document.getElementById('categoryListSelectEdit').value


    if(!inputFile){
        productList[editProductIndex] = editObj

        getProductList(productList);

    }else{

        const file = inputFile;
        const reader = new FileReader();

        reader.onloadend = () => {

            editObj['imgUrl'] =  reader.result;
            productList[editProductIndex] = editObj
            
            getProductList(productList);    
        };
        reader.readAsDataURL(file);

    }



    document.getElementById("edit-product-name").value = null
    document.getElementById("edit-product-price").value = null
    document.getElementById("edit-product-file").value = null ;
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById('editFileName').innerHTML = "";
    document.getElementById("editCancelBtn").click();
    document.getElementById('topProduct').checked = false;
    categoryFilter('All category')
}


function getFileName(){
    let file = document.getElementById('input-product-file')
    document.getElementById('fileName').innerHTML = file.files[0].name
    document.getElementById('error-msg-file').innerHTML = ""
}

function getEditFileName(){
    let file = document.getElementById('edit-product-file')
    document.getElementById('editFileName').innerHTML = file.files[0].name
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
    document.getElementById('priceRange').value = 0;

}


function getProductList(products, disableTopProductSort, disableUpdateProduct){
    // Show Product List 
    var productItem = '';
    var topProducts = '';
    let totalProduct = Math.ceil(products.length/pageSize);
    
    
    var paginationList = ``

    var i;
    for (i = 0; i < totalProduct; i++) {
        if(pageNo === i+1){
            paginationList += `<li class="page-item"><button class="page-link" style="border:1px solid #fa475a;  color:#fa475a;" onclick="changePage(${i+1})">${i+1}</button></li>`;
  
        }else{
            paginationList += `<li class="page-item"><button class="page-link" style="border:1px solid #ccc; color:#ccc;" onclick="changePage(${i+1})">${i+1}</button></li>`;
  
        }
   
    } 

    document.getElementById('pagination').innerHTML = paginationList;

    if(!disableUpdateProduct){
        updatedProduct = JSON.parse(JSON.stringify(products))

        var maxPrice =  Math.max(...products.map((obj)=> obj.price));

        document.getElementById('priceRange').max = maxPrice

        document.getElementById("priceMax").innerHTML =  maxPrice
       
    }
  
    
    let endPageNumber = pageNo * pageSize;
    let startPageNumber = endPageNumber - pageSize ;
    var slicedproducts = products.slice(startPageNumber, endPageNumber);
    slicedproducts.forEach((obj, index)=> {

    productItem += `<div class="col-12 col-sm-4">
                <div class="card mb-3 box-shadow" onclick="editModelView('${obj.productId}');">
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
                                <span style="font-size:13px;color:#ccc;">$${obj.price}</span>
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


function changePrice(){
    var priceRangeValue = document.getElementById('priceRange').value;
   
    document.getElementById("priceMax").innerHTML =  priceRangeValue
      

    var filteredProduct = updatedProduct.filter((obj)=>  {
        return  priceRangeValue > obj.price 
    } )

    getProductList(filteredProduct, null, true)
}

