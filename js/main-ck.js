(function(e){"use strict";Pace.on("done",function(){setTimeout(function(){e("#preloader").animate({opacity:0},800)},300);setTimeout(function(){e("#preloader").css("display","none")},1100)});var t=e(window).height();e(document).ready(function(){smoothScroll.init({speed:500,easing:"easeInOutQuad",updateURL:!0});e.fn.countDown&&jQuery("#countdown").countDown({targetDate:{day:7,month:5,year:2016,hour:0,min:0,sec:0}});(function(){[].slice.call(document.querySelectorAll(".menu")).forEach(function(e){var t=e.querySelectorAll(".menu__link"),n=function(t){t.preventDefault();var n=t.target.parentNode;if(classie.has(n,"menu__item--current"))return!1;classie.remove(e.querySelector(".menu__item--current"),"menu__item--current");classie.add(n,"menu__item--current")};[].slice.call(t).forEach(function(e){e.addEventListener("click",n)})})})(window);var n=e("#navbar");n.on("click","a",null,function(){n.collapse("hide")});e(".hero").height(t);e(window).resize(function(){var t=e(window).height();e(".hero").height(t)});e.fn.kenburnsy&&e(function(){e("#kenburns").kenburnsy({fullscreen:!0})});e('input[name="attend"]').click(function(){if(e("#yes").is(":checked")){e('#guests, #rsvp_song, input[name="email"]').fadeIn();e("#comments").attr("placeholder","Comments");e('input[name="email"]').attr("placeholder","E-Mail *")}else{e('#guests, #rsvp_song, input[name="email"]').fadeOut();e("#message").fadeIn();e("#message").val("").attr("placeholder","Regrets");e('input[name="guest"]').prop("checked",!1);e('#rsvp_guest_info input[type="text"], #rsvp_guest_info input[type="email"], #rsvp_song input[type="text"]').val("")}});e(function(){var t=e("#rsvp_form"),n=e("#form-messages");e(t).submit(function(r){r.preventDefault();var i=e("input[name='attend']:checked").val(),s="",o=!0;if(!e("input[name='attend']").is(":checked")){alert("Please select whether or not you will be attending");o=!1}if(!e.trim(e("#rsvp_form input[name=name]").val())){e("#rsvp_form input[name=name]").addClass("error");e("#name_error").show();o=!1}if(!e.trim(e("#rsvp_form input[name=email]").val())&&i=="yes"){e("#rsvp_form input[name=email]").addClass("error");e("#email_error").show();o=!1}var u=e(t).serialize();console.log(u);o!==!1?e.ajax({beforeSend:function(){e("#loading").show();e("#submit").attr("value","loading").prop("disabled",!0)},type:"POST",url:e(t).attr("action"),data:u}).done(function(t){e(n).removeClass("error");e(n).addClass("success");e(n).text(t);e("#loading").hide();e("#name").val("");e("#email").val("");e("#guests").find("option:eq(0)").prop("selected",!0);e("#song_name").val("");e("#song_artist").val("");e("#message").val("");e("#submit").attr("value","Submit").prop("disabled",!1);e(".error_message").hide()}).fail(function(t){e("#loading").hide();e("#submit").attr("value","Submit").prop("disabled",!1);e(n).removeClass("success");e(n).addClass("error");t.responseText!==""?e(n).text(t.responseText):e(n).text("Oops! An error occured and your message could not be sent.")}):e("#submit").attr("value","Submit").prop("disabled",!1)})})})})(jQuery);