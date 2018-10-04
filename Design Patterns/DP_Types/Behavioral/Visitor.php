<?php
/**
 * When to use?
 * This Pattern lets you add further operations to objects without having to modify them.
 */

// 1. VISITEE
interface Animal
{
  public function accept(AnimalOperation $operation);
}

// 2. VISITOR
interface AnimalOperation{
  public function visitMonkey(Monkey $monkey);
  public function visitLion(Lion $lion);
  public function visitDolphin(Dolphin $dolphin);
}

// 3. IMPLEMENTATION of class
class Monkey implements Animal
{
    public function shout()
    {
        echo 'Ooh oo aa aa!' . "\n";
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitMonkey($this);
    }
}

class Lion implements Animal
{
    public function roar()
    {
        echo 'Roaaar!'. "\n";
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitLion($this);
    }
}

class Dolphin implements Animal
{
    public function speak()
    {
        echo 'Tuut tuttu tuutt!'. "\n";
    }

    public function accept(AnimalOperation $operation)
    {
        $operation->visitDolphin($this);
    }
}
// 4. VISITOR IMPLEMENTATION
class Speak implements AnimalOperation
{
    public function visitMonkey(Monkey $monkey)
    {
        $monkey->shout();
    }

    public function visitLion(Lion $lion)
    {
        $lion->roar();
    }

    public function visitDolphin(Dolphin $dolphin)
    {
        $dolphin->speak();
    }
}

// 5. USE THE IMPLEMENTATIONS
$monkey = new Monkey();
$lion = new Lion();
$dolphin = new Dolphin();

$speak = new Speak();

$monkey->accept($speak);
$lion->accept($speak);
$dolphin->accept($speak);

?>