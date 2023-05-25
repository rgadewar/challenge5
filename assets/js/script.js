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
  var planning =
  {
    time: timeEl.text(),
    tasks: taskItem,  
  };
  for (var i = 0; i < Anchors.length ; i++)
{
  var taskItem =$(this).siblings(".form-control").val().trim();
  console.log(taskItem);
  hourSpan = $(this).siblings(".input-group-prepend").text().trim();
  console.log(hourSpan);
  var daySchedule = JSON.parse(localStorage.getItem("daySchedule"));
  daySchedule.push(planning);
  localStorage.setItem("daySchedule", JSON.stringify(daySchedule));
}
}


$('.saveBtn').on('click', handleFormSubmit);


$(clearSchedule).on("click", function(event)
{
  localStorage.removeItem("daySchedule");
  window.location.reload();
});

function init()
{
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderMessage();
}

function renderMessage() 
{
  
   for (var i =0; i<daySchedule.length; i++)
   {
    // to show current user score
    $(this).siblings(".input-group-prepend") = daySchedule[i].time
  
    $(this).siblings(".form-control") = daySchedule[i].tasks
    
  }
 }
