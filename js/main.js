
/*gloab consol, $ */
$(function () {
  'use strict';

  //  //claculate body padding top depend on navbar height
  // $('body').css('paddingTop' , $('.navbar').innerHeight());

  //smoothly Scrol to element
  $('.navbar li a').click(function (e) {

    e.preventDefault();
    $('html , body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000);

  });

  // add class active 
  $('.navbar li a').click(function () {
    $('.navbar a').removeClass('active');
    $(this).addClass('active');
    //  $(this).addClass('active').parent().siblings().find('a').removeClass('active')
  });

  //Scroll to top 





  $(".toggle_btn").click(function() {

    $('.gallery .hidden').fadeIn()
  });

  // Toggle Product Desc

  $('.products .product i').on('click', function(){


    $(this).toggleClass('fa-plus fa-minus').next('.description ').slideToggle();;
     
  });

  //The togller menu

  $('.the-togller').on('click', function(){
    $('.navbar').slideToggle();
  });
});

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}



/**Create Popup With The Image */

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {
    //VCreate Overly Element 

    let overlay = document.createElement("div");

    //add class to overlay 

    overlay.className = 'popup-overlay';

    // Append Overlay To The Body 

    document.body.appendChild(overlay);

    //Create The popup
    let popupBox = document.createElement("div");

    //Create The class popupBox

    popupBox.className = 'popup-box';

    if (img.alt !== null) {
      //Create Heding 
      let imgHeadaing = document.createElement("h3");

      //Create text for headaing
      let imgText = document.createTextNode(img.alt);

      //Append the Text to the heading
      imgHeadaing.appendChild(imgText)

      //Append the heading to the popup box
      popupBox.appendChild(imgHeadaing);

    }
    // Create The Image 
    let popupImage = document.createElement("img");

    //Set Image Source

    popupImage.src = img.src;

    //add Image To Popup Box 

    popupBox.appendChild(popupImage);

    // Apend The Popup Box To Body 

    document.body.appendChild(popupBox);

    //Cerate Clos span
    let closeButton = document.createElement("span");

    //Create the close button text
    let closeButtonText = document.createTextNode("X");

    //Append Text to Close Button

    closeButton.appendChild(closeButtonText);

    //Add class To Close button 
    closeButton.className = 'close-button';

    //add close button to the popup box 
    popupBox.appendChild(closeButton);
  });
});

//Close Popup

document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {
    //Remove The Curent Popup

    e.target.parentNode.remove();

    //Remove    Overlay 

    document.querySelector(".popup-overlay").remove();
  }
});


var myButton = document.getElementById('scroll-to-top');

window.onscroll = function () {
  'use strict';

  if (window.pageYOffset >= 800) {
    myButton.style.display = 'block';
  }else{
    myButton.style.display = 'none';
  }
};

myButton.onclick = function(){
  'use strict';

  window.scrollTo(0,0);

};

// rightClick 

// document.addEventListener('contextmenu', function(e){
//   'use strict';
//   e.preventDefault();
//   console.log('click');
// });