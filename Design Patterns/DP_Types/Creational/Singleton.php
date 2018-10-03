<?php
/**
 * When to use?
 * Ensure that one object of a particular class is ever created
 */

// 1. Make the class
final class President
{
  private static $instance;

  private function __construct()
  {
    // Hide the construct
  }
  public static function getInstance(): President
  {
    if (!self::$instance) {
      self::$instance = new self();
    }
    return self::$instance;
  }
  private function __clone()
  {
    // Disable cloning
  }
  private function __wakeup()
  {
    // Disable unserialize
  }
}

$president1 = President::getInstance();
$president2 = President::getInstance();

var_dump($president1 === $president2);

?>