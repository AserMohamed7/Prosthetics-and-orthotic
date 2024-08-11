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

// <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//         integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//         crossOrigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
//         integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//         crossOrigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
//         integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//         crossOrigin="anonymous"></script>