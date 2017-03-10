var searchText;
var dataLive;

$(document).ready(function () {
    $("#text-search").focus(function (e) {
        $("#search").css("visibility", "visible");
        $("#search").css("opacity", "1");
    })
    $("#text-search").blur(function (e) {
        $("#search").css("visibility", "hidden");
        $("#search").css("opacity", "0");
    })
    $("#random").click(function () {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    $("#search").click(function () {
        onSearch();
    });
    $(document).on("keypress", "#text-search", function(e) {
     if (e.which == 13) {
         //do some stuff
         e.preventDefault();
        onSearch();
     }
});


});


function onSearch() {
    searchText = $("#text-search").val();
    getResults(searchText);

}

function getResults(searchTerm) {
    console.log("ajax");
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&requestid=idifyable%40gmail.com&origin=*&errorformat=html&search=" + searchTerm + "&callback=",
        async: true,
        dataType: "jsonp",
        success: function(data) {
            dataLive = data;
            showResults(dataLive)
            console.log(data);
        }
    });
}

function showResults(data) {
        var htmlString;
        $("#results").html("");
    for(i = 0; i < 10; i++){

        var title = data[1][i];
        var summary = data[2][i];
        var link = data[3][i];
        htmlString = "<div class='results'><a href=" + link + "><h2>" + title + "</a></h2><br><p>" + summary + "</p><br></div>";
        $("#results").append(htmlString);
        console.log(htmlString);

    }
}