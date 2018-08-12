var WikipediaSearch = (function()
{
  var visible = {};

  visible.initialize = function()
  {
    // Add form event listener
    addFormEventListener();
  };

  var addFormEventListener = function()
  {
    var searchForm = document.xSEARCH;

    searchForm.addEventListener('submit', function(e)
    {
      e.preventDefault();
      visible.submitSearch();
    }, false);

    return true;
  };

  visible.submitSearch = function()
  {
    var searchTerm = document.querySelector('input[name="xSEARCH_TERM"]').value;
    retrieveResults(searchTerm);
  };

  var retrieveResults = function(searchTerm)
  {
    var searchTerm = searchTerm;
    var requestEndpointURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&requestid=idifyable%40gmail.com&origin=*&errorformat=html&search=' + searchTerm + '&callback=WikipediaSearch.renderResponse';

    var script = document.createElement('script');
    script.src = requestEndpointURL;

    document.body.appendChild(script);
  };

  visible.renderResponse = function(response)
  {
    console.log(response);
    var htmlString;
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for(i = 0; i < 10; i++)
    {
      var title = response[1][i];
      var summary = response[2][i];
      var link = response[3][i];

      var resultElement = document.createElement('li');

      var linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.target = '_blank';
      linkElement.rel = 'noopener noreferrer';

      var titleElement = document.createElement('h2');
      titleElement.innerText = title;

      linkElement.appendChild(titleElement);

      var summaryElement = document.createElement('p');
      summaryElement.innerText = summary;

      resultElement.appendChild(linkElement);
      resultElement.appendChild(summaryElement);

      resultsDiv.appendChild(resultElement);
    }

    return true;
  }

  return visible;
})();