var searchText;
var dataSaved = /**/([
    "hitler",
    [
        "Hitler",
        "Hitler family",
        "Hitler Diaries",
        "Hitler Youth",
        "Hitler's Willing Executioners",
        "Hitler's Pope",
        "Hitler's Table Talk",
        "Hitler: The Rise of Evil",
        "Hitler's War",
        "Hitler and Stefanie Rabatsch"
    ],
    [
        "From a surname: This is a redirect from a person's surname. It is used because Wikipedia has only one biographical article of a person by this surname, or because one individual is ubiquitously known by this surname (other persons who share this name might be listed at a primary topic disambiguation page).",
        "The Hitler family comprises the relatives and ancestors of Adolf Hitler (20 April 1889 \u2013 30 April 1945), an Austrian-born German politician and the leader of the National Socialist German Workers' Party (German: Nationalsozialistische Deutsche Arbeiterpartei, abbreviated NSDAP), commonly known as the Nazi Party.",
        "The Hitler Diaries (German: Hitler-Tageb\u00fccher) were a series of sixty volumes of journals purportedly by Adolf Hitler, but forged by Konrad Kujau between 1981 and 1983. The diaries were purchased in 1983 for 9.3 million Deutsche Marks (\u20ac4.7 million) by the West German news magazine Stern, which sold serialisation rights to several news organisations.",
        "The Hitler Youth (German:  Hitlerjugend , often abbreviated as HJ in German) was the youth organisation of the Nazi Party in Germany.",
        "Hitler's Willing Executioners: Ordinary Germans and the Holocaust is a 1996 book by American writer Daniel Goldhagen, in which he argues that the vast majority of ordinary Germans were \"willing executioners\" in the Holocaust because of a unique and virulent \"eliminationist antisemitism\" in the German political culture, which had developed in the preceding centuries.",
        "Hitler's Pope is a book published in 1999 by the British journalist and author John Cornwell that examines the actions of Eugenio Pacelli, who became Pope Pius XII, before and during the Nazi era, and explores the charge that he assisted in the legitimization of Adolf Hitler's Nazi regime in Germany, through the pursuit of a Reichskonkordat in 1933. The book is critical of Pius' conduct during the Second World War, arguing that he did not do enough, or speak out enough, against the Holocaust.",
        "Hitler's Table Talk (German: Tischgespr\u00e4che im F\u00fchrerhauptquartier) is the title given to a series of World War II monologues delivered by Adolf Hitler, which were transcribed from 1941 to 1944. Hitler's remarks were recorded by Heinrich Heim, Henry Picker, and Martin Bormann, and later published by different editors, under different titles, in three different languages.",
        "Hitler: The Rise of Evil is a Canadian TV miniseries in two parts, directed by Christian Duguay and produced by Alliance Atlantis.",
        "Hitler's War is a biographical book by David Irving. It describes the Second World War from the point of view of Adolf Hitler.",
        "Stefanie Rabatsch (n\u00e9e Isak; born 28 December 1887) was an Austrian woman. She was alleged by August Kubizek to have been an unrequited love of Adolf Hitler, the future leader of the Nazi Party and dictator of Nazi Germany, when he was a teenager."
    ],
    [
        "https://en.wikipedia.org/wiki/Hitler",
        "https://en.wikipedia.org/wiki/Hitler_family",
        "https://en.wikipedia.org/wiki/Hitler_Diaries",
        "https://en.wikipedia.org/wiki/Hitler_Youth",
        "https://en.wikipedia.org/wiki/Hitler%27s_Willing_Executioners",
        "https://en.wikipedia.org/wiki/Hitler%27s_Pope",
        "https://en.wikipedia.org/wiki/Hitler%27s_Table_Talk",
        "https://en.wikipedia.org/wiki/Hitler:_The_Rise_of_Evil",
        "https://en.wikipedia.org/wiki/Hitler%27s_War",
        "https://en.wikipedia.org/wiki/Hitler_and_Stefanie_Rabatsch"
    ]
])
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
        htmlString = "<div class='results'>" + "<h2>" + title + "</h2><br><p>" + summary + "</p><br></div>";
        $("#results").append(htmlString);
        console.log(htmlString);

    }
}