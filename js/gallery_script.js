$(document).ready(function() {
  /* This will be an array of all the apothecary images */
  var apothecaryArtwork = [];
  var $html = $('html');

  /* Initialize the skrollr plugin*/
  skrollr.init({
    forceHeight: false
  });

  setCSS();
  setBG();
  createApothecary();

  console.log(apothecaryArtwork[0]);
   
  /* The following function will set my CSS as I'm not using SASS or
   * any alternative. I have found that i heavily rely on referencing
   * values of other styles in my css and therefore this function
   * will organize that referencing. */
  function setCSS() {
    /* #dummy-div.height = #main-title.height 
     * #drop-shadow-div.height = #main-title.height */
    var mainTitleHeight = $('#main-title-gallery').outerHeight(true);
    $('#drop-shadow-div-gallery').css('height', mainTitleHeight);
    $('#dummy-div-gallery').css('height', mainTitleHeight);
  }

  function setBG() {
    /* Removes any background from the gallery */
    $html.css('background-image', 'none');
    $html.css('background-color', 'black');
  }

  /* This is my constructor for the artwork object. This will store
   * all the related information for a specific image. 
   * 
   * title: the title of the work
   * bodyOfWork: the body of work the artwork belongs to
   * caption: a caption that 
   */
  function artwork(fileName, title, bodyOfWork, material, dateCreated) {
    this.fileName = fileName;
    this.title = title;
    this.bodyOfWork = bodyOfWork;
    this.material = material;
    this.dateCreated = dateCreated;

    /* Getters */
    function getFileName() {return this.fileName;}
    function getTitle() {return this.title;}
    function getBodyOfWork() {return this.bodyOfWork;}
    function getMaterial() {return this.material;}
    function getDateCreated() {return this.dateCreated;}

    /* Setters */
    function setFilePath(theFilePath) {this.filePath = theFilePath;}
    function setTitle(theTitle) {this.title = theTitle;}
    function setBodyOfWork(theBodyOfWork) {this.bodyOfWork = theBodyOfWork;}
    function setMaterial() {return this.material;}
    function setDateCreated() {return this.dateCreated;}
  }

  function createApothecary() {
    apothecaryArtwork[0] = new artwork("W_Adversity.jpg", "Adversity", "Apothecary", "22 x 28, silverpoint, and gouache on Fabriano Roma paper", "2010");
  }
});
