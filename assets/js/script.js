var saveButtonEl = document.querySelectorAll('.saveBtn');
var planningAreaEl = $('.description');

function handleFormSubmit(event) {   
  event.preventDefault();
  var taskItem =$(this).siblings(".description").val().trim();
  hourSpan = $(this).siblings(".text-center").text();
  localStorage.setItem(hourSpan, taskItem);
}

$('.saveBtn').on('click', handleFormSubmit);

$(clearSchedule).on("click", function(event)
{
  localStorage.clear();
  window.location.reload();
});

function init(){
  var hour = dayjs().hour();
  pageUpdate();
  renderMessage();
}

function renderMessage() {
  $(".description").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    var hour = dayjs().hour();
    if (hour > timeTest) {
        $(this).addClass("past");
    } else if (hour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});
}

 init();

 setInterval(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'))
 },1000);

 function pageUpdate(){
  for (var i =23; i<25; i++)
   {
    console.log(i + "pm")
    $("#" + i + "AM" ).val(localStorage.getItem(i + "AM") ) ;
    $("#" + i + "PM" ).val(localStorage.getItem(i + "PM") ) ;
}
 }