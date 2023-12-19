$(document).ready(function () {
    var checkboxes = $('.task-checkbox');
  
    checkboxes.change(function () {
      var checkedCount = checkboxes.filter(':checked').length;
  
      if (checkedCount >= 3) {
        checkboxes.prop('disabled', true);
      } else {
        checkboxes.prop('disabled', false);
      }
    });
  });