// Common JavaScript functionality for JK App prototype

// Update status bar time
function updateStatusBarTime() {
    const timeElement = document.querySelector('.status-bar-time');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// Initialize status bar time and update it every minute
function initStatusBarTime() {
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000);
}

// Handle tab bar navigation
function initTabBar() {
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all tabs
            tabItems.forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // In a real app, this would navigate to the corresponding page
            // For the prototype, we'll just show a message
            console.log(`Navigating to ${this.getAttribute('data-tab')}`);
        });
    });
}

// Handle like button interactions
function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const likeCount = this.querySelector('.like-count');
            const icon = this.querySelector('i');

            if (icon.classList.contains('far')) {
                // Like
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ff2d55';

                if (likeCount) {
                    const count = parseInt(likeCount.textContent) || 0;
                    likeCount.textContent = count + 1;
                }
            } else {
                // Unlike
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';

                if (likeCount) {
                    const count = parseInt(likeCount.textContent) || 0;
                    if (count > 0) {
                        likeCount.textContent = count - 1;
                    }
                }
            }
        });
    });
}

// Handle bookmark button interactions
function initBookmarkButtons() {
    const bookmarkButtons = document.querySelectorAll('.bookmark-button');

    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');

            if (icon.classList.contains('far')) {
                // Bookmark
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#007aff';
            } else {
                // Unbookmark
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });
}

// Handle follow button interactions
function initFollowButtons() {
    const followButtons = document.querySelectorAll('.follow-button');

    followButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('primary-button')) {
                // Unfollow
                this.classList.remove('primary-button');
                this.classList.add('secondary-button');
                this.textContent = 'Following';
            } else {
                // Follow
                this.classList.remove('secondary-button');
                this.classList.add('primary-button');
                this.textContent = 'Follow';
            }
        });
    });
}

// Handle segment control
function initSegmentControl() {
    const segmentItems = document.querySelectorAll('.segment-item');

    segmentItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all segments
            segmentItems.forEach(segment => segment.classList.remove('active'));

            // Add active class to clicked segment
            this.classList.add('active');

            // In a real app, this would show the corresponding content
            console.log(`Showing ${this.getAttribute('data-segment')} content`);
        });
    });
}

// Initialize all common functionality
function initCommon() {
    initStatusBarTime();
    initTabBar();
    initLikeButtons();
    initBookmarkButtons();
    initFollowButtons();
    initSegmentControl();

    // Add any other initialization here
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initCommon); 