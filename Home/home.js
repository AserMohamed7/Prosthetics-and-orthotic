const mainPosts = document.querySelectorAll('.main-post');
const posts = document.querySelectorAll('.post');

let currentIndex = 0;

function updateActivePost(index) {
    mainPosts.forEach((post, i) => {
        if (i === index) {
            post.classList.add('main-post--active');
            post.classList.remove('main-post--not-active');
        } else {
            post.classList.remove('main-post--active');
            post.classList.add('main-post--not-active');
        }
    });

    posts.forEach((post, i) => {
        if (i === index) {
            post.classList.add('post--active');
        } else {
            post.classList.remove('post--active');
        }
    });
}

function moveToNextPost() {
    currentIndex = (currentIndex + 1) % mainPosts.length;
    updateActivePost(currentIndex);
}

function moveToPreviousPost() {
    currentIndex = (currentIndex - 1 + mainPosts.length) % mainPosts.length;
    updateActivePost(currentIndex);
}

posts.forEach((post, index) => {
    post.addEventListener('click', () => {
        updateActivePost(index);
        currentIndex = index;
    });
});

// Auto-slide functionality
setInterval(moveToNextPost, 5000);

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Show/Hide Navbar on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});