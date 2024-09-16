//load header and footer
$(document).ready(function() {
    $("#header").load("/html/header.html");
    $("#footer").load("/html/footer.html");
});

//accordion structure for FAQ
$(document).ready(function() {
    $("#accordion h3").click(function() {
      $(this).next().slideToggle(300); 
      $("#accordion li").removeClass("active"); 
      $(this).parent().toggleClass("active"); 
    });
  });

  //scroll to top/bottom buttons
  $(document).ready(function() {
  
    // Scroll to top button
    $("#scroll-top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, 500); 
    });
  
    // Scroll to bottom button
    $("#scroll-bottom").click(function(event) {
      event.preventDefault(); 
      $("html, body").animate({scrollTop: $(document).height() }, 500); 
    });
  
  });