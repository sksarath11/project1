
(function () {
    "use strict";
    //selecting all required elements
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".gallery .image");
  
  
  
    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 100,
      once: true
    });
    ScrollReveal().reveal('.main-title', { delay: 50, origin: 'left' });
    ScrollReveal().reveal('.haboutme, .hportfolio, .hservices, .hresume, .htestimonial', { delay: 80, origin: 'right' });
    ScrollReveal().reveal('#aboutme, #portfolio, #services, #resume, #testimonial', {
      delay: 100, // Optional delay in milliseconds
      interval: 150, // Optional interval between each element
      once: true // Reveals only once
    });
  
    ScrollReveal().reveal('.about p', { delay: 30, origin: 'right' });
    ScrollReveal().reveal('.bar', { interval: 30, origin: 'left' });
    ScrollReveal().reveal('.about img', { interval: 30, origin: 'left' });
    ScrollReveal().reveal('.project-counter-wrp', { interval: 30, origin: 'bottom' });
  
  
    ScrollReveal().reveal('.wrapper .items', { interval: 15, origin: 'left' });
  
  
  
    ScrollReveal().reveal('.card-content h3', { interval: 15, origin: 'left' });
  
  
    ScrollReveal().reveal('.resume-title', { interval: 15, origin: 'left' });
  
  
  
  
  
  
  
  
    window.onload = () => { //after window loaded
      filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
          filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
          selectedItem.target.classList.add("active"); //add that active class on user selected item
          let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
          filterImg.forEach((image) => {
            let filterImges = image.getAttribute("data-name"); //getting image data-name value
            //if user selected item data-name value is equal to images data-name value
            //or user selected item data-name value is equal to "all"
            if ((filterImges == filterName) || (filterName == "all")) {
              image.classList.remove("hide"); //first remove the hide class from the image
              image.classList.add("show"); //add show class in image
            } else {
              image.classList.add("hide"); //add hide class in image
              image.classList.remove("show"); //remove show class from the image
            }
          });
        }
      }
      for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
      }
    }
  
    //fullscreen image preview function
    //selecting all required elements
    const previewBox = document.querySelector(".preview-box"),
      categoryName = previewBox.querySelector(".title p"),
      previewImg = previewBox.querySelector("img"),
      closeIcon = previewBox.querySelector(".icon"),
      shadow = document.querySelector(".shadow");
  
    function preview(element) {
      //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
      document.querySelector("body").style.overflow = "hidden";
      let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
      let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
      previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
      categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
      previewBox.classList.add("show"); //show the preview image box
      shadow.classList.add("show"); //show the light grey background
      closeIcon.onclick = () => { //if user click on close icon of preview box
        previewBox.classList.remove("show"); //hide the preview box
        shadow.classList.remove("show"); //hide the light grey background
        document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
      }
    }
  
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  
  
  
  
  
  
  
  })()
  