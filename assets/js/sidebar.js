/* global $ */

/* browser width and height variables */
let browserWidth = $(window).width();
let browserHeight = $(window).height();

console.log(browserHeight);
console.log(browserWidth);

/**
 * This function will hide elements on sidebar
 */
function hideElements() {
    $("#collapse_icon").html("show");
    $(".sidebar_elements").addClass("hidden").fadeOut(600, function() {});
    $("#cross").removeClass("hidden").fadeIn(600, function() {});
}
/**
 * This function will show elements on sidebar
 */
function showElements() {
    $("#collapse_icon").html("hide");
    $(".sidebar_elements").removeClass("hidden").fadeIn(600, function() {});
    $("#cross").addClass("hidden").fadeOut(600, function() {});
}

/**
 * This functions will change label value based on slider postion (on change)
 */
$(document).on("input change", "#clubs_dis_range", function() {
    $("#clubs_distance").html($(this).val() + " Miles");
});
$(document).on("input change", "#pubs_dis_range", function() {
    $("#pubs_distance").html($(this).val() + " Miles");
});
$(document).on("input change", "#bars_dis_range", function() {
    $("#bars_distance").html($(this).val() + " Miles");
});

/**
 * This function is resetting all sliders value to 10.0
 */
$("#reset_sliders").click(function() {
    $("#clubs_dis_range, #pubs_dis_range, #bars_dis_range").val("");
    $("#clubs_distance").html($("#clubs_dis_range").val() + "&nbsp;" + "Miles");
    $("#pubs_distance").html($("#pubs_dis_range").val() + "&nbsp;" + "Miles");
    $("#bars_distance").html($("#bars_dis_range").val() + "&nbsp;" + "Miles");
});

/**
 * This function will run "Map function from script.js file
 */
$("#apply_sliders").click(function() {
    initMap();
});


/**
 * This function will change classes for webite elements - take user back to main page
 */
$(".go_back").click(function() {
    $(".cross_hide").removeClass("hidden");
    $("#map_container").addClass("hidden");
    $("#mainbox_postcode").val("");
    $(".styled-checkbox").prop("checked", false);
    let tmpAnimation = 0;
    let element = $("#sidebar_collapse_icon");
    document.documentElement.style
        .setProperty("--sBar_width", "70px");
    $({ degrees: tmpAnimation + 180 }).animate({ degrees: tmpAnimation }, {
        duration: 300,
        step: function(now) {
            element.css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
    hideElements();
});

/**
 * This function will change the size of the sidebar when width point is match
 */
$("#sidebar_collapse_icon").click(function() {
    let toggle_q = $("#sidebar_blue").width();
    let tmpAnimation = 0;
    let element = $("#sidebar_collapse_icon");
    switch (toggle_q) {
        case 70:
            document.documentElement.style
                .setProperty("--sBar_width", "360px");
            tmpAnimation = tmpAnimation - 180;
            $({ degrees: tmpAnimation - 180 }).animate({ degrees: tmpAnimation }, {
                duration: 300,
                step: function(now) {
                    element.css({
                        transform: "rotate(" + now + "deg)"
                    });
                }
            });
            showElements();
            break;
        case 360:
            document.documentElement.style
                .setProperty("--sBar_width", "70px");
            $({ degrees: tmpAnimation + 180 }).animate({ degrees: tmpAnimation }, {
                duration: 300,
                step: function(now) {
                    element.css({
                        transform: "rotate(" + now + "deg)"
                    });
                }
            });
            hideElements();
            break;
    }
});
