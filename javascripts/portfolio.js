(function() {
  $(document).ready(function() {

    var $animation_elements = $('.section');
    $animation_elements.push($('.line'));
    var $window = $(window);
    var $document = $(document);

    var showName = function(position, text, index, time) {
      $(position).append(text[index++]);
      setTimeout(function() {
        showName(position, text, index, time);
      }, time);
    };

    showName(".intro-name", "Hi, I'm Veronika Benkeser", 0, 70);
    setTimeout(function() {
      showName(".intro-title", "Aspiring Software Developer", 0, 90);
    }, 3700);

    $window.on('scroll resize', animate);

    function animate() {
      var winheight = $window.height();
      var fullheight = $document.height();
      var wintop = $window.scrollTop();
      if (wintop > 0) {
        $('#nav').css('background-color', 'black');
      } else {
        $('#nav').css('background-color', 'rgba(255, 255, 255, 0.5)');
      }

      $animation_elements.each(function() {
        var $elm = $(this);

        if ($elm.hasClass('animated')) {
          return true;
        }
        var top = $elm.offset().top;

        if (wintop > (top - (winheight * .75))) {

          $elm.addClass('animated');
        }
      });
    }

    $("#scrollSection").click(function() {
      $("html, body").animate({
        scrollTop: $("#about").offset().top-60
      }, 500);
    });

  });
})();