<?php
/**
 * When to use?
 * When there are interrelated dependencies with not-that-simple creation logic involved
 */


// 1. THE INTERFACE 1
interface Door
{
  public function getDescription();
}

// 2. THE IMPLEMENTATION for Interface 1
class WoodenDoor implements Door
{
  public function getDescription()
  {
    echo 'I am a wooden door';
  }
}
class IronDoor implements Door
{
  public function getDescription()
  {
    echo 'I am a iron door';
  }
}

// 3. One more INTERFACE 2
interface DoorFittingExpert
{
  public function getDescription();
}
// 4. IMPLEMENTATION for Interface 2
class Welder implements DoorFittingExpert
{
  public function getDescription()
  {
    echo 'I can only fit iron doors';
  }
}
class Carpenter implements DoorFittingExpert
{
  public function getDescription()
  {
    echo 'I can only fit wooden doors';
  }
}

// 5. THE FACTORY
interface DoorFactory
{
  public function makeDoor(): Door;
  public function makeFittingExpert(): DoorFittingExpert;
}

// 6. WOODEN FACTORY 1
class WoodenDoorFactory implements DoorFactory
{
  public function makeDoor(): Door
  {
    return new WoodenDoor();
  }
  public function makeFittingExpert(): DoorFittingExpert
  {
    return new Carpenter();
  }
}
// 7. IRON FACTORY 2
class IronDoorFactory implements DoorFactory
{
  public function makeDoor(): Door
  {
    return new IronDoor();
  }
  public function makeFittingExpert(): DoorFittingExpert
  {
    return new Welder();
  }
}

// 8. TEST IT OUT
$woodenFactory = new WoodenDoorFactory();

$door = $woodenFactory->makeDoor();
$expert = $woodenFactory->makeFittingExpert();

$door->getDescription();
echo "\r\n";
$expert->getDescription();
echo "\r\n";

$ironFactory = new IronDoorFactory();

$door = $ironFactory->makeDoor();
$expret = $ironFactory->makeFittingExpert();

$door->getDescription();
echo "\r\n";
$expert->getDescription();











?>