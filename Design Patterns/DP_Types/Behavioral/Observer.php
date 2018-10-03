<?php
/**
 * When to use?
 * Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.
 */


// 1. MAIN CLASS
class JobPost
{
    protected $title;

    public function __construct(string $title)
    {
        $this->title = $title;
    }

    public function getTitle()
    {
        return $this->title;
    }
}

// 2. THE OBSERVER
class JobSeeker implements Observer
{
    protected $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function onJobPosted(JobPost $job)
    {
        // Do something with the job posting
        echo 'Hi ' . $this->name . '! New job posted: '. $job->getTitle();
    }
}

// 3.  OBSERVABLE / SUBSCRIBER
class EmploymentAgency implements Observable
{
    protected $observers = [];

    protected function notify(JobPost $jobPosting)
    {
        foreach ($this->observers as $observer) {
            $observer->onJobPosted($jobPosting);
        }
    }

    public function attach(Observer $observer)
    {
        $this->observers[] = $observer;
    }

    public function addJob(JobPost $jobPosting)
    {
        $this->notify($jobPosting);
    }
}

// 4. USAGE
$andriy = new JobSeeker('Andriy Polukhin');
$nastena = new JobSeeker('Anastasia Tsukrova');

// Create publisher and attach subsriber
$jobPostings = new EmploymentAgency();
$jobPostings->attach($andriy);
$jobPostings->attach($nastena);
// add a new job and see if subscribers get notified
$jobPostings->addJob(new JobPost('Software Engineer'));



?>