<?php

    class Person {
        private $name;
        private $email;
        public static $ageLimit = 40;

        public function __construct($name, $email) {   
            $this->name = $name;
            $this->email = $email;
             echo __CLASS__ . " created<br>";
        }

        public function __destruct() {
            echo __CLASS__. " destroyed<br>";
        }

   
        public function setName($name) {
            $this->name = $name;
        }

        public function getName() {
            return $this->name . '<br>';
        }

        public function setEmail($email) {
            $this->email = $email;
        }

        public function getEmail() {
            return $this->email . '<br>';
        }
        
        public static function getAgeLimit() {
            return self::$ageLimit;
        }
    }

    // $person1 = new Person('Andriy Polukhin', 'andriy.polukhin@gmail.com');
    // $person1->setName('Andriy Polukhin');
    // $person1->setEmail('andriy.polukhin@gmail.com');
    // echo $person1->getName();
    // echo $person1->getEmail();
    // $person1->name = 'Andriy Polukhin';
    // print_r($person1);

    # Static Props and Method
    echo Person::$ageLimit . "<br>";
    echo Person::getAgeLimit() . "<br>";

    class Customer extends Person{
        private $balance;

        public function __construct($name, $email, $balance) {
            parent::__construct($name, $email, $balance);
            $this->balance = $balance;
            echo 'A new '.__CLASS__ .' has been created<br>';
        }

        public function setBalance($balance) {
            $this->balance = $balance;
        }

        public function getBalance() {
            return $this->balance . '<br>';
        }
    }


    $customer1 = new Customer('Andriy Polukhin', 'andriy.polukhin@gmail.com', 1000000);

    echo $customer1->getBalance();
?>