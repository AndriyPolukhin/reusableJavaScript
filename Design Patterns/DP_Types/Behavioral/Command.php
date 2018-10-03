<?php
/**
 * When to use?
 * Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.
 */


// 1. RECIEVER
class Bulb
{
  public function turnOn()
  {
    echo "Bulb has been lit!" . "\n";
  }

  public function turnOff()
  {
    echo "Darkness!" . "\n";
  }
}

// 2. COMMAND INTERFACE
interface Command
{
  public function execute();
  public function undo();
  public function redo();
}

// 3. COMMANDS
class TurnOn implements Command
{
  protected $bulb;

  public function __construct(Bulb $bulb)
  {
    $this->bulb = $bulb;
  }
  public function execute()
  {
    $this->bulb->turnOn();
  }
  public function undo()
  {
    $this->bulb->turnOff();
  }
  public function redo()
  {
    $this->bubl->execute();
  }
}

class TurnOff implements Command
{
  protected $bulb;

  public function __construct(Bulb $bulb)
  {
    $this->bulb = $bulb;
  }
  public function execute()
  {
    $this->bulb->turnOff();
  }
  public function undo()
  {
    $this->bubl->turnOn();
  }
  public function redo()
  {
    $this->bulb->execute();
  }
}

// 4. INVOKER
class RemoteControl
{
  public function submit(Command $command)
  {
    $command->execute();
  }
}

// 5. USAGE
$bulb = new Bulb();
$turnOn = new TurnOn($bulb);
$trunOff = new TurnOff($bulb);

$remote = new RemoteControl();
$remote->submit($turnOn);
$remote->submit($trunOff);






?>