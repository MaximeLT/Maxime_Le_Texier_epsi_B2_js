<?php
session_start();
if (isset($_POST['prenom'])) {
     $_SESSION['prenom'] = $_POST['prenom'];
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Questions</title>
</head>
<body>
	<a href="profil.php"><img src="logo.png" alt="profil.php"></a>
	<form method="POST" action="scores.php">
		<div style="margin-bottom: 30px;">
			<h4>Question 1 :</h4>
			<p>J'ai mangé, je</p>
			<input type="radio" name="input1" value="rep1" required>n'a plus faim<br>
			<input type="radio" name="input1" value="rep2" required>n'ai plus faim<br>
		</div>
		<div style="margin-bottom: 30px;">
			<h4>Question 2 :</h4>
			<p>Il mesure deux mètres, il est</p>
			<input type="radio" name="input2" value="rep3" required>grand<br>
			<input type="radio" name="input2" value="rep4" required>grande<br>
		</div>
		<button type="submit">Valider</button>
	</form>
</body>
</html>