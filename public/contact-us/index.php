<?php

$result = "";
   if(isset($_POST['submit']))
   {
       
       include("class.phpmailer.php"); 

$headers = "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers.= "From: IKIA <support@ikia.io>" . "\r\n"; 
 
// $body='<p>Name: '.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</p>';


   $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>IKIA</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='https://ikia.io/index.html'><img src='https://ikia.io/wp-content/uploads/2018/08/mainlogo.png' alt='IKIA'></a><br><br>";
	$body .= "</td></tr></thead> <tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$_POST['name']}</td> ";
		$body .= "</tr>";
	$body .= "<td style='border:none;'><strong>Email:</strong> {$_POST['email']}</td>";
   // $body .= "<td style='border:none;'><strong>Message :</strong> {$_POST['email']}</td>";

	// $body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'> <strong>Message :</strong> {$_POST['message']}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";


$msg = $body;
$msg = wordwrap($msg,70);
$email=$_POST['email'];
//mail($email,"Pooja Testing",$msg,$headers);
mail("ikeablockchain@gmail.com","IKIA",$msg,$headers);

   }
  header("location : index.html");
?>

