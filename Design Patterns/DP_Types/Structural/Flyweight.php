<?php
/**
 * When to use?
 * Minimize memory usage or computational expenses by sharing as much as possible within similar objects
 */

// 1. CLASS 1st to be used by CLASS 2
// Anything that will be cached is flyweight.
// Types of tea here will be flyweights
class KarakTea
{

}

// Acts as a factory and save the tea
// 2. CLASS 2nd: user of the 1st class
class TeaMaker
{
  protected $availableTea = [];

  public function make($preference)
  {
    if (empty($this->availableTea[$preference])) {
      $this->availableTea[$preference] = new KarakTea();
    }
    return $this->availableTea[$preference];
  }
}
// 3. Factory
class TeaShop
{
  protected $orders;
  protected $teaMaker;

  public function __construct(TeaMaker $teaMaker)
  {
    $this->teaMaker = $teaMaker;
  }
  public function takeOrder(string $teaType, int $table)
  {
    $this->orders[$table] = $this->teaMaker->make($teaType);
  }
  public function serve()
  {
    forEach($this->orders as $table => $tea) {
      echo "Serving tea to table# " . $table . "\n";
    }
  }
}

// 4. TO USE
$teaMaker = new TeaMaker();
$shop = new TeaShop($teaMaker);

$shop->takeOrder('less sugar', 1);
$shop->takeOrder('more milk', 2);
$shop->takeOrder('without sugar', 5);

$shop->serve();

?>