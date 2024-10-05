/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  feather.replace();

  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  let input = document.querySelector(".input");
  let btn = document.querySelector(".btn");
  let parent = document.querySelector(".parent");
  
  btn.addEventListener("click", () => {
      parent.classList.toggle("active");
      input.focus();
  });
// get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// add event listener to the button
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);
});

// add event listener to the input (if you want to trigger the search on Enter keypress)
searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    // simulate a button click to trigger the search
    searchButton.click();
  }
});