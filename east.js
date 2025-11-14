// Beach data with additional details for modals
    const children = [
      {
        Image: './pic/gallery/eastzone/Boracay_White_Beach.jpg',
        title: 'Boracay White Beach',
        description: 'Boracay White Beach is one of the most famous beaches in the Philippines, known for its powdery white sand and vibrant nightlife. It stretches over 4 kilometers and offers a variety of water sports and activities.',
        details: {
          'Location': 'Boracay Island, Philippines',
          'Best Time to Visit': 'November to April',
          'Activities': 'Swimming, Snorkeling, Parasailing',
          'Highlights': 'White sand, Sunset views, Beach parties'
        }
      },
      {
        Image: './pic/gallery/eastzone/Kuta_Beach.jpg',
        title: 'Kuta Beach',
        description: 'Kuta Beach is a popular tourist destination in Bali, Indonesia, famous for its long sandy beach, great surfing conditions, and spectacular sunsets. It is also known for its lively atmosphere with numerous bars, restaurants, and shops.',
        details: {
          'Location': 'Bali, Indonesia',
          'Best Time to Visit': 'April to October',
          'Activities': 'Surfing, Sunbathing, Shopping',
          'Highlights': 'Sunset views, Surf schools, Beach bars'
        }
      },
      {
        Image: './pic/gallery/eastzone/Langkawi_Beach.jpg',
        title: 'Langkawi Beach',
        description: 'Langkawi is an archipelago of 99 islands in Malaysia, known for its beautiful beaches, clear waters, and lush rainforests. The beaches here offer a perfect blend of relaxation and adventure.',
        details: {
          'Location': 'Langkawi, Malaysia',
          'Best Time to Visit': 'November to April',
          'Activities': 'Island hopping, Swimming, Cable car rides',
          'Highlights': 'Geopark, Waterfalls, Duty-free shopping'
        }
      },
      {
        Image: './pic/gallery/eastzone/MatiraBeach.jpg',
        title: 'Matira Beach',
        description: 'Matira Beach is often considered one of the most beautiful beaches in Bora Bora, French Polynesia. With its pristine white sand and crystal-clear turquoise waters, it offers a perfect tropical paradise experience.',
        details: {
          'Location': 'Bora Bora, French Polynesia',
          'Best Time to Visit': 'May to October',
          'Activities': 'Snorkeling, Swimming, Relaxing',
          'Highlights': 'Overwater bungalows, Coral gardens, Luxury resorts'
        }
      },
      {
        Image: './pic/gallery/eastzone/Maya_Bay.jpg',
        title: 'Maya Bay',
        description: 'Maya Bay gained international fame after being featured in the movie "The Beach". Located on Phi Phi Leh Island in Thailand, this stunning bay is surrounded by limestone cliffs and features emerald-green waters.',
        details: {
          'Location': 'Phi Phi Leh Island, Thailand',
          'Best Time to Visit': 'November to April',
          'Activities': 'Swimming, Snorkeling, Photography',
          'Highlights': 'Limestone cliffs, Movie location, Marine life'
        }
      },
      {
        Image: './pic/gallery/eastzone/NgapaliBeach.jpg',
        title: 'Ngapali Beach',
        description: 'Ngapali Beach is a beautiful beach in Myanmar, known for its pristine white sand, clear blue water, and peaceful atmosphere. It is an ideal destination for those seeking relaxation away from crowded tourist spots.',
        details: {
          'Location': 'Rakhine State, Myanmar',
          'Best Time to Visit': 'October to May',
          'Activities': 'Swimming, Cycling, Seafood dining',
          'Highlights': 'Palm trees, Local culture, Fresh seafood'
        }
      },
      {
        Image: './pic/gallery/eastzone/Nha_Trang_Beach.jpg',
        title: 'Nha Trang Beach',
        description: 'Nha Trang Beach is one of Vietnam\'s most famous coastal cities, offering a long stretch of sandy beach along with a vibrant city life. It is known for its scuba diving opportunities and beautiful islands.',
        details: {
          'Location': 'Nha Trang, Vietnam',
          'Best Time to Visit': 'February to May',
          'Activities': 'Scuba diving, Island tours, Mud baths',
          'Highlights': 'Vinpearl Land, Po Nagar Towers, Hon Mun Island'
        }
      },
      {
        Image: './pic/gallery/eastzone/OkinawaBeach.jpg',
        title: 'Okinawa Beach',
        description: 'Okinawa is a Japanese prefecture comprising hundreds of islands in the East China Sea. Its beaches are known for their white sand, coral reefs, and unique Ryukyuan culture.',
        details: {
          'Location': 'Okinawa, Japan',
          'Best Time to Visit': 'April to June, September to November',
          'Activities': 'Snorkeling, Cultural tours, Whale watching',
          'Highlights': 'Coral reefs, Shuri Castle, Traditional villages'
        }
      },
      {
        Image: './pic/gallery/eastzone/Whitehaven Beach.jpg',
        title: 'Whitehaven Beach',
        description: 'Whitehaven Beach is located in the Whitsunday Islands of Australia and is famous for its brilliant white silica sand and turquoise waters. The beach stretches over 7 kilometers and is accessible only by boat, seaplane, or helicopter.',
        details: {
          'Location': 'Whitsunday Islands, Australia',
          'Best Time to Visit': 'May to October',
          'Activities': 'Swimming, Sailing, Scenic flights',
          'Highlights': 'Silica sand, Hill Inlet lookout, Marine park'
        }
      },
      {
        Image: './pic/gallery/eastzone/HaeundaeBeach.jpg',
        title: 'Haeundae Beach',
        description: 'Haeundae Beach is one of South Korea\'s most famous beaches, located in the city of Busan. It is known for its wide sandy shore, modern facilities, and vibrant summer festivals.',
        details: {
          'Location': 'Busan, South Korea',
          'Best Time to Visit': 'June to August',
          'Activities': 'Swimming, Beach sports, Cultural events',
          'Highlights': 'Summer festivals, Marine City, Dongbaek Island'
        }
      },
      {
        Image: './pic/gallery/eastzone/Pink Beach.jpg',
        title: 'Pink Beach',
        description: 'Pink Beach gets its name from the pink hue of its sand, which comes from microscopic organisms called Foraminifera. Located in Komodo Island, Indonesia, this beach offers a unique and picturesque landscape.',
        details: {
          'Location': 'Komodo Island, Indonesia',
          'Best Time to Visit': 'April to December',
          'Activities': 'Snorkeling, Diving, Komodo dragon watching',
          'Highlights': 'Pink sand, Coral reefs, Komodo National Park'
        }
      },
      {
        Image: './pic/gallery/eastzone/Tulum Beach.jpg',
        title: 'Tulum Beach',
        description: 'Tulum Beach in Mexico is famous for its combination of pristine beaches and ancient Mayan ruins. The turquoise waters and white sand create a stunning backdrop for the cliffside ruins.',
        details: {
          'Location': 'Tulum, Mexico',
          'Best Time to Visit': 'October to December',
          'Activities': 'Ruins exploration, Swimming, Cenote diving',
          'Highlights': 'Mayan ruins, Cenotes, Bohemian vibe'
        }
      },
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