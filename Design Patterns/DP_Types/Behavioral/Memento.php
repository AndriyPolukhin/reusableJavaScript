<?php
/**
 * When to use?
 * Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.
 */

// 1. MAIN CLASS
class EditorMemento
{
  protected $content;
  public function __construct(string $content)
  {
    $this->content = $content;
  }

  public function getContent()
  {
    return $this->content;
  }
}

// 2. Originator
class Editor
{
  protected $content = '';
  public function type(string $words)
  {
    $this->content = $this->content . ' ' . $words;
  }
  public function getContent()
  {
    return $this->content;
  }

  public function save()
  {
    return new EditorMemento($this->content);
  }

  public function restore(EditorMemento $memento)
  {
    $this->content = $memento->getContent();
  }
}

// 3. USAGE
$editor = new Editor();
// Typing
$editor->type('This is the first sentence.' . "\n");
$editor->type('This is the second sentence.' . "\n");
// save the satte to restore to:
$saved = $editor->save();

// Type more
$editor->type('And this is the third.' . "\n");
// output
echo $editor->getContent();

// Restore content
$editor->restore($saved);
echo $editor->getContent();

?>