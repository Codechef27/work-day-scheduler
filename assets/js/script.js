
// clock and date
 var currentDayEl = function() {
    var currentDay = moment ();
    $("#currentDay").html(currentDay.format('dddd, MMMM Do. h:mm a'));
};
currentDayEl();

// var workHours = [
//     moment().hour(9).format('ha'),
//     moment().hour(10).format('ha'),
//     moment().hour(11).format('ha'),
//     moment().hour(12).format('ha'),
//     moment().hour(13).format('ha'),
//     moment().hour(14).format('ha'), 
//     moment().hour(15).format('ha'),
//     moment().hour(16).format('ha'),
//     moment().hour(17).format('ha')
// ];

// // create time blocks
// var container = $(".container");
// var timeBlockEl = $("<div>").addClass("row time-block");
// var hourEl = $("<div>").addClass("col-1 hour");
// var inputEl = $("<textarea>").addClass("col-10");
// var saveBtn = $("<button>").addClass("col-1 saveBtn").append(<i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>);


// for (var i = 0; i < workHours.length; i++){
//    container.append(timeBlockEl.attr({id: "row"(i + 9)}).add(hourEl));

// }