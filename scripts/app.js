// Event handler for filter buttons
const filterButtons = document.getElementsByClassName('btn-filter');
 
for (const button of filterButtons) {
  button.addEventListener('click', function(event) {
    const {catagory} = event.target.dataset;
    
    const products = document.querySelectorAll('.product')
    for (const product of products) {
      if (!product.classList.contains(catagory)) {
        product.style.display = 'none';
      } else {
        product.style.display = 'block';
      }
    };
  });
};

// Event handler for search box
document.getElementById('search-filter-input').addEventListener('keyup', function (event) {
  const key = event.target.value;
  const products = document.querySelectorAll('.product');

  for (const product of products) {
    const item = product.dataset.item.toLowerCase();
    console.log(item);
    if (!item.includes(key)) {
      product.style.display = 'none';
    } else {
      product.style.display = 'block';
    }
 };
});




