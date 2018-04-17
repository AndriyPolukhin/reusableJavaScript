   function debounce(func, wait = 20, immediate = true) {
       var timeout;
       return function () {
           var context = this,
               args = arguments;
           var later = function () {
               timeout = null;
               if (!immediate) func.apply(context, args);
           };
           var callNow = immediate && !timeout;
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
           if (callNow) func.apply(context, args);
       };
   };


   // 1. Select all the images on a page
   const sliderImages = document.querySelectorAll('.slide-in');

   // 2. Create a function that checks slids
   function checkSlide(e) {
       // 2.1 Loop over every image and indicate where it should be shown
    //    console.log(window.scrollY);
       
        sliderImages.forEach(sliderImage => {
        // Half way through the image
            const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
        //   console.log(slideInAt);
        // Bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
        });
   }

   // 3. Add an EventLIstener for scroll
   window.addEventListener('scroll', debounce(checkSlide));

    


