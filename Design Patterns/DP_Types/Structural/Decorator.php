<?php
/**
 * When to use?
 * Dynamically chnge the behavior of an object at run time by wrapping them in an object of a decorator class
 */

// 1. INTERFACE
interface Coffee
{
  public function getCost();
  public function getDescription();
}
// 2. THE CLASS
class SimpleCoffee implements Coffee
{
  public function getCost()
  {
    return 10;
  }
  public function getDescription()
  {
    return 'Simple Coffee';
  }
}
// 3. Add-ons DECORATORS
class MilkCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 2;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', milk';
    }
}

class WhipCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 5;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', whip';
    }
}

class VanillaCoffee implements Coffee
{
    protected $coffee;

    public function __construct(Coffee $coffee)
    {
        $this->coffee = $coffee;
    }

    public function getCost()
    {
        return $this->coffee->getCost() + 3;
    }

    public function getDescription()
    {
        return $this->coffee->getDescription() . ', vanilla';
    }
}

// 4. USE IT
$someCoffee = new SimpleCoffee();
echo "$" . $someCoffee->getCost() . " ";
echo $someCoffee->getDescription();
echo "\r\n";

$someCoffee = new MilkCoffee($someCoffee);
echo "$" . $someCoffee->getCost() . " ";
echo $someCoffee->getDescription();
echo "\r\n";

$someCoffee = new WhipCoffee($someCoffee);
echo "$" . $someCoffee->getCost() . " ";
echo $someCoffee->getDescription();
echo "\r\n";

$someCoffee = new VanillaCoffee($someCoffee);
echo "$" . $someCoffee->getCost() . " ";
echo $someCoffee->getDescription();

?>