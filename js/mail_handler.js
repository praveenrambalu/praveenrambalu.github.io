$("#submit").click(function() {



    var na = $("#name").val();
    var ma = $("#email").val();
    var ph = $("#phone").val();
    var ms = $("#message").val();
    event.preventDefault();


    if (na != "") {
        $("#name-status").html("");
        if (ma != "") {
            if (validateEmail(ma)) {
                $("#email-status").html("");
                if (ms != "") {
                    $("#message-status").html("");
                    send();
                } else {
                    $("#message-status").html("<b class='error'>Please Enter your Valuable Feedback / message</b>");

                }
            } else {
                $("#email-status").html("<b class='error'>Invalid Email Address</b>");
                e.preventDefault();
            }
        } else {
            $("#email-status").html("<b class='error'>Please Tell us your Mail</b>");

        }
    } else {
        $("#name-status").html("<b class='error'>Please Enter your Sweet Name</b>");
    }
















    function send() {
        $.post("mail.php", {
            name: na,
            mail: ma,
            phone: ph,
            message: ms
        }, function(data) {

            if (data == "success") {
                swal({
                    title: "Success",
                    text: "Message Suceesfully sent..! \n We will contact you ASAP",
                    icon: "success",
                    button: "OK...!",
                });

                // $("#contact-form")[0].reset();
                var na = $("#name").val("");
                var ma = $("#email").val("");
                var ph = $("#phone").val("");
                var ms = $("#message").val("");

            } else {
                swal({
                    title: "Failed",
                    text: "Message sending  failed...! \n Please Try after sometime",
                    icon: "error",
                    button: "OK...!",
                });

            }
        });
    }

    function validateEmail(ma) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(ma)) {

            return true;
        } else {
            return false;
        }
    }





});