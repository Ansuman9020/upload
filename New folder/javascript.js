$("#upload").change(function(event) {  
    RecurFadeIn();
    readURL(this);    
  });
  $("#upload").on('click',function(event){
    RecurFadeIn();
  });
  function readURL(input) {    
    if (input.files && input.files[0]) {   
      var reader = new FileReader();
      var filename = $("#upload").val();
      filename = filename.substring(filename.lastIndexOf('\\')+1);
      reader.onload = function(e) {
        debugger;      
        $('#blah').attr('src', e.target.result);
        $('#blah').hide();
        $('#blah').fadeIn(500);      
        $('.btn').text(filename);             
      }
      reader.readAsDataURL(input.files[0]);    
    } 
    
  }
  