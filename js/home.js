document.addEventListener('DOMContentLoaded', function() {
    // Load company story
    const companyStoryElement = document.getElementById('company-story');
    if (companyStoryElement) {
        companyStoryElement.innerHTML = companyStory.content;
    }

    // Load milestones
    const milestonesElement = document.getElementById('milestones');
    if (milestonesElement) {
        milestonesElement.innerHTML = companyStory.milestones.map(milestone => `
            <div class="relative" data-aos="fade-up">
                <div class="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div class="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div class="ml-8 md:ml-0 md:w-1/2 ${milestone.year % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} pb-8">
                    <div class="neumorph-card p-6">
                        <h3 class="text-xl font-bold mb-2">${milestone.year}</h3>
                        <h4 class="text-green-500 font-semibold mb-2">${milestone.title}</h4>
                        <p class="text-gray-400">${milestone.description}</p>
                        ${milestone.image ? `<img src="${milestone.image}" alt="${milestone.title}" class="w-full mt-4 rounded-lg">` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Load latest blog posts
    const latestPostsElement = document.getElementById('latest-posts');
    if (latestPostsElement && blogPosts) {
        const latestPosts = blogPosts.slice(0, 3);
        latestPostsElement.innerHTML = latestPosts.map(post => `
            <article class="neumorph-card group" data-aos="zoom-in">
                <div class="relative overflow-hidden rounded-t-lg">
                    <img src="${post.image}" 
                         alt="${post.title}" 
                         class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-500 text-white text-sm px-3 py-1 rounded-full opacity-90">
                            ${post.categoryName}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
                        <a href="blog.html" onclick="showBlogPost(${post.id}); return false;">
                            ${post.title}
                        </a>
                    </h3>
                    <p class="text-gray-400 mb-4 line-clamp-3">${post.excerpt}</p>
                    <div class="flex items-center text-gray-400 text-sm">
                        <i class="far fa-calendar-alt text-green-500 mr-2"></i>
                        ${post.date}
                        <span class="mx-2">•</span>
                        <i class="far fa-clock text-green-500 mr-2"></i>
                        ${post.readTime}
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disable: window.innerWidth < 640
    });
});