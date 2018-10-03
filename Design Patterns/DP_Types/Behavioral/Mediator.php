<?php
/**
 * When to use?
 * Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.
 */

// 1. INTERFACE
interface ChatRoomMediator
{
  public function showMessage(User $user, string $message);
}
// 2. MEDIATOR
class ChatRoom implements ChatRoomMediator
{
  public function showMessage(User $user, string $message)
  {
    $time = date('M d, y H:i');
    $sender = $user->getName();

    echo $time . '[' . $sender . ']:' . $message . "\n";
  }
}

// 3. USER / Colleagues
class User {
  protected $name;
  protected $chatMediator;

  public function __construct(string $name, ChatRoomMediator $chatMediator)
  {
    $this->name = $name;
    $this->chatMediator = $chatMediator;
  }
  public function getName() {
    return $this->name;
  }
  public function send($message) {
    $this->chatMediator->showMessage($this, $message);
  }
}


// 4. USAGE
$mediator = new ChatRoom();

$andriy = new User('Andriy Polukhin', $mediator);
$nastena = new User('Anastasia Tsukrova', $mediator);

$andriy->send('Hello there beautifull');
$nastena->send('Earth is calling Andriy');

?>