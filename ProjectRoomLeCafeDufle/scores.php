<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lecafedufle";

$radioInput1 = $_POST['input1'];
$radioInput2 = $_POST['input2'];
$totalPoint = 0;

if ($radioInput1 == "rep2") {          
    $totalPoint += 1;      
}

if ($radioInput2 == "rep3") {
    $totalPoint += 1;  
} 

$_SESSION['score'] = $totalPoint;

$sql = "INSERT INTO testdata (nom, score)
VALUES ('".$_SESSION['prenom']."', '".$_SESSION['score']."')";
$sqlQuery = "SELECT * FROM testdata";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("la Connexion à la base de donnée a échouée: " . $conn->connect_error);
}

$conn->query($sql);
$res = $conn->query($sqlQuery);
$conn->close();
session_destroy();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Scores</title>
</head>
<style>
table, th, td {
    border: 1px solid black;
}
div {
	margin: 30px;
}
</style>
<body>
<a href="profil.php"><img src="logo.png" alt="profil.php"></a>
	<div>
		<?php
		if ($res->num_rows > 0) {
			echo "<table style='width:25%'><tr><th>Prenom</th><th>Score</th>";
			while($row = $res->fetch_assoc()) {
		        echo "<tr><td>".$row["nom"]."</td><td>".$row["score"]."</td></tr>";
		    }
		    echo "</table>";
		}
		?>
	</div>
</body>
</html>