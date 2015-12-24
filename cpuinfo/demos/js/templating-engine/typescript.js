/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
//Classes
var Movie = (function () {
    function Movie(inName, inYear, inGenre, inRating, inLanguage, inSubs) {
        this.name = inName;
        this.year = inYear;
        this.genre = inGenre;
        this.rating = inRating;
        this.languages = inLanguage;
        this.subtitles = inSubs;
    }
    return Movie;
})();

var Actor = (function () {
    function Actor(inFirstName, inLastName, inNationality, inMoviesArray) {
        this.firstName = inFirstName;
        this.lastName = inLastName;
        this.nationality = inNationality;
        this.movies = inMoviesArray;
    }
    return Actor;
})();

//Data setup
var moviesDWashington = [];
moviesDWashington.push(new Movie("American Gangster", 2007, "Biography, Crime, Drama", 7.9, "English, German", "Japanese, English"));
moviesDWashington.push(new Movie("Man on Fire", 2004, "Crime, Drama, Thriller", 7.7, "English, Japanese", "English, Indian"));
moviesDWashington.push(new Movie("Out of Time", 2003, "Crime, Drama, Thriller", 6.5, "English", "English, Japanese"));
moviesDWashington.push(new Movie("Training Day", 2001, "Crime, Drama, Thriller", 7.6, "English", "English, German"));

var moviesAJolie = [];
moviesAJolie.push(new Movie("In the Land of Blood and Honey", 2011, "Drama, Romance, War", 3.2, "English", "English, French"));
moviesAJolie.push(new Movie("Kung Fu Panda 2", 2011, "Animation, Action, Adventure", 7.4, "English, Japanese", "Spanish, French"));
moviesAJolie.push(new Movie("The Tourist", 2010, "Action, Mistery, Romance", 5.9, "English", "Spanish, Swedish"));

var moviesPCruz = [];
moviesPCruz.push(new Movie("Sahara", 2005, "Action, Adventure, Comedy", 5.9, "English, Spanish", "Japanese, French"));
moviesPCruz.push(new Movie("Vanilla Sky", 2001, "Mystery, Romance, Sci-Fi", 5.9, "Spanish", "English, Japanese"));

var moviesGClooney = [];
moviesGClooney.push(new Movie("Ocean's Thirteen", 2007, "Crime, Thriller", 6.9, "English", "Spanish, French"));
moviesGClooney.push(new Movie("Syriana", 2005, "Drama, Thriller", 7.0, "English", "French, Japanese"));
moviesGClooney.push(new Movie("Good Night, and Good Luck", 2005, "Drama, History", 7.6, "English, German", "German, Japanese"));

var moviesJRoberts = [];
moviesJRoberts.push(new Movie("Eat Pray Love", 2010, "Drama, Romance", 5.3, "English, German", "Spanish, French"));
moviesJRoberts.push(new Movie("Notting Hill", 1999, "Comedy, Romance", 6.9, "English", "English, Indian"));

var actors = [];
actors.push(new Actor("Denzel", "Washington", { key: "USA", value: "USA" }, moviesDWashington));
actors.push(new Actor("Angelina", "Jolie", { key: "USA", value: "USA" }, moviesAJolie));
actors.push(new Actor("Penelope", "Cruz", { key: "Spain", value: "Spain" }, moviesPCruz));
actors.push(new Actor("George", "Clooney", { key: "USA", value: "USA" }, moviesGClooney));
actors.push(new Actor("Julia", "Roberts", { key: "USA", value: "USA" }, moviesJRoberts));

$(function () {
    var i = 0, currentValue, limit, imagesRoot = "http://www.igniteui.com/images/samples/templating-engine/multiConditionalColTemplate";

    $("#resultGrid").igGrid({
        dataSource: actors,
        width: "100%",
        autoGenarateColumns: false,
        columns: [
            { headerText: "$$(FirstName)", key: "firstName", width: 100 },
            { headerText: "$$(LastName)", key: "lastName", width: 200 },
            { headerText: "$$(Nationality)", key: "nationality", width: 100, template: "<img width='20' height='15' src='" + imagesRoot + "/${nationality.key}.gif' /> ${nationality.value} " },
            { headerText: "$$(Movies)", key: "movies", width: 500, template: $("#colTmpl").html() }
        ],
        rendered: function () {
            initializeInnerControls();
        },
        features: [
            {
                name: "Paging",
                type: "local",
                pageSize: 3,
                pageSizeChanged: function () {
                    initializeInnerControls();
                },
                pageIndexChanged: function () {
                    initializeInnerControls();
                }
            }
        ]
    });

    function initializeInnerControls() {
        $(".tree").igTree({ hotTracking: false });
        limit = $('.rating').length;
        for (i = 0; i < limit; i++) {
            currentValue = parseFloat($($('.rating')[i]).html());
            $($('.rating')[i]).igRating({
                voteCount: 10,
                value: currentValue,
                valueAsPercent: false,
                precision: "exact"
            });
        }
    }
});
//# sourceMappingURL=typescript.js.map
