<?php
	if(isset($_POST['Submit'])) {
		$target = "uscmakers@gmail.com";
		$subject = "General Question";
		$name = $_POST['name'];
		$email = $_POST['email'];
		$content = $_POST['message'];

		$message = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $content;

		mail($target, $subjec, $message);
	}
?>