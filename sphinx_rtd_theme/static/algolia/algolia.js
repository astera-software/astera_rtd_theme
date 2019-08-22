docsearch({
  apiKey: '86d846db5ca8a867c50728ae3988a564',
  indexName: 'astera',
  // Replace inputSelector with a CSS selector
  // matching your search input
  inputSelector: '#rtd-search-form input[type=text]',
  // Set debug to true if you want to inspect the dropdown
  debug: false,
	algoliaOptions: { 'facetFilters': ["lang:en"], 'hitsPerPage': 8 }, 
});