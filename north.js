const children = [
      {
        Image: './pic/gallery/northzone/Beidaihe Beach.jpg',
        title: 'Waikiki Beach',
        description: 'Waikiki Beach is one of the most famous beaches in the world, located in Honolulu, Hawaii. Known for its long rolling waves, it is a popular destination for surfing, swimming, and sunbathing.',
        details: {
          'Location': 'Honolulu, Hawaii, USA',
          'Best Time to Visit': 'April to October',
          'Activities': 'Surfing, Swimming, Sunbathing',
          'Highlights': 'Diamond Head backdrop, Resort area, Nightlife'
        }
      },
      {
        Image: './pic/gallery/northzone/BournemouthBeach.jpg',
        title: 'Miami Beach',
        description: 'Miami Beach is known for its vibrant art deco architecture, turquoise waters, and lively atmosphere. The beach stretches along the Atlantic Ocean and is a hub for entertainment and culture.',
        details: {
          'Location': 'Miami, Florida, USA',
          'Best Time to Visit': 'November to April',
          'Activities': 'Swimming, Beach volleyball, Nightlife',
          'Highlights': 'Art Deco Historic District, South Beach, Ocean Drive'
        }
      },
      {
        Image: './pic/gallery/northzone/Cannon Beach.jpg',
        title: 'Santa Monica Beach',
        description: 'Santa Monica Beach is a Southern California classic with its iconic pier, amusement park, and wide sandy shore. It offers a perfect blend of natural beauty and urban amenities.',
        details: {
          'Location': 'Santa Monica, California, USA',
          'Best Time to Visit': 'May to October',
          'Activities': 'Swimming, Cycling, Amusement park rides',
          'Highlights': 'Santa Monica Pier, Pacific Park, Muscle Beach'
        }
      },
      {
        Image: './pic/gallery/northzone/Haukland Beach.jpg',
        title: 'Cannon Beach',
        description: 'Cannon Beach in Oregon is famous for its dramatic sea stacks, particularly Haystack Rock. The beach offers stunning scenery, tide pools, and a charming coastal town atmosphere.',
        details: {
          'Location': 'Oregon, USA',
          'Best Time to Visit': 'June to September',
          'Activities': 'Tide pooling, Photography, Beachcombing',
          'Highlights': 'Haystack Rock, Ecola State Park, Art galleries'
        }
      },
      {
        Image: './pic/gallery/northzone/Luskentyre Beach.jpg',
        title: 'Playa Norte',
        description: 'Playa Norte on Isla Mujeres is renowned for its crystal-clear turquoise waters and powdery white sand. This Caribbean paradise offers a tranquil escape with stunning natural beauty.',
        details: {
          'Location': 'Isla Mujeres, Mexico',
          'Best Time to Visit': 'December to April',
          'Activities': 'Snorkeling, Swimming, Relaxing',
          'Highlights': 'Turquoise waters, White sand, Caribbean vibe'
        }
      },
      {
        Image: './pic/gallery/northzone/Miami Beach.jpg',
        title: 'Renisfjara Sand Beach',
        description: 'Reynisfjara is a world-famous black sand beach located on the South Coast of Iceland. Known for its dramatic basalt columns and powerful waves, it offers a unique and otherworldly landscape.',
        details: {
          'Location': 'Vik, Iceland',
          'Best Time to Visit': 'June to August',
          'Activities': 'Photography, Bird watching, Hiking',
          'Highlights': 'Black sand, Basalt columns, Reynisdrangar sea stacks'
        }
      },
      {
        Image: './pic/gallery/northzone/playabeaches.jpg',
        title: 'Bournemouth Beach',
        description: 'Bournemouth Beach in England is known for its seven miles of golden sand, Victorian pier, and beautiful gardens. It is a classic British seaside destination with plenty of family-friendly attractions.',
        details: {
          'Location': 'Dorset, England',
          'Best Time to Visit': 'June to September',
          'Activities': 'Swimming, Sunbathing, Pier walks',
          'Highlights': 'Bournemouth Pier, Oceanarium, Lower Gardens'
        }
      },
      {
        Image: './pic/gallery/northzone/Reynisfjara Black Sand Beach.jpg',
        title: 'Luskentyre Beach',
        description: 'Luskentyre Beach on the Isle of Harris in Scotland is famous for its breathtaking white sands and turquoise waters that rival tropical destinations. The beach offers stunning views of the surrounding mountains.',
        details: {
          'Location': 'Isle of Harris, Scotland',
          'Best Time to Visit': 'May to September',
          'Activities': 'Walking, Photography, Wildlife spotting',
          'Highlights': 'White sands, Turquoise water, Seclusion'
        }
      },
      {
        Image: './pic/gallery/northzone/Haukland Beach.jpg',
        title: 'Haukland Beach',
        description: 'Haukland Beach in Norway is often described as one of the most beautiful beaches in the world. With its white sand, clear water, and dramatic mountain backdrop, it is a paradise for nature lovers.',
        details: {
          'Location': 'Lofoten Islands, Norway',
          'Best Time to Visit': 'June to August',
          'Activities': 'Hiking, Swimming, Photography',
          'Highlights': 'Arctic beauty, Midnight sun, Mountain views'
        }
      },
      {
        Image: './pic/gallery/northzone/whatsapp.jpg',
        title: 'Beidaihe Beach',
        description: 'Beidaihe Beach is a popular seaside resort in China, known for its sandy shores and as a summer retreat. It is also famous as a bird-watching destination during migration seasons.',
        details: {
          'Location': 'Hebei Province, China',
          'Best Time to Visit': 'May to October',
          'Activities': 'Swimming, Bird watching, Seafood dining',
          'Highlights': 'Summer resort, Migratory birds, Qinhuangdao nearby'
        }
      },
      {
        Image: './pic/gallery/northzone/Zlatni Rat.jpg',
        title: 'Zlatni Rat',
        description: 'Zlatni Rat, or the Golden Horn, is one of Croatia\'s most famous beaches. Known for its unique shape that changes with the tides and winds, it offers crystal-clear waters and pebble shores.',
        details: {
          'Location': 'Brač Island, Croatia',
          'Best Time to Visit': 'May to September',
          'Activities': 'Windsurfing, Swimming, Sunbathing',
          'Highlights': 'Unique shape, Clear water, Windsurfing conditions'
        }
      },
      {
        Image: './pic/gallery/southzone/Varkala_Beach.jpg',
        title: 'Jurmala Beach',
        description: 'Jurmala Beach in Latvia is the largest resort city in the Baltic States, known for its wide sandy beach, pine forests, and historic wooden architecture. It offers a perfect blend of nature and spa culture.',
        details: {
          'Location': 'Jurmala, Latvia',
          'Best Time to Visit': 'June to August',
          'Activities': 'Swimming, Spa treatments, Forest walks',
          'Highlights': 'Sandy beach, Wooden architecture, Spa resorts'
        }
      },
    ];

    let parent = document.getElementById('parent');
    children.forEach((data, index) => {
      let child = `
        <div class='fram' data-index="${index}">
          <div class='child'>
            <img src="${data.Image}" alt="${data.title}">
            <h3>${data.title}</h3>
          </div>
        </div>
      `;
      parent.innerHTML += child;
    });

    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalBookBtn = document.getElementById('modalBookBtn');

    document.querySelectorAll('.fram').forEach(card => {
      card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        openModal(children[index]);
      });
    });

    function openModal(beach) {
      modalImage.src = beach.Image;
      modalImage.alt = beach.title;
      modalTitle.textContent = beach.title;
      modalDescription.textContent = beach.description;
 
      modalDetails.innerHTML = '';
      
      for (const [key, value] of Object.entries(beach.details)) {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        detailItem.innerHTML = `
          <span class="detail-label">${key}</span>
          <span class="detail-value">${value}</span>
        `;
        modalDetails.appendChild(detailItem);
      }
      
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    modalBookBtn.addEventListener('click', () => {
      alert(`Thank you for your interest in ${modalTitle.textContent}! Our booking system will be available soon.`);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });