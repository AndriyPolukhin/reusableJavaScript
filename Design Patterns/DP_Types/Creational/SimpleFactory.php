<?php

/**
 * When to Use?
 * When creating an object is not just a few assignments and involves some logic, it makes sense to put it in a dedicated factory instead of repeating the same code everywhere.
 */
// 1. Creat the interface
interface Door
{
  public function getWidth(): float;
  public function getHeight(): float;
}

// 2. Create a class to implement Interface
class WoodenDoor implements Door {
  protected $width;
  protected $height;

  public function __construct(float $width, float $height)
  {
    $this->width = $width;
    $this->height = $height;
  }
  public function getWidth(): float
  {
    return $this->width;
  }
  public function getHeight(): float
  {
    return $this->height;
  }
}
// 3. Creat a simple factory
class DoorFactory
{
  public static function makeDoor($width, $height): Door
  {
    return new WoodenDoor($width, $height);
  }
}

// 4. Call the factory
$door = DoorFactory::makeDoor(100, 200);
echo 'Width: ' . $door->getWidth();
echo "\r\n";
echo 'Height: '. $door->getHeight();

?>