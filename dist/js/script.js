$( function() {
    // init plugin
    NodeCursor({
      cursor : true, 
      node : true, 
      cursor_velocity : 1, 
      node_velocity : 0.15, 
      native_cursor : 'none', 
      element_to_hover : '.nodeHover', 
      cursor_class_hover : 'disable', 
      node_class_hover : 'expand', 
      hide_mode : true, 
      hide_timing : 2000, 
    });
  
  });
  // loader
$(window).on('load',function(){

  $('.loader-warper').delay(1000).fadeOut("fast");
})
