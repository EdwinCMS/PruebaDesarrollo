$(function() {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  
  
})

$(function(){

  $("#customSwitch1").prop("checked", true);
  $("#customSwitch2").prop("checked", true);
  $("#customSwitch3").prop("checked", true);
  
  $("#customSwitch1").click(function(){
    if($('#customSwitch1').is(':checked')){
      $("#div2").css("color", "black");
      $(".badge-dark").css("background-color", "black");
      $("#btn-sig").prop('disabled', false);
      $("#title").prop('disabled', false);
      $(".rad-form").prop('disabled', false);
    }
    else{
      $("#div2").css("color", "#adadad");
      $(".badge-dark").css("background-color", "#adadad");
      $("#btn-sig").prop('disabled', true);
      $("#title").prop('disabled', true);
      $(".rad-form").prop('disabled', true);

    }
  });

  $("#customSwitch2").click(function(){
    if($('#customSwitch1').is(':checked')){
      $("#div2").css("color", "black");
      $(".badge-dark").css("background-color", "black");
      $("#btn-sig").prop('disabled', false);
      $("#title").prop('disabled', false);
      $(".rad-form").prop('disabled', false);
    }
    else{
      $("#div2").css("color", "#adadad");
      $(".badge-dark").css("background-color", "#adadad");
      $("#btn-sig").prop('disabled', true);
      $("#title").prop('disabled', true);
      $(".rad-form").prop('disabled', true);

    }
  });
  
})


