 $("document").ready(function() {
     $('.materialboxed').materialbox();
     $("#all").show(1000);
     $("#web").hide(1000);
     $("#android").hide(1000);
     $("#logo").hide(1000);


     $("#web-btn").click(function() {
         $("#android").hide(1000);
         $("#logo").hide(1000);
         $("#all").hide(1000);
         $("#web").show(5000);


     });
     $("#and-btn").click(function() {
         $("#web").hide(1000);
         $("#logo").hide(1000);
         $("#all").hide(1000);
         $("#android").show(5000);
     });
     $("#log-btn").click(function() {
         $("#web").hide(1000);
         $("#android").hide(1000);
         $("#all").hide(1000);
         $("#logo").show(5000);
     });
     $("#all-btn").click(function() {
         $("#web").hide(1000);
         $("#android").hide(1000);
         $("#logo").hide(1000);
         $("#all").show(5000);
     });
 });