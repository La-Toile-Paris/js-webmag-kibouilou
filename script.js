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
      let navBar=document.getElementById("themes-nav");
      console.log(navBar);
      navBar.innerHTML= journal.logo;
      
  

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL
let articleprincipal=document.getElementById("article-principal")
console.log(articleprincipal);


let cartePrincipal= `
<div class= 'ontainer-full'>
<img src="${journal.feature.imageHero}" id=hero-image>
<h3 id="hero-titre">${journal.feature.titre}"</h2>
<h3 id=hero-info>${journal.feature.summary}</h3>
<p id=hero-description>${journal.feature.body}</p>
<p id=hero-auteur>${journal.feature.author}</p>

</div>
`
articleprincipal.insertAdjacentHTML('beforeend' ,cartePrincipal);


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let articleGrid=document.getElementById("articles-grid")
      console.log(articleGrid);

    journal.stories.forEach(element => {
      let carteGril= `<div`
      <div
        
      });
      

      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION


      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
