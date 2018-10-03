<?php
/**
 * When use it?
 * Provide a simplified interface to a complex subsystem
 */

 // 1. MAIN CLASS
 class Computer
 {
   public function getElectricShock()
   {
     echo "Ouch!" . "\n";
   }
   public function makeSound()
   {
     echo "Beep beep!" . "\n";;
   }
   public function showLoadingScreen()
   {
     echo "Loading..." . "\n";;
   }
   public function bam()
   {
     echo "Ready to be used" . "\n";;
   }
   public function closeEverything()
   {
     echo "Bup bup bup buzzzzz!" . "\n";;
   }
   public function sooth()
   {
     echo "Zzzzz" . "\n";;
   }
   public function pullCurrent()
   {
     echo "Haah!" . "\n";;
   }
 }

// 2. CREATE A FACADE
class ComputerFacade
{
 protected $computer;

 public function __construct(Computer $computer)
 {
   $this->computer = $computer;
 }
 public function turnOn()
 {
   $this->computer->getElectricShock();
   $this->computer->makeSound();
   $this->computer->showLoadingScreen();
   $this->computer->bam();
 }
 public function turnOff()
 {
   $this->computer->closeEverything();
   $this->computer->pullCurrent();
   $this->computer->sooth();
 }
}


$computer = new ComputerFacade(new Computer());
$computer->turnOn();
$computer->turnOff();










?>