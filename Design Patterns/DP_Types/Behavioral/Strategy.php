<?php
/**
 * When to use?
 * Strategy pattern allows you to switch the algorithm or strategy based upon the situation.
 */

// 1. STRATEGIES
interface SortStrategy
{
  public function sort(array $dataset): array;
}

class BubbleSortStrategy implements SortStrategy
{
  public function sort(array $dataset): array
  {
    echo 'Sorting using bubble sort' . "\n";

    // do sorting
    return $dataset;
  }
}

class QuickSortStrategy implements SortStrategy
{
  public function sort(array $dataset): array
  {
    echo 'Sorting using quick sort' . "\n";

    // do sorting
    return $dataset;
  }
}

// 2. CLIENT OF THE STRATEGY
class Sorter
{
  protected $sorter;

  public function __construct(SortStrategy $sorter)
  {
    $this->sorter = $sorter;
  }
  public function sort(array $dataset): array
  {
    return $this->sorter->sort($dataset);
  }
}

// 3. USE
$dataset = [1,5,4,3,2,8];

$sorter = new Sorter(new BubbleSortStrategy());
$sorter->sort($dataset);

$sorter = new Sorter(new QuickSortStrategy());
$sorter->sort($dataset);






?>