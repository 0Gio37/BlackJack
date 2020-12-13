tabCartes =[
    "carreau1","carreau2","carreau3","carreau4","carreau5","carreau6","carreau7","carreau8","carreau9","carreau10","carreau11vallet","carreau12dame","carreau13roi",
    "coeur1","coeur2","coeur3","coeur4","coeur5","coeur6","coeur7","coeur8","coeur9","coeur10","coeur11vallet", "coeur12dame","coeur13roi",
    "pic1","pic2","pic3","pic4","pic5","pic6","pic7","pic8","pic9","pic10","pic11vallet","pic12dame","pic13roi",
    "trefle1","trefle2","trefle3","trefle4","trefle5","trefle6","trefle7","trefle8","trefle9","trefle10","trefle11vallet","trefle12dame","trefle13roi"
];

ValoCartes = {carreau1:1,carreau2:2,carreau3:3,carreau4:4,carreau5:5,carreau6:6,carreau7:7,carreau8:8,carreau9:9,carreau10:10,carreau11vallet:10,carreau12dame:10,carreau13roi:10,
    coeur1:1,coeur2:2,coeur3:3,coeur4:4,coeur5:5,coeur6:6,coeur7:7,coeur8:8,coeur9:9,coeur10:10,coeur11vallet:10,coeur12dame:10,coeur13roi:10,
    pic1:1,pic2:2,pic3:3,pic4:4,pic5:5,pic6:6,pic7:7,pic8:8,pic9:9,pic10:10,pic11vallet:10,pic12dame:10,pic13roi:10,
    trefle1:1,trefle2:2,trefle3:3,trefle4:4,trefle5:5,trefle6:6,trefle7:7,trefle8:8,trefle9:9,trefle10:10,trefle11vallet:10,trefle12dame:10,trefle13roi:10,
};

//VARIABLES
let nbTour = 0;
let scoreJoueur = 0;
let scoreOrdi = 0;
const cliCartOrdi = document.getElementById("carteVersoOrdi");
const carteRectoOrdi1 = document.getElementById("carteRectoOrdi1");
const carteRectoOrdi2 = document.getElementById("carteRectoOrdi2");
const carteRectoOrdi3 = document.getElementById("carteRectoOrdi3");
const rstOrdi = document.getElementById("rstOrdi");
const cliCartJoueur = document.getElementById("carteVersoJoueur");
const carteRectoJoueur1 = document.getElementById("carteRectoJoueur1");
const carteRectoJoueur2 = document.getElementById("carteRectoJoueur2");
const carteRectoJoueur3 = document.getElementById("carteRectoJoueur3");
const rstJoueur = document.getElementById("rstJoueur");
const rstJeu1 = document.getElementById("rstJeu1");
const rstJeu2 = document.getElementById("rstJeu2");
const refresh = document.getElementById("refresh");

