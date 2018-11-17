<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Profil</title>
</head>
<body>
<a href="profil.php"><img src="logo.png" alt="profil.php"></a>
<form action="questions.php" method="POST">
	<p>Prénom : </p>
	<input type="text" name="prenom" required><br><br>
	<button type="submit">Valider</button>
</form> 

</body>
</html>