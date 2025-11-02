// Sample event data
        const events = [
            {
                id: 1,
                title: "Seattle Tech Meetup",
                date: "Oct 15, 2023",
                time: "6:00 PM",
                location: "TechHub Seattle, Downtown",
                description: "Monthly gathering of tech enthusiasts, developers, and entrepreneurs. This month we're discussing AI advancements.",
                image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "meetup",
                category: "tech",
                price: "free",
                interested: 124
            },
            {
                id: 2,
                title: "Jazz Night at The Triple Door",
                date: "Oct 18, 2023",
                time: "8:00 PM",
                location: "The Triple Door, Seattle",
                description: "An evening of smooth jazz featuring local artists and special guests. Dinner and drinks available.",
                image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "venue",
                category: "music",
                price: "paid",
                interested: 87
            },
            {
                id: 3,
                title: "Startup Pitch Competition",
                date: "Oct 22, 2023",
                time: "4:00 PM",
                location: "WeWork, South Lake Union",
                description: "Watch as 10 startups pitch their ideas to a panel of investors. Great networking opportunity.",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "eventbrite",
                category: "business",
                price: "paid",
                interested: 203
            },
            {
                id: 4,
                title: "Fremont Sunday Market",
                date: "Oct 20, 2023",
                time: "10:00 AM",
                location: "Fremont Neighborhood, Seattle",
                description: "Weekly outdoor market featuring local artisans, food trucks, vintage finds, and live music.",
                image: "https://images.unsplash.com/photo-1560749006-5b9b4b4c2c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "facebook",
                category: "food",
                price: "free",
                interested: 342
            },
            {
                id: 5,
                title: "Yoga in the Park",
                date: "Oct 21, 2023",
                time: "9:00 AM",
                location: "Green Lake Park, Seattle",
                description: "Beginner-friendly yoga session in the beautiful surroundings of Green Lake. Mats provided.",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "meetup",
                category: "sports",
                price: "free",
                interested: 56
            },
            {
                id: 6,
                title: "Seattle Art Walk",
                date: "Oct 25, 2023",
                time: "5:00 PM",
                location: "Pioneer Square, Seattle",
                description: "Monthly art walk featuring galleries, studios, and pop-up exhibitions throughout Pioneer Square.",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                source: "venue",
                category: "arts",
                price: "free",
                interested: 189
            }
        ];

        // Function to render events
        function renderEvents(eventsToRender) {
            const eventsContainer = document.getElementById('events-container');
            eventsContainer.innerHTML = '';

            eventsToRender.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                
                // Determine source icon
                let sourceIcon = 'fas fa-users';
                if (event.source === 'facebook') sourceIcon = 'fab fa-facebook';
                if (event.source === 'eventbrite') sourceIcon = 'fas fa-ticket-alt';
                if (event.source === 'venue') sourceIcon = 'fas fa-building';
                
                eventCard.innerHTML = `
                    <div class="event-image" style="background-image: url('${event.image}')">
                        <div class="event-source">
                            <i class="${sourceIcon}"></i>
                            ${event.source.charAt(0).toUpperCase() + event.source.slice(1)}
                        </div>
                    </div>
                    <div class="event-content">
                        <div class="event-date">
                            <i class="far fa-calendar-alt"></i>
                            ${event.date} • ${event.time}
                        </div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${event.location}
                        </div>
                        <p class="event-description">${event.description}</p>
                        <div class="event-actions">
                            <div class="event-interested">
                                <i class="far fa-heart"></i>
                                ${event.interested} interested
                            </div>
                            <button class="event-button">View Details</button>
                        </div>
                    </div>
                `;
                
                eventsContainer.appendChild(eventCard);
            });
        }

        // Initial render
        renderEvents(events);

        // Filter functionality
        document.getElementById('category').addEventListener('change', filterEvents);
        document.getElementById('date').addEventListener('change', filterEvents);
        document.getElementById('source').addEventListener('change', filterEvents);
        document.getElementById('price').addEventListener('change', filterEvents);

        function filterEvents() {
            const category = document.getElementById('category').value;
            const source = document.getElementById('source').value;
            const price = document.getElementById('price').value;
            
            let filteredEvents = events;
            
            if (category !== 'all') {
                filteredEvents = filteredEvents.filter(event => event.category === category);
            }
            
            if (source !== 'all') {
                filteredEvents = filteredEvents.filter(event => event.source === source);
            }
            
            if (price !== 'all') {
                filteredEvents = filteredEvents.filter(event => event.price === price);
            }
            
            renderEvents(filteredEvents);
        }

        // Search functionality
        document.querySelector('.search-bar input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length < 3) {
                renderEvents(events);
                return;
            }
            
            const filteredEvents = events.filter(event => 
                event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm) ||
                event.location.toLowerCase().includes(searchTerm)
            );
            
            renderEvents(filteredEvents);
        });
