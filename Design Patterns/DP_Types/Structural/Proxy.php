<?php
/**
 * When to use?
 * Class represents functionality of another class
 */

// 1. INTERFACE
interface Door
{
  public function open();
  public function close();
}

class LabDoor implements Door
{
  public function open()
  {
    echo "Opening lab door"  . "\n";
  }
  public function close()
  {
    echo "Closing the lab door"  . "\n";
  }
}

// 2. PROXY
class SecuredDoor
{
  protected $door;

  public function __construct(Door $door)
  {
    $this->door = $door;
  }
  public function open($password)
  {
    if($this->authenticate($password)) {
      $this->door->open();
    } else {
      echo "Big no! It ain't possible." . "\n";
    }
  }
  public function authenticate($password)
  {
    return $password  === '$ecr@t';
  }
  public function close()
  {
    $this->door->close();
  }
}

// 3 USE
$door = new SecuredDoor(new LabDoor());
$door->open('invalid');
$door->open('$ecr@t');
$door->close();










?>