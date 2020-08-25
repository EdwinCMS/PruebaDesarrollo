//activacion icono de ayuda
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

//switch sobre la autoria que habilita o desabilita el
//formulario de obra
$(function(){
  let swit1_off = $("#customSwitch1").prop("checked", false),
      swit2_off = $("#customSwitch2").prop("checked", false),
      swit3_off = $("#customSwitch3").prop("checked", false);
  //$("#customSwitch3").prop("checked", true);
  //console.log ((swit1_off).prop("checked"));

//switch de autor
  $("#customSwitch1").click(function(){
    let swi1 = $('#customSwitch1').is(':checked');


    if((swi1)){
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/obra.png">');
      $("#div2").css("color", "#3a3a3a");
      $(".badge-dark").css("background-color", "#3a3a3a");
      $("#btn-sig").prop('disabled', false);
      $("#title").prop('disabled', false);
      $(".rad-form").prop('disabled', false);

    }else{
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/Autoria.png">');
      $("#div2").css("color", "#adadad");
      $(".badge-dark").css("background-color", "#adadad");
      $("#btn-sig").prop('disabled', true);
      $("#title").prop('disabled', true);
      $(".rad-form").prop('disabled', true);
    }
  });

  //switch de representante
  $("#customSwitch2").click(function(){
    let swi2 = $('#customSwitch2').is(':checked');

    if((swi2)){
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/obra.png">');
      $("#div2").css("color", "#3a3a3a");
      $(".badge-dark").css("background-color", "#3a3a3a");
      $("#btn-sig").prop('disabled', false);
      $("#title").prop('disabled', false);
      $(".rad-form").prop('disabled', false);

    }else{
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/Autoria.png">');
      $("#div2").css("color", "#adadad");
      $(".badge-dark").css("background-color", "#adadad");
      $("#btn-sig").prop('disabled', true);
      $("#title").prop('disabled', true);
      $(".rad-form").prop('disabled', true);
    }
  });

  //switch de autorizacion
  $("#customSwitch3").click(function(){
    let swi3 = $('#customSwitch3').is(':checked');

    if((swi3)){
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/obra.png">');
      $("#div2").css("color", "#3a3a3a");
      $(".badge-dark").css("background-color", "#3a3a3a");
      $("#btn-sig").prop('disabled', false);
      $("#title").prop('disabled', false);
      $(".rad-form").prop('disabled', false);

    }else{
      $('#img-obra').replaceWith('<img id="img-obra" src="../assets/img/Autoria.png">');
      $("#div2").css("color", "#adadad");
      $(".badge-dark").css("background-color", "#adadad");
      $("#btn-sig").prop('disabled', true);
      $("#title").prop('disabled', true);
      $(".rad-form").prop('disabled', true);
    }
  });
})


