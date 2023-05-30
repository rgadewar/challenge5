var saveButtonEl = document.querySelectorAll('.saveBtn');
var planningAreaEl = $('.description');

function handleFormSubmit(event) {   
  event.preventDefault();
  var taskItem =$(this).siblings(".description").val().trim();
  hourSpan = $(this).siblings(".description").attr("id");
  console.log(hourSpan);
  // var timeTest = $(this).parent().attr("id").split('-');
  // hourSpan = parseInt(timeTest[1]);
  localStorage.setItem(hourSpan, taskItem);
}

$('.saveBtn').on('click', handleFormSubmit);

$(clearSchedule).on("click", function(event)
{
  localStorage.clear();
  window.location.reload();
});

// function init(){
//   var hour = dayjs().hour();
//   pageUpdate();
//   renderTimeBlocks();
// }

$(document).ready(function () {
  // var hour = dayjs().hour();
  pageUpdate();
  renderTimeBlocks();
});

function renderTimeBlocks() {
  $(".time-block").each(function () {
    // var timeTest = parseInt($(this).attr("id"));
    // var timeTest1 = parseInt($(this).attr("id"));
    var timeTest = $(this).attr("id").split('-');
    timeTest = parseInt(timeTest[1]);
    var hour = dayjs().hour();
    if (hour > timeTest) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (hour < timeTest) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    } else {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
});
}


// document.addEventListener('click', e=>{
//   if(e.target.matches(".saveBtn")){
//     console.log("Clicked save button")
//   }
// })

//  init();

 setInterval(function () {
$('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'))
 },1000);

 function pageUpdate(){
  for (var i = 9; i < 20; i++)
   {
    $("#" + i + "AM" ).val(localStorage.getItem(i + "AM") ) ;
    $("#" + i + "PM" ).val(localStorage.getItem(i + "PM") ) ;
}
 }