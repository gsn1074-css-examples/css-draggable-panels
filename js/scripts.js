$(init);
 
function init() {
  $('#handle1').draggable({start:handleDragStart, drag:handleDragHandle1, helper:toolTip});
  $('#handle2').draggable({start:handleDragStart, drag:handleDragHandle2, helper:toolTip});
  window.panel1Width = 33;
  window.panel2Width = 66;
}

function handleDragStart(event, ui) { }

function handleDragHandle1(event, ui) {
    window.panel1Width = event.clientX / ($(window).width() / 100);
    window.panel2Width = window.panel2Width - window.panel1Width;
    $("#panel1").css("width", window.panel1Width + "%");
    $("#panel2").css("padding-left", window.panel1Width + "%");
    $("#panel2").css("width", window.panel2Width + "%");
    window.panel2Width = window.panel1Width + window.panel2Width;
  }

function handleDragHandle2(event, ui) {
  window.panel2Width = event.clientX / ($(window).width() / 100);
  $("#panel2").css("width", window.panel2Width - window.panel1Width + "%");
}

function toolTip(event) {
    return '<span></span>';
}
