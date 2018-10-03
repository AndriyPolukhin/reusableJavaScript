<?php
/**
 * When to use?
 * When an object is required that is similar to existing object or when the creation would be expensive as compared to cloning.
 */

// 1. MAIN CLASS
class Sheep
{
  protected $name;
  protected $category;

  public function __construct(string $name, string $category = ' Mountain Sheep')
  {
    $this->name = $name;
    $this->category = $category;
  }

  public function setName(string $name)
  {
    $this->name = $name;
  }
  public function getName()
  {
    return $this->name;
  }
  public function setCategory(string $category)
  {
    $this->category = $category;
  }
  public function getCategory()
  {
    return $this->category;
  }
}

// 2. CLONE THE OBJECT
$original = new Sheep('Jolly');
echo $original->getName();
echo $original->getCategory();
echo "\r\n";
$cloned = clone $original;
$cloned->setName('Dolly');
echo $cloned->getName();
echo $cloned->getCategory();

?>