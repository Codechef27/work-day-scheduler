
// clock and date
 var currentDayEl = function() {
    var currentDay = moment ();
    $("#currentDay").html(currentDay.format('dddd, MMMM Do. h:mm a'));
};
currentDayEl();

var workHours = [
    moment().hour(9).format ('h a'),
    moment().hour(10).format('h a'),
    moment().hour(11).format('h a'),
    moment().hour(12).format('h a'),
    moment().hour(13).format('h a'),
    moment().hour(14).format('h a'), 
    moment().hour(15).format('h a'),
    moment().hour(16).format('h a'),
    moment().hour(17).format('h a')
];
//build content elements
for (var i = 0; i < workHours.length; i++){
//append div container with 9 rows    
    var container = $(".container")
    var timeBlockEl = $("<div>")
    .addClass("row time-block")
    .attr({id: "row" + ( i + 9)})
    $(".container").append(timeBlockEl);
//append time and connected workHours
    var hourEl = $("<div>")
    .addClass("col-1 hour")
    .text(workHours[i])
    .attr({id: i+9 })
    $(timeBlockEl).append(hourEl);
// append textarea space
    var inputEl = $("<textarea>")
    .addClass("col-10 textarea")
    .attr({id:"time-block" + (i + 9)})
    $(timeBlockEl).append(inputEl);
// append icon and savebtn
    var saveBtn = $("<button>")
    .addClass("col-1 saveBtn")
    .html("<i class='fas fa-save'></i>").addClass("fa-2x")
    .attr({id: (i + 9), type: "button"})
    .on("click", function(){})
    $(timeBlockEl).append(saveBtn);  
}

