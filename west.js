const children = [
  {
    Image: './pic/gallery/westzone/nice_beach.jpg',
    title: 'Nice Beach',
    description: 'Nice Beach is located on the French Riviera, known for its stunning pebble beaches and crystal-clear waters. It offers a perfect blend of natural beauty and cosmopolitan charm.',
    details: {
      'Location': 'Nice, French Riviera',
      'Best Time to Visit': 'May to September',
      'Activities': 'Swimming, Sunbathing, Promenade walks',
      'Highlights': 'Promenade des Anglais, Old Town, Mediterranean views'
    }
  },
  {
    Image: './pic/gallery/westzone/eagle-beach.jpg',
    title: 'Eagle Beach',
    description: 'Eagle Beach in Aruba is famous for its soft white sands and iconic fofoti trees. It is consistently ranked among the best beaches in the world.',
    details: {
      'Location': 'Aruba, Caribbean',
      'Best Time to Visit': 'December to April',
      'Activities': 'Swimming, Sunbathing, Photography',
      'Highlights': 'Fofoti trees, Wide shoreline, Turquoise waters'
    }
  },
  {
    Image: './pic/gallery/westzone/GraceBayBeach.jpg',
    title: 'Grace Bay Beach',
    description: 'Grace Bay Beach in Turks and Caicos is renowned for its pristine white sand and clear turquoise waters. It is part of a protected marine park with excellent snorkeling opportunities.',
    details: {
      'Location': 'Providenciales, Turks and Caicos',
      'Best Time to Visit': 'November to May',
      'Activities': 'Snorkeling, Swimming, Sailing',
      'Highlights': 'Coral reefs, Luxury resorts, Marine park'
    }
  },
  {
    Image: './pic/gallery/westzone/LabadiBeach.jpg',
    title: 'Labadi Beach',
    description: 'Labadi Beach is one of Ghana\'s most popular beaches, known for its vibrant atmosphere, palm trees, and cultural performances.',
    details: {
      'Location': 'Accra, Ghana',
      'Best Time to Visit': 'November to March',
      'Activities': 'Swimming, Cultural shows, Beach sports',
      'Highlights': 'Local music, Dance performances, Food vendors'
    }
  },
  {
    Image: './pic/gallery/westzone/Malibu BeachCalifornia.jpg',
    title: 'Malibu Beach',
    description: 'Malibu Beach in California is famous for its scenic coastline, celebrity homes, and excellent surfing conditions. It offers a quintessential Southern California beach experience.',
    details: {
      'Location': 'Malibu, California, USA',
      'Best Time to Visit': 'June to September',
      'Activities': 'Surfing, Swimming, Beach volleyball',
      'Highlights': 'Surf culture, Celebrity homes, Pacific views'
    }
  },
  {
    Image: './pic/gallery/westzone/Navagio (Shipwreck) Beach.jpg',
    title: 'Navagio Beach',
    description: 'Navagio Beach, also known as Shipwreck Beach, is one of Greece\'s most famous beaches. It features a stunning cove with a shipwreck and dramatic limestone cliffs.',
    details: {
      'Location': 'Zakynthos, Greece',
      'Best Time to Visit': 'May to October',
      'Activities': 'Boat tours, Swimming, Photography',
      'Highlights': 'Shipwreck, White cliffs, Turquoise waters'
    }
  },
  {
    Image: './pic/gallery/westzone/Playa_de_las Catedrales.jpg',
    title: 'Playa de las Catedrales',
    description: 'Playa de las Catedrales in Spain is famous for its impressive rock formations and natural arches that resemble cathedral buttresses. It is best visited at low tide.',
    details: {
      'Location': 'Galicia, Spain',
      'Best Time to Visit': 'May to September',
      'Activities': 'Tide exploration, Photography, Walking',
      'Highlights': 'Rock arches, Natural sculptures, Atlantic views'
    }
  },
  {
    Image: './pic/gallery/westzone/PlayaBlanca.jpg',
    title: 'Playa Blanca',
    description: 'Playa Blanca in Lanzarote is known for its white sand beaches and clear waters. It offers a relaxed atmosphere with beautiful views of the Atlantic Ocean.',
    details: {
      'Location': 'Lanzarote, Canary Islands',
      'Best Time to Visit': 'April to October',
      'Activities': 'Swimming, Sunbathing, Water sports',
      'Highlights': 'White sand, Volcanic landscape, Marina'
    }
  },
  {
    Image: './pic/gallery/westzone/PlayaParaiso.jpg',
    title: 'Playa Paraiso',
    description: 'Playa Paraiso in Mexico lives up to its name with its paradise-like setting of white sand, turquoise waters, and lush tropical vegetation.',
    details: {
      'Location': 'Tulum, Mexico',
      'Best Time to Visit': 'November to April',
      'Activities': 'Swimming, Snorkeling, Relaxing',
      'Highlights': 'Palm trees, Clear waters, Tropical vibe'
    }
  },
  {
    Image: './pic/gallery/westzone/Praia_da_Marinha.jpg',
    title: 'Praia da Marinha',
    description: 'Praia da Marinha in Portugal is considered one of the most beautiful beaches in the country, known for its golden cliffs, rock formations, and clear waters.',
    details: {
      'Location': 'Algarve, Portugal',
      'Best Time to Visit': 'May to September',
      'Activities': 'Swimming, Cliff walking, Photography',
      'Highlights': 'Rock arches, Golden cliffs, Natural pools'
    }
  },
  {
    Image: './pic/gallery/westzone/SevenMileBeach.jpg',
    title: 'Seven Mile Beach',
    description: 'Seven Mile Beach in Jamaica is famous for its long stretch of white sand, clear Caribbean waters, and luxurious resorts. It offers a perfect tropical getaway.',
    details: {
      'Location': 'Negril, Jamaica',
      'Best Time to Visit': 'December to April',
      'Activities': 'Swimming, Snorkeling, Sunset watching',
      'Highlights': 'Long shoreline, Cliff diving, Resort amenities'
    }
  },
  {
    Image: './pic/gallery/westzone/VeniceBeach.webp',
    title: 'Venice Beach',
    description: 'Venice Beach in California is famous for its vibrant boardwalk, street performers, and eclectic atmosphere. It offers a unique blend of beach culture and urban energy.',
    details: {
      'Location': 'Los Angeles, California, USA',
      'Best Time to Visit': 'June to September',
      'Activities': 'Skating, People watching, Shopping',
      'Highlights': 'Boardwalk, Muscle Beach, Street performers'
    }
  }
];

    // Populate the gallery
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

    // Modal functionality
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalBookBtn = document.getElementById('modalBookBtn');

    // Add click event to each beach card
    document.querySelectorAll('.fram').forEach(card => {
      card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        openModal(children[index]);
      });
    });

    // Function to open modal with beach details
    function openModal(beach) {
      modalImage.src = beach.Image;
      modalImage.alt = beach.title;
      modalTitle.textContent = beach.title;
      modalDescription.textContent = beach.description;
      
      // Clear previous details
      modalDetails.innerHTML = '';
      
      // Add details
      for (const [key, value] of Object.entries(beach.details)) {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        detailItem.innerHTML = `
          <span class="detail-label">${key}</span>
          <span class="detail-value">${value}</span>
        `;
        modalDetails.appendChild(detailItem);
      }
      
      // Show modal
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close modal
    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Book now button
    modalBookBtn.addEventListener('click', () => {
      alert(`Thank you for your interest in ${modalTitle.textContent}! Our booking system will be available soon.`);
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });