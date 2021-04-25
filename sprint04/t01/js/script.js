const movie1Descr = `Two patients (Martin Brest and Rudi Wurlitzer) meet in a hospital, just after learning that both have an untreatable disease. They start talking about their death that is to come very soon. When they find a bottle of tequila, Martin finds out that Rudi has never seen the sea. Martin tells Rudi that all they talk about in Heaven is how beautiful the sea is. Drunk and still in their pajamas, they steal a baby blue Mercedes-Benz W113 classic roadster and go for their last mission - to see the sea. The car belongs to a crime boss. They rob several small shops, only to find that there is a million deutsche marks in cash in the trunk of their car.`;

const movie2Desc = `Joe Gardner, a middle school music teacher from New York City, dreams of a career in jazz, even though his mother Libba objects to it, fearing for his financial security. One day, Joe learns of an opening in the band of jazz legend Dorothea Williams and auditions for it. Impressed with Joe's piano playing, Dorothea offers him a chance to perform later that night. As Joe happily heads off to prepare for the show, he falls down a manhole.`;

const movie3Desc = `Wade Wilson is a dishonorably discharged special forces operative working as a mercenary when he meets Vanessa, a prostitute. They become romantically involved, and a year later she accepts his marriage proposal. Wilson is diagnosed with terminal cancer, and leaves Vanessa without warning so she will not have to watch him die. A mysterious recruiter approaches Wilson, offering an experimental cure for his cancer. He is taken to Ajax and Angel Dust, who inject him with a serum designed to awaken latent mutant genes. They subject Wilson to days of torture to induce stress and trigger any mutation he may have, without success. When Wilson discovers Ajax's real name is Francis and mocks him for it, Ajax leaves Wilson in a hyperbaric chamber that periodically takes him to the verge of asphyxiation over a weekend. This finally activates a superhuman healing ability that counteracts the cancer but leaves Wilson severely disfigured with burn-like scars over his entire body. He escapes from the chamber and attacks Ajax but relents when told that his disfigurement can be cured. Ajax subdues Wilson and leaves him for dead in the now-burning laboratory.`;

const movie4Desc = `Charlie Bucket and his family live in poverty near the Wonka Factory. The company's owner, Willy Wonka, has long since closed his factory due to problems concerning industrial espionage committed by his jealous rivals, which led him to fire all of his employees, including Charlie's Grandpa Joe. One day, Wonka restarts his factory and announces a contest in which Golden Tickets have been placed in five random Wonka Bars worldwide, and the winners will receive a full tour of the factory as well as a lifetime supply of chocolate, while one will receive an additional prize at the end of the tour. Wonka's sales subsequently skyrocket, and the first four tickets are found by the gluttonous Augustus Gloop, the spoiled Veruca Salt, the arrogant Violet Beauregarde, and the ill-tempered Mike Teavee. Charlie tries twice to find a ticket, but both bars come up empty. After overhearing that the final ticket was found in Russia, Charlie finds a ten-dollar note and purchases a third Wonka Bar. The Russian ticket is revealed to be a forgery just as Charlie discovers the real ticket inside the wrapper. He receives monetary offers for the ticket, but the cashier tells him to not trade it at any cost, and Charlie runs back home. At home, Charlie says that he wants to trade it for money for his family's betterment. After a pep talk from Grandpa George however, he decides to keep it and brings Grandpa Joe to accompany him on the tour.`;

const movie5Desc = `In 1995 Detroit, Jimmy "B-Rabbit" Smith Jr. (Eminem) is a young, unhappy blue-collar worker from a poor family. Jimmy has moved back north of 8 Mile Road to the run-down trailer home in Warren, Michigan, of his alcoholic mother Stephanie (Kim Basinger), his younger sister Lily (Chloe Greenfield), and Stephanie's abusive live-in boyfriend Greg (Michael Shannon). Although encouraged by his friends, Jimmy worries about his potential as a rapper. One night, Jimmy freezes during a rap battle at a local venue the Shelter, and he leaves the stage humiliated. During the day, Jimmy works at a car factory. When he asks for extra shifts, his supervisor bluntly dismisses his request on account of his habitual tardiness. Later on, Jimmy befriends a woman named Alex (Brittany Murphy). Jimmy begins to take more responsibility for the direction of his life. When he exhibits an improved attitude and performance at work, his supervisor grants him the extra shifts that he requested.`;

const movie6Desc = `Three years[N 2] after the Birds destroyed Pig City as retribution for the Pigs' theft of their eggs,[N3] Red protects Bird Island from pigs. The pigs, led by King Leonard Mudbeard, are in a prank war against the birds after Piggy Island is rebuilt. Eventually, a giant ice ball from a nearby island called Eagle Island hits the sea near Piggy Island, forcing the pigs to seek a temporary truce with the birds. Zeta, the leader of Eagle Island, is angry with her frozen surroundings and wants to occupy the two islands by shooting ice balls from a super-weapon to force their inhabitants to evacuate.`;

class Movie {
    inFavorites = false;

    constructor(
        title,
        posterImage,
        theDateOfProduction,
        information,
        mainActors
    ) {
        this.title = title;
        this.posterImage = posterImage;
        this.theDateOfProduction = theDateOfProduction;
        this.information = information;
        this.mainActors = mainActors;
    }
    addToFavorite() { 
        this.inFavorites = true;
    }
    removeFromFavorite() { 
        this.inFavorites = false;
    }
}

const movie1 = new Movie("Knockin' on Heaven's Door", "assets/images/knockin.jpg", "February 20, 1997", movie1Descr, ["Til Schweiger", "Jan Josef Liefers", "Moritz Bleibtreu"]);
const movie2 = new Movie("Soul", "assets/images/soul.jpg", "December 25, 2020", movie2Desc, ["Jamie Foxx", "Tina Fey", "Graham Norton"]);
const movie3 = new Movie("Deadpool", "assets/images/deadpool.jpg", "February 12, 2016", movie3Desc, ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein"]);
const movie4 = new Movie("Charlie and the Chocolate Factory", "assets/images/charlie.jpg", "July 15, 2005", movie4Desc, ["Johnny Depp", "Freddie Highmore", "David Kelly"]);
const movie5 = new Movie("8 Mile", "assets/images/8-Mile.jpg", "November 8, 2002", movie5Desc, ["Eminem", "Mekhi Phifer", "EBrittany Murphy"]);
const movie6 = new Movie("Angry Birds 2", "assets/images/angry.png", "August 13, 2019", movie6Desc, ["Jason Sudeikis", "Josh Gad", "Leslie Jones"]);


const movieTitle = document.querySelector("#movieName");
const posterImage = document.querySelector(".image img");
const theDateOfProduction = document.querySelector("#date");
const information = document.querySelector("#info");
const mainActors = document.querySelectorAll(".cast span")

const allMovies = document.querySelectorAll(".allMovies ul li");

const setAll = new Set([movie1, movie2, movie3, movie4, movie5, movie6]);
const favorite = new Set([]);

function changeMovie(title) {
    const likeIcon = document.querySelector('#likeIcon');
    let activeMovie;
    for (let movie of setAll) {

        if (movie.title === title) {
            activeMovie = movie;
        }
    }

    movieTitle.innerText = activeMovie.title;
    posterImage.src = activeMovie.posterImage;
    theDateOfProduction.innerText = activeMovie.theDateOfProduction;
    information.innerText = activeMovie.information;
    for (let i = 0; i < mainActors.length; i++) {
        mainActors[i].innerText = activeMovie.mainActors[i];
    }

    if (activeMovie.inFavorites === true) {
        likeIcon.style.fill = '#FF0000';
    } else {
        likeIcon.style.fill = '#D3D3D3';
    }

    for (let movie of allMovies) {
        if (movie.innerText === title) {
            movie.className = 'active';
        } else {
            movie.className = '';
        }
    }
}

function toogleMovieFavorite() {
    const title = document.querySelector('#movieName').innerText;
    const likeIcon = document.querySelector('#likeIcon');
    let activeMovie;

    for (let movie of setAll) {

        if (movie.title === title) {
            activeMovie = movie;
        }
    }


    if (activeMovie.inFavorites === false) {
        likeIcon.style.fill = '#FF0000';
        activeMovie.addToFavorite();
        favorite.add(activeMovie);
    } else {
        likeIcon.style.fill = '#D3D3D3';
        activeMovie.removeFromFavorite();
        favorite.delete(activeMovie);
    }

}

function showFavoriteMovies(favBtn) {
    const allBtn = document.querySelector('#all');
    allBtn.className = '';
    favBtn.className = 'active';
    for (let i = 0; i < allMovies.length; i++) {
        allMovies[i].style.display = 'none';
        
        favorite.forEach(favMovie => {
            if (favMovie.title === allMovies[i].innerHTML) {
                allMovies[i].style.display = 'block';
            }
        });
    }
}

function showAllMovies(allBtn) {
    const favBtn = document.querySelector('#favorite');
    allBtn.className = 'active'; 
    favBtn.className = '';
    for (let i = 0; i < allMovies.length; i++) {
        allMovies[i].style.display = 'block';
    }
}