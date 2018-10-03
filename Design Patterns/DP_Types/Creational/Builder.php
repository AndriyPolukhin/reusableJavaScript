<?php

/**
 * When to use?
 * When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that; factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.
 */

 // 1. ACTUAL CLASS
 class Burger
{
  protected $size;
  protected $cheese = false;
  protected $pepperoni = false;
  protected $lettuce = false;
  protected $tomato = false;

  public function __construct(BurgerBuilder $builder)
  {
    $this->size = $builder->size;
    $this->cheese = $builder->cheese;
    $this->pepperonu = $builder->pepperoni;
    $this->lettuce = $builder->lettuce;
    $this->tomato = $builder->tomato;
  }
}
// 2. BUILDER
class BurgerBuilder
{
  public $size;
  public $cheese = false;
  public $pepperoni = false;
  public $lettuce = false;
  public $tomato = false;

  public function __construct(int $size)
  {
    $this->size = $size;
  }
  public function addCheese()
  {
    $this->cheese = true;
    return $this;
  }
  public function addPepperoni()
  {
    $this->pepperoni = true;
    return $this;
  }
  public function addLettuce()
  {
    $this->lettuce = true;
    return $this;
  }
  public function addTomato()
  {
    $this->tomato = true;
    return $this;
  }
  public function build(): Burger
  {
    echo 'Perfect burger is build: ' . $this->size;
    return new Burger($this);
  }
}

//3. USE
$burger = (new BurgerBuilder(14))
                  ->addPepperoni()
                  ->addCheese()
                  ->addLettuce()
                  ->addTomato()
                  ->build();






 ?>