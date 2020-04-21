function newsletter_form(){
  alert('working');
  var newsletterEmail = $("#newsletterEmail").val();
  // Returns successful data submission message when the entered information is stored in database.
  var dataString = 'newsletterEmail='+ newsletterEmail;
  if(newsletterEmail=='')
  {
    window.alert('please enter your email id');
  }
  else
  {
    $("#newsletterSuccesss").addClass("hidden");
    $("#newssubmit").addClass("disabled");
    // AJAX Code To Submit Form.
    $.ajax({
    type: "POST",
    url: "newslettersubmit.php",
    data: dataString,
    cache: false,
    processData:false,
      success: function(data)
      {
          if(data==1)
          {
            $("#newsletterSuccesss").removeClass("hidden");
          }
          if(data==2)
          {
            window.alert("Something went wrong. You can also mail us at email@mail.com..");
            location.reload();
          }

      },
      error: function()
      {
      }
    });
  }
  return false;
  };



function form_submit(){
  var email = $("#email").val();
  var name = $("#name").val();
  var pwd = $("#pwd").val();
  var cpwd = $("#cpwd").val();
  var cname = $("#cname").val();
  var title = $("#title").val();
  var city = $("#city").val();
  var phone = $("#phone").val();
  var country = $("#country").val();
  var agree = $("#agree").val();
  $("#contactError").addClass("hidden");
  $("#contactError2").addClass("hidden");
  // Returns successful data submission message when the entered information is stored in database.
  var dataString = 'email='+ email + '&full_name='+ name + '&pwd='+ pwd + '&cpwd='+ cpwd + '&company_name='+ cname + '&position_title='+ title + '&city_town='+ city + '&phone_Number='+ phone + '&country='+ country;
  if(email==''||name==''||pwd==''||cpwd==''||phone==''||country=='')
  {
  $("#contactError").removeClass("hidden");
  }
  else
  {
    if (pwd !== cpwd) {
      $("#contactError2").removeClass("hidden");
    }
    else
    {
      $("#contactError").addClass("hidden");
      $("#contactError2").addClass("hidden");
      $("#send_msg").addClass("disabled");

      // AJAX Code To Submit Form.
      $.ajax({
      type: "POST",
      url: "home/save_pilot_engagemnt_data",
      data: dataString,
      cache: false,
      processData:false,
        success: function(data)
        {
            if(data==1)
            {
                window.alert("Thanks  for submitting the form<br />We will contact you soon..");
                location.reload();
            }
            if(data==2)
            {
              window.alert("Something went wrong. You can also mail us at email@mail.com..");
              location.reload();
            }

        },
        error: function()
        {
        }
      });
    }
  }
  return false;
  };
function ValidateCompanyEmail(mail){  
  if (/^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)([\w-]+.)+[\w-]{2,4})?$/.test(mail))  
    {  
      return (true)  
    }  
    
    return (false);  
}  
$(document).on('click','.download-btn',function(){
  var first_name  = $('#first_name').val();
  var last_name   = $('#last_name').val();
  var email     = $('#email').val();
  var code = $(this).attr('data-code');
  $('#'+code).val(code);
  if(first_name=="" || last_name=="" || email==""){
    alert('Please fill all the fields'); return false;
  }
  else if(email!=""){
    var result = ValidateCompanyEmail(email);
    //alert(result);
    if(result==false){ 
      alert("You have entered an invalid email address!");return false;
    }
    else{
      $('.download-btn').html('Processing..');
      $.ajax({ 
          type:'POST',
          url:whitepapers_url,
          data:$('#data-form-whitepaper').serialize(),
          success:function(resp){
              $('.download-btn').html('Download Now');
              $('#data-form-whitepaper')[0].reset();
              window.location.href=download_pdf;
          },
          error:function(){
              alert('error');
              return false;
          }
      });
    }
  }
});