//FUNCTIONS
function nbAleat (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

function jeuOrdi () {
    let nb = nbAleat(0,51);
    let carteOrdi = tabCartes[nb];
    if ((typeof(carteRectoOrdi1.attributes.src) == "object") && (typeof(carteRectoOrdi2.attributes.src) == "object") && (typeof(carteRectoOrdi3.attributes.src) == "object")){
        alert("        **** FIN DE TIRAGE POUR LA BANQUE **** ");
    }else if ((typeof(carteRectoOrdi1.attributes.src) == "object") && (typeof(carteRectoOrdi2.attributes.src) == "object")){
        carteRectoOrdi3.setAttribute("src", "photos/cartes/"+carteOrdi+".jpg");
        scoreOrdi += ValoCartes[carteOrdi];
        rstOrdi.innerHTML = "SCORE DE LA BANQUE = "+scoreOrdi;
        afficheRstJeu ();
    }else if (typeof(carteRectoOrdi1.attributes.src) == "object") {
        carteRectoOrdi2.setAttribute("src", "photos/cartes/"+carteOrdi+".jpg");
        scoreOrdi += ValoCartes[carteOrdi];
        rstOrdi.innerHTML = "SCORE DE LA BANQUE = "+scoreOrdi;
        afficheRstJeu ();
    }else {
        carteRectoOrdi1.setAttribute("src", "photos/cartes/"+carteOrdi+".jpg");
        scoreOrdi += ValoCartes[carteOrdi];
        rstOrdi.innerHTML = "SCORE DE LA BANQUE = "+scoreOrdi;
        afficheRstJeu ();
    }  
};

function jeuJoueur () {
    let nb = nbAleat(0,51);
    let carteJoueur = tabCartes[nb];
    if ((typeof(carteRectoJoueur1.attributes.src) == "object") && (typeof(carteRectoJoueur2.attributes.src) == "object") && (typeof(carteRectoJoueur3.attributes.src) == "object")){
        alert("        *** FIN DE TIRAGE POUR LE JOUEUR *** ");
    }else if ((typeof(carteRectoJoueur1.attributes.src) == "object") && (typeof(carteRectoJoueur2.attributes.src) == "object")){
        carteRectoJoueur3.setAttribute("src", "photos/cartes/"+carteJoueur+".jpg");
        scoreJoueur += ValoCartes[carteJoueur];
        rstJoueur.innerHTML = "SCORE DU JOUEUR = "+scoreJoueur;
        afficheRstJeu ();
    }else if (typeof(carteRectoJoueur1.attributes.src) == "object") {
        carteRectoJoueur2.setAttribute("src", "photos/cartes/"+carteJoueur+".jpg");
        scoreJoueur += ValoCartes[carteJoueur];
        rstJoueur.innerHTML = "SCORE DU JOUEUR = "+scoreJoueur;
        afficheRstJeu ();
    }else {
        carteRectoJoueur1.setAttribute("src", "photos/cartes/"+carteJoueur+".jpg");
        scoreJoueur += ValoCartes[carteJoueur];
        rstJoueur.innerHTML = "SCORE DU JOUEUR = "+scoreJoueur;
        afficheRstJeu ();
    }  
};


function afficheRstJeu (e) {
    if (scoreJoueur>scoreOrdi){
        rstJeu1.innerHTML = "Le Joueur mène";
        rstJeu2.innerHTML = "A "+(21-scoreJoueur)+" points du Black Jack";
        
        } else if (scoreOrdi>scoreJoueur){
            rstJeu1.innerHTML = "La Banque mène";
            rstJeu2.innerHTML = "A "+(21-scoreOrdi)+" points du Black Jack";
        } else {
            rstJeu1.innerHTML = "Egalité !";
        };
        if (scoreOrdi>21){
            alert("la banque a perdu");
            
        }
        if (scoreOrdi>=16 && scoreOrdi<21){
            alert("la banque stop le tirage");
            e.preventDefault();
        }
        if (scoreJoueur>21){
            alert("Vous avez perdu");
            
        }
        if (scoreOrdi==21){
            rstJeu1.innerHTML = "PERDU";
            alert("BLACK JACK DE LA BANQUE !!!");
           
        }
        if (scoreJoueur==21){
            rstJeu1.innerHTML = "BLACk JACK !!!";
            alert("VOUS AVEZ GAGNE !!");
            
        }
        if ((typeof(carteRectoJoueur1.attributes.src) == "object") 
        && (typeof(carteRectoJoueur2.attributes.src) == "object") 
        && (typeof(carteRectoJoueur3.attributes.src) == "object") 
        && (scoreJoueur>scoreOrdi)
        &&(scoreJoueur<=21)){
            rstJeu1.innerHTML = "vous avez";
            rstJeu2.innerHTML = "gagné";
        } else if ((typeof(carteRectoJoueur1.attributes.src) == "object") 
        && (typeof(carteRectoJoueur2.attributes.src) == "object") 
        && (typeof(carteRectoJoueur3.attributes.src) == "object") 
        && (scoreOrdi>scoreJoueur)
        && (scoreOrdi<=21)){
            rstJeu1.innerHTML = "vous avez";
            rstJeu2.innerHTML = "perdu";
        };
    };

function rafraiPage(){
    location.reload();
};

/* 
function creaBut (){
    let butt = document.createElement("button");
    butt.setAttribute("id", "butref");
    const butref = document.getElementById("butref");
    let txtButt = document.createTextNode("NOUVELLE PARTIE ?")
    butt.appendChild(txtButt);
    refresh.appendChild(butt);
    butref.classList.add("butref");
};*/



//EVENTS
cliCartOrdi.addEventListener("click", jeuOrdi);
cliCartJoueur.addEventListener("click", jeuJoueur);
refresh.addEventListener("click", rafraiPage);
