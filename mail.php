<?php


$name=$_POST["name"];
$email=$_POST["mail"];
$phone=$_POST["phone"];
$message=$_POST["message"];
$to="praveenrambalu@gmail.com"; // Receiver Email ID, Replace with your email ID
			            	$subject='Contact Form Submit from Praveenrambalu.tk';
						
                            $headers="From: ".$email;
							 
							 $msg="Name : $name \n\n Email: $email \n\nPhone:$phone \n\n Message: $message";
							$retval = mail ($to,$subject,$msg,$headers);
							if($retval == true){
							echo 'success';
								
							}
							else{
							echo 'failed';
								
							}

        
   
?>