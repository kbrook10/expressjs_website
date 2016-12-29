
$(function() {
  $.getJSON('api', updateFeedback);

//This targets the feedback form and gathers the content on submit to send the data (post) to the hard drive...
  $('.feedback-form').submit(function(e) {
      e.preventDefault();
      $.post('api', {
          name: $('#feedback-form-name').val(),
          title: $('#feedback-form-title').val(),
          message: $('#feedback-form-message').val()
      }, updateFeedback)
  })

//This renders the new messages from the Feedback form onto the page...Starting with an empty string and concatenating the bootstrap and loop of item data...
  function updateFeedback(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
     output += '           </div>';
     output += '           <div class="feedback-message">' + item.message + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
   });
   $('.feedback-messages').html(output);
  }

});
