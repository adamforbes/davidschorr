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
    var mainTitleHeight = $('#main-title').outerHeight(true);
    $('#dummy-div').css('height', mainTitleHeight);
    $('#drop-shadow-div').css('height', mainTitleHeight);
  }

  function setBG() {
    var imgPath = $('html').css('background-image');
    /* Unfortunately JS is a client side language and therefore
     * I'm not able to look at local files. Ideally this would
     * check the folder and see how many files there are instead
     * of hardcoding it... whatever. */
    var numFiles = 6;
    var rand = Math.floor((Math.random() * numFiles));

    imgPath = imgPath.replace("bg_0.jpg", "bg_" + rand + ".jpg");

    $('html').css('background-image', imgPath);
  }
});
