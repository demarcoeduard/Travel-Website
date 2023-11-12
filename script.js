// SEARCH LIST

const searchInput = document.getElementById('searchInput');
const list = document.getElementById('search');

searchInput.addEventListener("input", function(){
   const filterText = searchInput.value.toLowerCase();
   const products = list.getElementsByTagName('a');
    
   for (const product of products){
      const productName = product.getAttribute('data-name').toLowerCase(); 

      if(!productName.includes(filterText)){
         product.classList.add("filtered");
      }else{
         product.classList.remove("filtered");
      }
   }
})

searchInput.addEventListener('focus', () => {
   list.classList.remove('invisible');
})

searchInput.addEventListener('focusout', () => {
   setTimeout(() => {
      list.classList.add('invisible');
   }, 100)
})

// CONTACT US

const inputContact = document.getElementById('inputContact');
const textareaContact = document.getElementById('textareaContact');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {
   event.preventDefault();
   inputContact.value = '';
   textareaContact.value = '';
})

// HAMBURGET MENU

const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgerMenu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle("fa-x");
   hamburgerMenu.classList.toggle('invisible')
})

// HAMBURGER MENU SEARCH

const searchInput2 = document.getElementById('searchInput2');
const list2 = document.getElementById('search2');

searchInput2.addEventListener("input", function(){
   const filterText = searchInput2.value.toLowerCase();
   const products = list2.getElementsByTagName('a');
    
   for (const product of products){
      const productName = product.getAttribute('data-name').toLowerCase(); 

      if(!productName.includes(filterText)){
         product.classList.add("filtered");
      }else{
         product.classList.remove("filtered");
      }
   }
})

searchInput2.addEventListener('focus', () => {
   list2.classList.remove('invisible');
})

searchInput2.addEventListener('focusout', () => {
   setTimeout(() => {
      list2.classList.add('invisible');
   }, 100)
})