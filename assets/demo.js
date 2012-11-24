(function(){
  
    //defaults
//    $.fn.editable.defaults.url = 'error.php'; 
    $.fn.editable.defaults.url = 'post.php'; 

    //enable / disable
   $('#enable').click(function() {
       $('#user .editable').editable('toggleDisabled');
   });    
    
    //editables 
    $('#username').editable({
                           url: 'post.php',
                           type: 'text',
                           pk: 1,
                           name: 'username',
                           title: 'Enter username'
    });
    
    $('#firstname').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
    $('#lastname').editable();
    
    $('#sex').editable({
        source: [
            {value: 0, text: 'Male'},
            {value: 1, text: 'Female'}
        ]   
    });    
    
    $('#action').on('render', function(e, editable) {
        var colors = {0: "gray", 1: "green", 2: "blue", 3: "red"};
        $(this).css("color", colors[editable.value]);  
    });
    
    $('#status, #action').editable({
 
    });   
    
    $('#group').editable({
      //  source: 'groups.php'
    });   

    $('#dob').editable({
       // format: 'dd.mm.yyyy'
    });      
    
    $('#weight').editable({
        url: 'error.php'  
    });     
    
    $('#comments').editable(); 
    
    $('#note').editable(); 
    
    $('#pencil').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#note').editable('toggle');
   });   
   
    $('#link').editable({
        success: function(response, newValue) {
           $('#link').attr('href', newValue); 
        }
    }); 
    
    $('#edit-link').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#link').editable('toggle');
   });     

  //----------------------------------
  // editableContainer() 
  //---------------------------------- 
  
  /* 
   $('#ec').editableContainer();
  
   $('#ec-show').click(function(e) {
       e.stopPropagation();
       $('#ec').editableContainer('option', 'value', 'abc');
       $('#ec').editableContainer('show');
   });
   
   $('#ec-hide').click(function(e) {
       e.stopPropagation();
       $('#ec').editableContainer('hide');
   });
   */
   
}());