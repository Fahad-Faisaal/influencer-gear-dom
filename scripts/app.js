const filterButtons = document.getElementsByClassName('btn-filter');
 
for (const button of filterButtons) {
  button.addEventListener('click', function(event) {
    const {catagory} = event.target.dataset;
    console.log(catagory);
    const products = document.querySelectorAll('.product')
    for (const product of products) {
      if (!product.classList.contains(catagory)) {
        product.style.display = 'none';
      } else {
        product.style.display = 'block';
      }
    }
  })
}