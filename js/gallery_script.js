$(document).ready(function() {
  /* Initialize the skrollr plugin*/
  skrollr.init({
    forceHeight: false
  });

  setCSS();
  setBG();
   
  /* The following function will set my CSS as I'm not using SASS or
   * any alternative. I have found that i heavily rely on referencing
   * values of other styles in my css and therefore this function
   * will organize that referencing. */
  function setCSS() {
    /* #dummy-div.height = #main-title.height 
     * #drop-shadow-div.height = #main-title.height */
    var mainTitleHeight = $('#main-title-gallery').outerHeight(true);
    $('#dummy-div-gallery').css('height', mainTitleHeight);
    $('#drop-shadow-div-gallery').css('height', mainTitleHeight);
  }

  function setBG() {
    /* Removes any background from the gallery */
    $('html').css('background-image', 'none');
  }

  /* This is my constructor for the image object. This will store
   * all the related information for a specific image. */
  function image(title, bodyOfWork, caption, date) {
    this.title = title;
    this.bodyOfWork = bodyOfWork;
    this.caption = ;
  }
});
