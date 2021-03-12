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


// nav-bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

  bullet.addEventListener("click" , (e) =>{

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    });
  });

});

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};


//Product 

var size1=document.querySelector('#size1');
//hidden the aize section 
size1.classList.add('hide-size');
// prodcut card
var product1 = document.querySelector('#product1');
//main image

var img1 = document.querySelector('#img1');
//card footer
var footer1 = document.querySelector('#footer1');

var colImg1 = document.querySelector('#color1');
var colImg2 = document.querySelector('#color2');
var colImg3 = document.querySelector('#color3');


var col1 = document.querySelector('#col1');
var col2 = document.querySelector('#col2');
var col3 = document.querySelector('#col3');

colImg1.classList.add('active');

product1.addEventListener('mouseover' ,function(){
  img1.src = 'imgs/t-shirt/back.jpg';
  size1.classList.remove('hide-size');
  footer1.classList.add('footup');

});
product1.addEventListener('mouseout' ,function(){

  img1.src = 'imgs/t-shirt/1.jpg';
  size1.classList.add('hide-size');
  footer1.classList.remove('footup');
  
});
col1.addEventListener('mouseover' ,function(){

  colImg1.classList.add('active');
  colImg1.classList.remove('active');
  event.stopImmediatePropagation();
  size1.classList.remove('hide-size');
  footer1.classList.add('footup');
  img1.src = 'imgs/t-shirt/1-1.jpg';
  
});
col2.addEventListener('mouseover' ,function(){

  colImg2.classList.add('active');
  colImg2.classList.remove('active');
  event.stopImmediatePropagation();
  size1.classList.remove('hide-size');
  footer1.classList.add('footup');
  img1.src = 'imgs/t-shirt/1-2.jpg';
  
});
col3.addEventListener('mouseover' ,function(){

  colImg3.classList.add('active');
  colImg3.classList.remove('active');
  event.stopImmediatePropagation();
  size1.classList.remove('hide-size');
  footer1.classList.add('footup');
  img1.src = 'imgs/t-shirt/1-3.jpg';
  
});
