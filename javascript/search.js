const searchTerm = new URLSearchParams(window.location.search).get('search');
const searchResultsHeading = document.getElementById('search-results-heading');

//change heading to include search term
if (searchResultsHeading) {
  searchResultsHeading.textContent = `Search Results for "${searchTerm}"`;
}

// Check if a search term is present in the URL
if (searchTerm) {
  const searchTermLower = searchTerm.toLowerCase();

  const productList = document.getElementById('productList');
  const blogpostList = document.getElementById('blogPostList');
  const noResultsProduct = document.getElementById('noResultsP');
  const noResultsBlog = document.getElementById('noResultsB');

  // iterate through and filter list items based on search term
  function filterList(list, searchTermLower) {
    const listItems = list.querySelectorAll('li');

    let hasResults = false;
    listItems.forEach(item => {
      const textContent = item.textContent.toLowerCase();
      item.style.display = textContent.includes(searchTermLower) ? 'block' : 'none';
      hasResults = hasResults || textContent.includes(searchTermLower);
    });

    return hasResults;
  }


  filterList(productList, searchTermLower);
  filterList(blogPostList, searchTermLower);

  const hasProductResults = filterList(productList, searchTermLower);
  const hasBlogpostResults = filterList(blogpostList, searchTermLower);

  //show/hide no results message based on search results
  if (!hasProductResults) {
    noResultsProduct.style.display = 'block';
  } else {
    noResultsProduct.style.display = 'none';
  }

  if (!hasBlogpostResults) {
      noResultsBlog.style.display = 'block';
    } else {
      noResultsBlog.style.display = 'none';
    }

}