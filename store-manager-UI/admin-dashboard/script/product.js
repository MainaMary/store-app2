window.addEventListener('scroll', ()=>{
    const navbar= document.querySelector('.navbar');
   console.log('scroll')
    if(window.scrollY > 0){
    navbar.classList.add('sticky')
   }else{
       navbar.classList.remove('sticky')
   }
    
})

const addProductBtn= document.querySelector('.add-product-btn');
const productModal= document.getElementById('product__modal');
const backdrop= document.getElementById('backdrop');
const closeModalBtn = document.getElementById('close__modal');


const toggleModal =()=>{
productModal.classList.toggle('open')
showbackdrop();
}
addProductBtn.addEventListener('click', toggleModal);
const removeModal = () =>{
backdrop.classList.remove('visible');
productModal.classList.remove('open');
}

backdrop.addEventListener('click', removeModal)
closeModalBtn.addEventListener('click', removeModal )

const showbackdrop = () =>{
backdrop.classList.toggle('visible')
}

//Modal
const productForm= document.querySelector('.product__form');

const userInputs= productForm.querySelectorAll('input');
const productsArr= [];

//clear user input
const clearInput =()=>{
    for(userInput of userInputs){
        userInput.value=" "
        
    }
}

//Render userInput
const renderInput =(image,name, status, category, info)=>{
const productsCont= document.querySelector('.products__list');
const divElement= document.createElement('div');
divElement.className='product__card'
divElement.innerHTML =`
<div class="image__wrapper">
<img src=${image} class="product__img"/>
</div>
<div class="content__wrapper">
<div>
    <p>${name}</p>
    <p>Category: <span><small>${category}</small></span></p>
    <p>Status: <span><small style="color: rgb(26, 24, 24)">${status}</small></span></p>
        <p>${info}</p>
</div>
<div class="product__btns">
    <button class="add__cart">Add to Cart</button>
    <button class="edit__product">Edit</button>
    <button class="delete-product">Delete</button>
</div>
</div>

`
productsCont.appendChild(divElement);

}
const submitInfo = (e)=>{
    e.preventDefault();
    const productUrl= userInputs[0].value;
    console.log(productUrl);
    const productName= userInputs[1].value;
    console.log(productName)
    const productStatus= document.querySelector('.select__status').value;
    console.log(productStatus)
    const productCategory= userInputs[2].value;
    console.log(productCategory);
    
    const productInfo=document.querySelector('textarea').value;
    console.log(productStatus, productInfo);

    if(productUrl.trim()== "" || productStatus.trim() == ""
    || productCategory.trim() == "" || productInfo.trim() == ""){
        alert('Please add inputs')
        return false
    }else{
        const productList ={
            image:productUrl,
            name: productName,
            status: productStatus,
            category: productCategory,
            info: productInfo
        }
        productsArr.push(productList);
        console.log(productsArr)
        removeModal();
        clearInput();
        renderInput(
            productList.image, productList.name, productList.status, 
            productList.category, productList.info)
    }
}

productForm.addEventListener('submit', submitInfo);

