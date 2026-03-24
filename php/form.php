<form method="post">
Name: <input type="text" name="name">
<input type="submit">
</form>

<?php
if($_POST){
    echo "Hello " . $_POST['name'];
}
?>


