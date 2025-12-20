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
      navBar.innerHTML+=`<button class=" nav-theme-btn active" journal-theme="tous">Tous</button>`;
      journal.topics.forEach(function(topic){

        let bouton= `<bouton class="nav-theme-btn"> 
        ${topic.icon} ${topic.title}</p>
        </bouton>
        `;
        navBar.innerHTML+= bouton ;
      });
      
  

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
let articleprincipal=document.getElementById("article-principal")
console.log(articleprincipal);



let cartePrincipal= `

<img src="${journal.feature.imageHero}" id=hero-image>
<div class="card-content">
<p class="theme-badge">Collaboration</p>
<div class="article-principal">
  <h3 id="hero-titre">${journal.feature.titre}"</h3>
  <h3>${journal.feature.summary}</h3>
  <p id=hero-description><strong>${journal.feature.body}<strong></p>
  <p id=hero-auteur> par ${journal.feature.author} * ${journal.feature.date}</p>
  <button class=read-article-btn>Lire l'article</button>
  
</div>
`;
articleprincipal.insertAdjacentHTML('beforeend', cartePrincipal);


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let articleGrid=document.getElementById("articles-grid")
      console.log(articleGrid);
     
    journal.stories.forEach(story => {
      let carteStories= `<div class="article-card">
      <img src="${story.image}" alt="${story.headline}">
      <button class="theme-badge"> ${story.theme}</button>
      <div class="article-content">
      <h3>${story.headline}</h3>
      <p>${story.summary}</p>
      <div class="article-author"> par ${story.author} ${story.date}</div>
      <button class="read-btn">Lire l'article</button>
      
      
      </div>`;
     articleGrid.insertAdjacentHTML("beforeend" , carteStories);
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
  carteAuteur= `<div class='author-card'>
  <div class='container'>

  <img class='author-image'src="${author.image}">
  <h3 class="author-card h3">${author.firstName}</h3>
  <p>${author.presentation}</p>
  <p>E-mail: ${author.email}</p>
  <p>${author.typeExperience}</p>
  <p> Followers : ${author.followers}</p>
  <p>${author.articles} Artcle</p>
  <p class="author-role"></p>
  <p class="author-bio></p>
  <p class="author-socials></p>
  <p class= author-socials a></p>
  <p class="author-socials a:hover></p>
  </div>
  
  </div>`;
  auteur.insertAdjacentHTML("beforeend" , carteAuteur);
});

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
      let text="bien s'hallier";
      let label="s'abonner";
let callButton=document.getElementById("call-to-action");
console.log(callButton);

carteCta= `
<div class='container'>
<div id="call-to-action">
<p>Rejoignez notre communauté pour explorer l'inspiration de l'art et la mode. </p>
<p>Il faut  ${journal.cta.text} pour être class.</p>
<button id="cta-button" class="cta-button">${journal.cta.label} </button>


</div>`;
     
callButton.insertAdjacentHTML("beforeend" , carteCta);
  
     

  









      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
