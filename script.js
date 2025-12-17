function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
      let header=document.getElementById("nom-journal");
      console.log(header);
      header.innerHTML= journal.title;
  
     let container=document.getElementById("phrase-accroche");
      console.log(container);
      container.innerHTML= journal.subtitle;
      

      // TODO 2: REMPLIR LA NAVIGATION
      let nom=journal.topics.nom;
      console.log(nom);
      
      let navBar=document.getElementById("themes-nav");
      console.log(navBar);
      journal.topics.forEach(function(topic){

        let bouton= `<bouton class='nav-theme-btn'>
        <p>${topic.icon}<p>
        <h3>${topic.title}</h3>

        </bouton>
        `;
        navBar.insertAdjacentHTML("beforeend", bouton);
      });
      
  

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
let articleprincipal=document.getElementById("article-principal")
console.log(articleprincipal);



let cartePrincipal= `

<img src="${journal.feature.imageHero}" id=hero-image>
<div class="article-principal">
  <h3 id="hero-titre">${journal.feature.titre}"</h3>
  <h3 id=hero-info>${journal.feature.summary}</h3>
  <p id=hero-description><strong>${journal.feature.body}<strong></p>
  <p id=hero-auteur>${journal.feature.author}</p>
  <p>${journal.feature.date}</p>
</div>
`;
articleprincipal.insertAdjacentHTML('beforeend', cartePrincipal);


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let articleGrid=document.getElementById("articles-grid")
      console.log(articleGrid);
     
      
    journal.stories.forEach(function(story) {
      let carteStories= 
      `<article class='card'>
      <img src="${story.image}" alt=${story.headline}">
      <button class="theme-badge"> ${story.theme}</button>

      <h3>${story.headline}</h3>
      <h3>${story.body}</h3>
      <p>${story.summary}</p>
      <p>${story.author}</p>
      <p>${story.date}</p>
      <button class="read-btn">Lire l'article</button>

      </article>
      `;
  articleGrid.insertAdjacentHTML("beforeend", carteStories);
      });
   
      // TODO 5: REMPLIR LES THEMES
      
let containerThemes=document.getElementById('themes-list');
console.log(containerThemes);

journal.topics.forEach(function(topic){
  carteThemes= `<div class='theme-item'>
   <h2>${topic.icon}</h2>
   <h3>${topic.title}</h3>
   <p>${topic.description}</p>
 
  </div>`;
containerThemes.insertAdjacentHTML("beforeend", carteThemes);
});

      // TODO 6: REMPLIR LES AUTEURS
let auteur=document.getElementById("authors-list");
console.log(auteur);

journal.contributors.forEach(function (author) {
  carteAuteur= `<div class="authors-card">
  <div class='container'>
  <img src="${author.image}">
  <h3>${author.firstName}</h3>
  <h3> ${author.presentation}</h3>
  <p>E-mail: ${author.email}</p>
  <p>${author.typeExperience}</p>
  <p> Followers : ${author.followers}</p>
  <p>${author.articles} Artcle</p>
  
  </div>`;
  auteur.insertAdjacentHTML("beforeend" , carteAuteur);
});

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
let cta=document.getElementById("call-to-action");
console.log(cta);
cta.textContent="S'habiller";
cta.addEventListener("click" , function(){
   alert("vous êtes abonné!");

     });

  









      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
