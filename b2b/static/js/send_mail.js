$(document).ready(function() {
    var options = { // target element(s) to be updated with server response
        success:   showResponse,
        error: showError

    };

    function showError(error) {
      // console.log(error);
      toastr.error(
        'status_error:'+ error.status
      );
    }
    
    function showResponse(json)  {
      // console.log(json);
      // console.log('YES');

      if (json.errors) {
        $('#mail_errors').html('ERROR:'+json.errors.title);
        return;
      }

      $( '#mail-form' ).each(function(){
        this.reset();
      }); //clean form

      $('#mail_errors').html('');
      $('#myModal').modal('toggle');
      toastr.success('your message has been successfully sent!'
      );
    };

    // bind form using 'ajaxForm'
    $('#mail-form').ajaxForm(options);
});
