$(document).ready(function () {


      /*   Elements for aniview scroll */
      $(".future__item").addClass('aniview')
      $(".future__item").attr("data-av-animation", "animate__animated animate__fadeInLeft")

      $("h2").addClass('aniview h2_animate')
      $("h2").attr("data-av-animation", "animate__animated animate__fadeInLeft")




      var options = {
            animateClass: 'animated', // for v3 or 'animate__animated' for v4
            animateThreshold: 100,
            scrollPollInterval: 20
      }
      $('.aniview').AniView(options);
      console.log('privet')



});
