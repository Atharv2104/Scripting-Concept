<?php
class Student {
    public $name;
    public $age;

    function __construct($name, $age){
        $this->name = $name;
        $this->age = $age;
    }

    function display(){
        echo "Name: " . $this->name . "<br>";
        echo "Age: " . $this->age;
    }
}

$s1 = new Student("Atharv", 20);
$s1->display();
?>