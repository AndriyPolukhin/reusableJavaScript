<?php
/**
 * When to use?
 * It lets you change the behavior of a class when the state changes.
 */

// 1. INTERFACE and IMPLEMENTATIONS
interface WritingState
{
    public function write(string $words);
}

class UpperCase implements WritingState
{
    public function write(string $words)
    {
        echo strtoupper($words);
    }
}

class LowerCase implements WritingState
{
    public function write(string $words)
    {
        echo strtolower($words);
    }
}

class DefaultText implements WritingState
{
    public function write(string $words)
    {
        echo $words;
    }
}

// 2. EDITOR IMPLEMENTATION
class TextEditor
{
    protected $state;

    public function __construct(WritingState $state)
    {
        $this->state = $state;
    }

    public function setState(WritingState $state)
    {
        $this->state = $state;
    }

    public function type(string $words)
    {
        $this->state->write($words);
    }
}

// 3. USE
$editor = new TextEditor(new DefaultText());
$editor->type('First line' . "\n");

$editor->setState(new UpperCase());

$editor->type('Second line' . "\n");
$editor->type('Third line' . "\n");

$editor->setState(new LowerCase());

$editor->type('Fourth line' . "\n");
$editor->type('Fifth line' . "\n");


?>