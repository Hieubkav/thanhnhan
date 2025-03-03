document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog-posts-container');
    const categoryButtons = document.querySelectorAll('[data-category]');
    const postsPerPage = 6;
    let currentPage = 1;
    let currentCategory = 'all';

    // Get category icon
    function getCategoryIcon(category) {
        const icons = {
            'tech': 'laptop-code',
            'environment': 'leaf',
            'company': 'building'
        };
        return icons[category] || 'article';
    }

    // Create blog post card
    function createBlogPostCard(post) {
        return `
            <article class="neumorph-card group" data-aos="fade-up">
                <div class="relative overflow-hidden rounded-t-lg">
                    <img src="${post.image}" 
                         alt="${post.title}"
                         class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-500 text-white text-sm px-3 py-1 rounded-full opacity-90">
                            <i class="fas fa-${getCategoryIcon(post.category)} mr-1"></i> ${post.categoryName}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-3 group-hover:text-green-500 transition-colors">
                        <a href="#" onclick="showBlogPost(${post.id}); return false;">${post.title}</a>
                    </h2>
                    <p class="text-gray-400 mb-4">
                        ${post.excerpt}
                    </p>
                    <div class="flex items-center text-gray-400 text-sm">
                        <i class="far fa-calendar-alt text-green-500 mr-2"></i>
                        ${post.date}
                        <span class="mx-2">•</span>
                        <i class="far fa-clock text-green-500 mr-2"></i>
                        ${post.readTime}
                    </div>
                </div>
            </article>
        `;
    }

    // Filter and display posts
    function filterAndDisplayPosts(category, page = 1) {
        currentCategory = category;
        currentPage = page;

        const filteredPosts = category === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category === category);

        const start = (page - 1) * postsPerPage;
        const paginatedPosts = filteredPosts.slice(start, start + postsPerPage);
        
        blogContainer.innerHTML = paginatedPosts.map(createBlogPostCard).join('');
        
        // Update pagination
        const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
        updatePagination(totalPages);

        // Reinitialize AOS for new elements
        AOS.refresh();
    }

    // Category button click handler
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'text-green-500');
                btn.classList.add('text-gray-400');
            });
            button.classList.add('active', 'text-green-500');
            button.classList.remove('text-gray-400');
            
            // Filter posts
            filterAndDisplayPosts(button.dataset.category, 1);
        });
    });

    // Update pagination controls
    function updatePagination(totalPages) {
        const paginationContainer = document.querySelector('.pagination');
        if (!paginationContainer) return;

        let paginationHTML = '';

        // Previous button
        paginationHTML += `
            <button class="neumorph-btn w-10 h-10 rounded-full flex items-center justify-center ${currentPage === 1 ? 'text-gray-600' : 'text-gray-400 hover:text-green-500'}"
                    ${currentPage === 1 ? 'disabled' : `onclick="changePage(${currentPage - 1})"`}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 || // First page
                i === totalPages || // Last page
                (i >= currentPage - 1 && i <= currentPage + 1) // Pages around current page
            ) {
                paginationHTML += `
                    <button class="neumorph-btn w-10 h-10 rounded-full flex items-center justify-center 
                                 ${i === currentPage ? 'text-green-500' : 'text-gray-400 hover:text-green-500'}"
                            onclick="changePage(${i})">
                        ${i}
                    </button>
                `;
            } else if (
                i === currentPage - 2 ||
                i === currentPage + 2
            ) {
                paginationHTML += `
                    <button class="neumorph-btn w-10 h-10 rounded-full flex items-center justify-center text-gray-400">
                        ...
                    </button>
                `;
            }
        }

        // Next button
        paginationHTML += `
            <button class="neumorph-btn w-10 h-10 rounded-full flex items-center justify-center ${currentPage === totalPages ? 'text-gray-600' : 'text-gray-400 hover:text-green-500'}"
                    ${currentPage === totalPages ? 'disabled' : `onclick="changePage(${currentPage + 1})"`}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;

        paginationContainer.innerHTML = paginationHTML;
    }

    // Show blog post detail
    window.showBlogPost = function(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50';
        modal.onclick = e => {
            if (e.target === modal) modal.remove();
        };

        modal.innerHTML = `
            <div class="neumorph-card max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onclick="event.stopPropagation()">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">${post.title}</h2>
                    <button class="text-gray-400 hover:text-green-500" onclick="this.closest('.fixed').remove()">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="mb-6">
                    <span class="bg-green-500 text-white text-sm px-3 py-1 rounded-full opacity-90">
                        <i class="fas fa-${getCategoryIcon(post.category)} mr-1"></i>
                        ${post.categoryName}
                    </span>
                    <span class="ml-4">
                        <i class="far fa-calendar-alt text-green-500 mr-2"></i>
                        ${post.date}
                    </span>
                    <span class="ml-4">
                        <i class="far fa-clock text-green-500 mr-2"></i>
                        ${post.readTime}
                    </span>
                </div>
                <div class="prose prose-invert prose-green max-w-none text-gray-400">
                    ${post.content}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    // Global function for pagination
    window.changePage = function(page) {
        filterAndDisplayPosts(currentCategory, page);
    }

    // Initial load
    filterAndDisplayPosts('all', 1);
});