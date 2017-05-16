$(document).ready(function () {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        closeOnBgClick: true,
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $("#consult-phone").inputmask("+9(999) 999-99-99");
    $("#sell-phone").inputmask("+9(999) 999-99-99");


   var nav = $('nav[role="navigation"]');

    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function() {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });


    $('.bxslider').bxSlider();

    // $( ".cost-range" ).slider({
    //     range: "min",
    //     value: 100,
    //     min: 0,
    //     max: 2400,
    //     step: 100,
    //
    //     slide: function( event, ui ) {
    //         $( "#maxRange" ).html(ui.value);
    //         $('#costNumber').attr('value', ui.value);
    //
    //     },
    //
    //     change: function(event, ui) {
    //         $('#costNumber').attr('value', ui.value);
    //         $( "#maxRange" ).html(ui.value);
    //     }
    //
    // });
    //
    //     $('.minus').click(function () {
    //         var $input = $(this).parent().find('input');
    //         var count = parseInt($input.val()) - 100;
    //         count = count < 100 ? 100 : count;
    //         $input.val(count);
    //         $input.change();
    //         $('.cost-range').slider('value',$input.val());
    //         $( "#maxRange" ).html($input.val());
    //     });
    //     $('.plus').click(function () {
    //         var $input = $(this).parent().find('input');
    //         $input.val(parseInt($input.val()) + 100);
    //         $input.change();
    //         $('.cost-range').slider('value',$input.val());
    //         $( "#maxRange" ).html($input.val());
    //
    //     });




});