// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// clock and date--------------------------------------------->
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
//build content elements------------------------->
for (var i = 0; i < workHours.length; i++){
//append div container with 9 rows--------------->    
    var container = $(".container")
    var timeBlockEl = $("<div>")
    .addClass("row time-block")
    .attr({id: (i + 9) + "row",})
    $(".container").append(timeBlockEl);
//append time and connected workHours------------->
    var hourEl = $("<div>")
    .addClass("col-1 hour")
    .text(workHours[i])
    .attr({id: i + 9} )
    $(timeBlockEl).append(hourEl);
// append textarea space------------------------->
    var inputEl = $("<textarea>")
    .addClass("col-10 textarea")
    .attr({id:(i + 9) + "time-block"})
    $(timeBlockEl).append(inputEl);
    // auditTimeBlock(inputEl);
   
// append icon and savebtn----------------------->
    var saveBtn = $("<button>")
    .addClass("col-1 saveBtn")
    .html("<i class='fas fa-save'></i>").addClass("fa-2x text-warning")
    .attr({ id:( i + 9),type: "button",})
    .on("click", function(){})
    $(timeBlockEl).append(saveBtn);  
    
}

var currentTime = moment().hour();
$('.textarea').each(function () {
  var time = parseInt($(this).attr("id"));

  // To check the time and add the classes for background indicators-->
  if (time < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  }
  else if (time === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  }
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

  }
})
// if(localStorage.getItem(i)){
//   document.getElementById(i).value = localStorage.getItem(i);
// }
// //saveTasks--------------------------------------------------------->
function saveTask(){
  $(".saveBtn").on("click",function() {
    var hour = $(this).siblings(".textarea").val();
    var task = $(this).parent().attr("id"); 
    localStorage.setItem(hour, task);
  })
}



saveTask();