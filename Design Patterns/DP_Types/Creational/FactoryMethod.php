<?php
/**
 * When to use?
 * Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other words, when the client doesn't know what exact sub-class it might need.

 */

// 1. Create the interface
 interface Interviewer
 {
     public function askQuestions();
 }
// 2. Create classes
 class Developer implements Interviewer
 {
     public function askQuestions()
     {
         echo 'Asking about desing patterns!';
     }
 }
 class CommunityExecutive implements Interviewer
 {
     public function askQuestions()
     {
         echo 'Asking about community building';
     }
 }

 // 3. Create abstract class
abstract class HiringManager
{
    // 1. Factory Method
    abstract protected function makeInterviewer(): Interviewer;

    public function takeInterview()
    {
        $interviewer = $this->makeInterviewer();
        $interviewer->askQuestions();
    }
}

// 4.Exented Abstract class to a concreet child class
class DevelopmentManager extends HiringManager
{
    protected function makeInterviewer(): Interviewer
    {
        return new Developer();
    }
}
class MarketingManager extends HiringManager
{
    protected function makeINterviewer():Interviewer
    {
        return new CommunityExecutive();
    }
}
// 5. USE
$devManager = new DevelopmentManager();
$devManager->takeInterview();
echo "\r\n";
$marketingManager = new MarketingManager();
$marketingManager->takeInterview();


?>