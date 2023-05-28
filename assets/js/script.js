var saveButtonEl = document.querySelectorAll('.saveBtn');
var planningAreaEl = $('.form-control');
var timeEl = $('.input-group-text');

var Anchors = $('.saveBtn');
let numb =  Anchors.length;
for (var i = 0; i < Anchors.length ; i++)
{
    // Anchors[i].on('click', handleFormSubmit);
console.log(Anchors[i]);
}


function handleFormSubmit(event) {   
  event.preventDefault();
  console.log("this" + this)
  var taskItem =$(this).siblings(".form-control").val().trim();
  console.log("Here" + taskItem);
  hourSpan = $(this).siblings(".form-control").attr("id");
  console.log(hourSpan);
  localStorage.setItem(hourSpan, taskItem);
}

$('.saveBtn').on('click', handleFormSubmit);


$(clearSchedule).on("click", function(event)
{
  localStorage.clear();
  window.location.reload();
});

function init(){
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderMessage();
}

function renderMessage() {
   for (var i =9; i<18; i++)
   {

    var currentHour = dayjs().hour();
    console.log(currentHour);
    var blockHour = i;
    if(currentHour > blockHour){
      $("#" + i+ "am" ).css("background-color", "grey")
      $("#" + i+ "pm" ).css("background-color", "grey")
    }
    else if (currentHour < blockHour){
      $("#" + i+ "am" ).css("background-color", "green")
      $("#" + i+ "pm" ).css("background-color", "green")
    } else {
      $("#" + i+ "am" ).css("background-color", "#ff8585")
      $("#" + i+ "pm" ).css("background-color", "#ff8585")
    }
    $("#" + i+ "am" ).val(localStorage.getItem(i + "am") ) ;
    $("#" + i+ "pm" ).val(localStorage.getItem(i + "pm") ) ;
  }
 }


 init();

 setInterval(function () {

$('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'))
 },1000);


 function pageUpdate(){
  
 }