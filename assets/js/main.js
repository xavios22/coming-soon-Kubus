
$(document).ready(function () {

    "use strict";

    /*
    ----------------------------------------------------------------------
    Preloader
    ----------------------------------------------------------------------
     */
    $(".loader").delay(700).fadeOut();
    $(".animationload").delay(700).fadeOut("fast");
    /*

----------------------------------------------------------------------
Watch
----------------------------------------------------------------------
 */
    if ($.find('#watch')[0]) {

        $('#watch').countDown({
            targetDate: {
                'day': 1,
                'month': 6,
                'year': 2020,
                'hour': 9,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
        //enter the count down date using the format year, month, day, time: hour, min, sec

        if ($('.day_field .top').html() == "0") $('.day_field').css('display', 'none');
    }

});