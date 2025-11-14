let parent = document.getElementById('parent');
// console.log(parent)
const children = [
    {
        Image: './pic/gallery/eastzone/Boracay_White_Beach.jpg',
        title: 'Boracay White Beach'
    },
    {
        Image: './pic/gallery/eastzone/Kuta_Beach.jpg',
        title: 'Kuta Beach'
    },
    {
        Image: './pic/gallery/eastzone/Langkawi_Beach.jpg',
        title: 'Langkawi Beach'
    },
    {
        Image: './pic/gallery/eastzone/MatiraBeach.jpg',
        title: 'Matira Beach'
    },
    {
        Image: './pic/gallery/eastzone/Maya_Bay.jpg',
        title: 'Maya Bay'
    },
    {
        Image: './pic/gallery/westzone/Playa_de_las Catedrales.jpg',
        title: 'Playa_de_las Beach'
    },
    {
        Image: './pic/gallery/westzone/PlayaBlanca.jpg',
        title: 'Playa Blanca Beach'
    },
    {
        Image: './pic/gallery/westzone/PlayaParaiso.jpg',
        title: 'Playa Paraiso Beach'
    },
    {
        Image: './pic/gallery/westzone/Praia_da_Marinha.jpg',
        title: 'Praia da Marinha'
    },
    {
        Image: './pic/gallery/westzone/SevenMileBeach.jpg',
        title: 'Seven Mile Beach'
    },
    {
        Image: './pic/gallery/westzone/VeniceBeach.webp',
        title: 'Venice Beach'
    },
    {
        Image: './pic/gallery/eastzone/Tulum Beach.jpg',
        title: 'Tulum Beach'
    },
    
    {
        Image: './pic/gallery/southzone/Copacabana_Beach.jpg',
        title: 'Copacabana Beach'
    },
    {
        Image: './pic/gallery/southzone/Cox’s_Bazar.jpg',
        title: 'Cox’s Bazar'
    },
    {
        Image: './pic/gallery/southzone/French_Beach.jpg',
        title: 'Playa Blanca Beach'
    },
    {
        Image: './pic/gallery/southzone/Ipanema_Beach.jpg',
        title: 'Ipanema Beach'
    },
    {
        Image: './pic/gallery/southzone/Mirissa_Beach.webp',
        title: 'Mirissa Beach'
    },
    {
        Image: './pic/gallery/southzone/Nungwi_Beach.jpg',
        title: 'Nungwi Beach'
    },
    {
        Image: './pic/gallery/southzone/Varkala_Beach.jpg',
        title: 'Varkala Beach'
    },
     {
        Image: './pic/gallery/northzone/Beidaihe Beach.jpg',
        title: 'Waikiki Beach',
      
      },
      {
        Image: './pic/gallery/northzone/BournemouthBeach.jpg',
        title: 'Miami Beach',
        description: 'Miami Beach is known for its vibrant art deco architecture, turquoise waters, and lively atmosphere. The beach stretches along the Atlantic Ocean and is a hub for entertainment and culture.',
    
      },
      {
        Image: './pic/gallery/northzone/Cannon Beach.jpg',
        title: 'Santa Monica Beach',
      
      },
      {
        Image: './pic/gallery/northzone/Haukland Beach.jpg',
        title: 'Cannon Beach',
      
      },
      {
        Image: './pic/gallery/northzone/Luskentyre Beach.jpg',
        title: 'Playa Norte',
     
      },
      {
        Image: './pic/gallery/northzone/Miami Beach.jpg',
        title: 'Renisfjara Sand Beach',
     
      },
      {
        Image: './pic/gallery/northzone/playabeaches.jpg',
        title: 'Bournemouth Beach',
     
      },
      {
        Image: './pic/gallery/northzone/Reynisfjara Black Sand Beach.jpg',
        title: 'Luskentyre Beach',
       
      },
      {
        Image: './pic/gallery/northzone/Haukland Beach.jpg',
        title: 'Haukland Beach',
       
      },
]
children.forEach((data) => {
    let child = `
    
    
    <div class='child'>
  <img src="${data.Image}" alt="${data.title}">
    <h3>${data.title}</h3>
  </img>
</div>


`
    parent.innerHTML += child;
})