var modalImages = [];
var imageIndex = 0;
var carouselInterval;

var projectModal = document.getElementById("project-modal");
var projects = document.getElementsByClassName("project");
var modalImage = document.getElementById("modal-image");
var nextSlideBtn = document.getElementById('next-slide');
var previousSlideBtn = document.getElementById('previous-slide');

for(let i = 0; i < projects.length; i++){
    projects[i].addEventListener('click', showProjectModal);
}

function showProjectModal(){
    var projectName = this.dataset.project;
    var modalBody = document.getElementById('modal-body');
    var slideCount = document.getElementById('slide-count');
    var siteLink = document.getElementById('site-link');
    var codeLink = document.getElementById('code-link');

    
    switch(projectName){
        case "socialmedia":
            modalBody.innerHTML = `This project was a social media platform that I made using React.js on the front-end,
            and my own Express API on the back-end. I used MongoDB as my database. It has most of the features you'd expect from any social media site;
            You can login/register for an account, create posts, comment on, like, dislike, and favorite posts, follow other
            users, and update your profile info.`;
            modalImage.src = "../images/work/socialmedia1.png";
            siteLink.href = "https://complainr.herokuapp.com";
            codeLink.href = "https://github.com/nati-alvarez/social-media-client";
            modalImages = ["../images/work/socialmedia1.png", '../images/work/socialmedia2.png', '../images/work/socialmedia3.png',
            '../images/work/socialmedia4.png', '../images/work/socialmedia5.png', '../images/work/socialmedia6.png'];
            slideCount.innerHTML = modalImages.length;
            startCarousel(modalImage, modalImages);
            break;
        case "marketing":
            modalBody.innerHTML = `When it comes to web development in general, I'm definitely more of a programmer than a designer.
            But, that doesn't mean I still can't create beatiful websites with CSS if given a design. So, I decided to prove that with this
            project. This is a design from <a href="https://dribbble.com">dribbble.com</a> that I tried to recreate with pixel-perfect precision. The designer's page
            can be found <a href="https://dribbble.com/naoshad">here.</a>`;
            modalImage.src = "../images/work/dma1.png";
            siteLink.href = "https://nati-alvarez.github.io/digital-marketing-agency/";
            codeLink.href = "https://github.com/nati-alvarez/digital-marketing-agency/";
            modalImages = ["../images/work/dma1.png", '../images/work/dma2.png', '../images/work/dma3.png',
            '../images/work/dma4.png', '../images/work/dma5.png', '../images/work/dma6.png', '../images/work/dma7.png', '../images/work/dma8.png'];
            slideCount.innerHTML = modalImages.length
            startCarousel(modalImage, modalImages);
            break;
        case "chatrbox":
            modalBody.innerHTML = `This is a basic chatting app that I built using AngularJS on the front-end and MySQL with my own Express API
            on the backend. Chat messages and friend notifications are sent in real-time using websockets with Socket.io. Users are required to signup and
            verify their account via email to use the app. Once registered users can chat with other users they have friended. Users
            can find friends with the search users feature. They can also edit basic account information such as their profile picture
            and username.`;
            modalImage.src = "../images/work/chatrbox1.png";
            siteLink.href = "http://chatrbox.surge.sh";
            codeLink.href = "https://github.com/nati-alvarez/chatapp-api";
            modalImages = ["../images/work/chatrbox1.png", '../images/work/chatrbox3.png', '../images/work/chatrbox4.png'];
            slideCount.innerHTML = modalImages.length
            startCarousel(modalImage, modalImages);
            break;
        case "ecommerce":
            modalBody.innerHTML = `This is an ecommerce storefront that I built with React/Redux and Stripe for accepting payments.
            The client app makes use of an Express API I built that accesses the product listings, orders, authorized admins,
            and creates stripe charges. It performs the basic functions that any online store would. Users can view product listings,
            add/remove items from their cart, and finally checkout when finished. The user is sent a confimation email after checkout.
            Admins can view orders made and customer info, and make changes to the product listings.`;
            modalImage.src = "../images/work/ecommerce1.png";
            siteLink.href = "http://gamersgulf.surge.sh";
            codeLink.href = "https://github.com/nati-alvarez/ecommerce-client";
            modalImages = ["../images/work/ecommerce1.png",'../images/work/ecommerce2.png', '../images/work/ecommerce3.png',
            '../images/work/ecommerce4.png', '../images/work/ecommerce5.png', '../images/work/ecommerce6.png', '../images/work/ecommerce7.png',
            '../images/work/ecommerce8.png', '../images/work/ecommerce9.png', '../images/work/ecommerce10.png', '../images/work/ecommerce11.png'];
            slideCount.innerHTML = modalImages.length
            startCarousel(modalImage, modalImages);
            break;

    }
    projectModal.display = 'flex';
    projectModal.style.display = 'flex';
}

function startCarousel(modalImage, modalImages){
    var currentSlide = document.getElementById('current-slide');
    currentSlide.innerHTML = imageIndex + 1;
    carouselInterval = setInterval(() => {
        currentSlide.innerHTML = imageIndex + 1; //add one bc image index starts from 0
        modalImage.src = modalImages[imageIndex]
        imageIndex++;
        if(imageIndex === modalImages.length) imageIndex = 0;
    }, 6000);
}

function closeModal(){
    clearInterval(carouselInterval);
    imageIndex = 0;
    projectModal.style.display = "none";
    projectModal.display = "none";
}

previousSlideBtn.addEventListener('click', () => changeSlide(-1));
nextSlideBtn.addEventListener('click', () => changeSlide(1));

function changeSlide(value){
    var currentSlide = document.getElementById('current-slide');
    clearInterval(carouselInterval);
    imageIndex += value;
    
    if(imageIndex >= modalImages.length) imageIndex = 0;
    if(imageIndex < 0) imageIndex = modalImages.length - 1;
    currentSlide.innerHTML = imageIndex + 1;

    modalImage.src = modalImages[imageIndex];
    startCarousel(modalImage, modalImages);
}