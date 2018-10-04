<?php
/**
 * When to use?
 * Template method defines the skeleton of how a certain algorithm could be performed, but defers the implementation of those steps to the children classes.
 */

// 1. BASE CLASS

abstract class Builder
{
  // Template Method
  final public function build()
  {
    $this->test();
    $this->lint();
    $this->assemble();
    $this->deploy();
  }

  abstract public function test();
  abstract public function lint();
  abstract public function assemble();
  abstract public function deploy();
}

// 2. IMPLEMENTATIONS
class AndroidBuilder extends Builder
{
    public function test()
    {
        echo 'Running android tests';
    }

    public function lint()
    {
        echo 'Linting the android code';
    }

    public function assemble()
    {
        echo 'Assembling the android build';
    }

    public function deploy()
    {
        echo 'Deploying android build to server';
    }
}

class IosBuilder extends Builder
{
    public function test()
    {
        echo 'Running ios tests';
    }

    public function lint()
    {
        echo 'Linting the ios code';
    }

    public function assemble()
    {
        echo 'Assembling the ios build';
    }

    public function deploy()
    {
        echo 'Deploying ios build to server';
    }
}

// 3. USE
$androidBuilder = new AndroidBuilder();
$androidBuilder->build();

$iosBuilder = new IosBuilder();
$iosBuilder->build();

















?>