<?php
/**
 * When to Use
 * When you need an adaptor;)))
 */

// 1. Similar interface for all Lions
interface Lion
{
    public function roar();
}

class AfricanLion implements Lion
{
    public function roar()
    {
      echo 'Migthy Roar';
    }
}

class AsianLion implements Lion
{
    public function roar()
    {
      echo 'Migthy-Mighty Roar';
    }
}

// 2. Second class that accepts any class of inerface
class Hunter
{
    public function hunt(Lion $lion)
    {
        $lion->roar();
    }
}
// 3. THE CLASS TO BE ADAPTED
class WildDog
{
    public function bark()
    {
      echo 'Just a Bark';
    }
}
// 4. Adapter for compatibility
class WildDogAdapter implements Lion
{
    protected $dog;

    public function __construct(WildDog $dog)
    {
        $this->dog = $dog;
    }

    public function roar()
    {
        $this->dog->bark();
    }
}
// 5. USE
$wildDog = new WildDog();
$wildDogAdapter = new WildDogAdapter($wildDog);

$hunter = new Hunter();
$hunter->hunt($wildDogAdapter);


?>