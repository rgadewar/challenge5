var saveButtonEl = $('.saveBtn');
var planningAreaEl = $('.form-control');
var TimeEl = $('.input-group-text');

var Anchors = document.getElementsByClassName(".saveBtn");
console.log("I am here" + Anchors)


function handleFormSubmit(event) {
  event.preventDefault();
  console.log("I am here")
  console.log(event.currentTarget.value)
  var shoppingItem = $('textarea[aria-label="With textarea"]').val();
  console.log(TimeEl.text())
  if (!shoppingItem) {
    alert('Please enter some task!');
    return;
  }

  var daySchedule = JSON.parse(localStorage.getItem("daySchedule")) || [];
  var planning =
  {
  time: TimeEl.text(),
  tasks: shoppingItem,
    
};
  daySchedule.push(planning);
  localStorage.setItem("daySchedule", JSON.stringify(daySchedule));

}


saveButtonEl.on('click', handleFormSubmit);
// $('.delete-item-btn').on('click',deleteButton());




