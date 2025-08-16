document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.navbar-toggle');
    const navCollapse = document.querySelector('.navbar-collapse');
    
    if (navToggle && navCollapse) {
        navToggle.addEventListener('click', function() {
            navCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navCollapse.contains(e.target)) {
                navCollapse.classList.remove('show');
            }
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = navCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navCollapse.classList.remove('show');
            });
        });
    }
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // First phase: fade out items that should be hidden
                const itemsToHide = [];
                const itemsToShow = [];
                
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        itemsToShow.push(card);
                    } else {
                        itemsToHide.push(card);
                    }
                });
                
                // Phase 1: Hide unwanted items
                itemsToHide.forEach(card => {
                    card.style.transition = 'opacity 0.3s ease';
                    card.style.opacity = '0';
                });
                
                // Phase 2: Remove hidden items and show new ones (after fade out completes)
                setTimeout(() => {
                    // Remove hidden items from display
                    itemsToHide.forEach(card => {
                        card.style.display = 'none';
                    });
                    
                    // Prepare new items (invisible but in layout)
                    itemsToShow.forEach(card => {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                    });
                    
                    // Phase 3: Fade in new items (small delay for layout to settle)
                    setTimeout(() => {
                        itemsToShow.forEach(card => {
                            card.style.transition = 'opacity 0.3s ease';
                            card.style.opacity = '1';
                        });
                    }, 50);
                }, 300);
            });
        });
        
        // Handle URL parameters for filtering
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        
        if (filterParam && filterParam !== 'all') {
            const filterButton = document.querySelector(`[data-filter="${filterParam}"]`);
            if (filterButton) {
                filterButton.click();
            }
        }
    }
    
    // Image lazy loading enhancement
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Check if image is already loaded
                    if (img.complete && img.naturalWidth !== 0) {
                        img.style.opacity = '1';
                        observer.unobserve(img);
                    } else {
                        img.style.transition = 'opacity 0.3s ease';
                        
                        img.addEventListener('load', function() {
                            this.style.opacity = '1';
                        }, { once: true });
                        
                        // Fallback: show image after a short delay if load event doesn't fire
                        setTimeout(() => {
                            if (img.style.opacity !== '1') {
                                img.style.opacity = '1';
                            }
                        }, 1000);
                        
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before the image comes into view
        });
        
        images.forEach(img => {
            // Only hide images that haven't loaded yet
            if (!img.complete || img.naturalWidth === 0) {
                img.style.opacity = '0';
                imageObserver.observe(img);
            }
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }
    
    // Simple lightbox for gallery images
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            // Add lightbox styles
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: pointer;
            `;
            
            const content = lightbox.querySelector('.lightbox-content');
            content.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;
            
            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.style.cssText = `
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            `;
            
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: -40px;
                background: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            function closeLightbox() {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            closeBtn.addEventListener('click', closeLightbox);
            
            // Close on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            });
        });
        
        // Add cursor pointer to indicate clickable
        img.style.cursor = 'pointer';
    });
    
    // Image Carousel Functionality
    const carousels = document.querySelectorAll('.image-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-controls.prev');
        const nextButton = carousel.querySelector('.carousel-controls.next');
        const indicators = carousel.querySelector('.carousel-indicators');
        const counter = carousel.querySelector('.carousel-counter');
        
        if (!track || slides.length === 0) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Create indicators if container exists
        if (indicators) {
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('button');
                indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
                indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
                indicators.appendChild(indicator);
            }
        }
        
        // Update counter
        function updateCounter() {
            if (counter) {
                counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
            }
        }
        
        // Update carousel display
        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update indicators
            if (indicators) {
                const indicatorButtons = indicators.querySelectorAll('.indicator');
                indicatorButtons.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentSlide);
                });
            }
            
            // Update captions
            const captions = carousel.querySelectorAll('.carousel-caption');
            captions.forEach((caption, index) => {
                caption.classList.toggle('active', index === currentSlide);
            });
            
            // Update navigation buttons
            if (prevButton) {
                prevButton.style.display = totalSlides > 1 ? 'flex' : 'none';
            }
            if (nextButton) {
                nextButton.style.display = totalSlides > 1 ? 'flex' : 'none';
            }
            
            updateCounter();
        }
        
        // Navigation functions
        function goToSlide(slideIndex) {
            currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - 1));
            updateCarousel();
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Event listeners
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }
        
        // Indicator click handlers
        if (indicators) {
            indicators.addEventListener('click', (e) => {
                if (e.target.classList.contains('indicator')) {
                    const indicatorButtons = Array.from(indicators.querySelectorAll('.indicator'));
                    const clickedIndex = indicatorButtons.indexOf(e.target);
                    if (clickedIndex !== -1) {
                        goToSlide(clickedIndex);
                    }
                }
            });
        }
        
        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        const minSwipeDistance = 50;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        carousel.addEventListener('touchmove', (e) => {
            // Prevent scrolling while swiping
            if (Math.abs(startX - e.touches[0].clientX) > 10) {
                e.preventDefault();
            }
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const swipeDistance = startX - endX;
            
            if (Math.abs(swipeDistance) >= minSwipeDistance) {
                if (swipeDistance > 0) {
                    nextSlide(); // Swiped left, go to next
                } else {
                    prevSlide(); // Swiped right, go to previous
                }
            }
        }, { passive: true });
        
        // Auto-play (optional, disabled by default)
        // Uncomment the following code to enable auto-play
        /*
        let autoPlayInterval;
        const autoPlayDelay = 5000; // 5 seconds
        
        function startAutoPlay() {
            if (totalSlides > 1) {
                autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
            }
        }
        
        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }
        
        // Pause auto-play on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Start auto-play
        startAutoPlay();
        */
        
        // Initialize carousel
        updateCarousel();
    });
});