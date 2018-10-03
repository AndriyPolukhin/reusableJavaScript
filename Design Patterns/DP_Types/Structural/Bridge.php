<?php
/**
 * When to use?
 * Decouple an abstraction from its implementation so that the two can bar yindependently
 */

// 1. INTERFACE
interface WebPage
{
  public function __construct(Theme $theme);
  public function getContent();
}

// 2. Pages Class
class About implements WebPage
{
  protected $theme;
  public function __construct(Theme $theme)
  {
    $this->theme = $theme;
  }
  public function getContent()
  {
    return "About page in " .
    $this->theme->getColor();
  }
}
class Careers implements WebPage
{
    protected $theme;

    public function __construct(Theme $theme)
    {
        $this->theme = $theme;
    }

    public function getContent()
    {
        return "Careers page in " . $this->theme->getColor();
    }
}
class Project implements WebPage
{
  protected $theme;
  public function __construct(Theme $theme)
  {
    $this->theme = $theme;
  }
  public function getContent()
  {
    return "Project page in " .
    $this->theme->getColor();
  }
}

// 3. Separate theme hierarcy
interface Theme
{
  public function getColor();
}
class DarkTheme implements Theme
{
  public function getColor()
  {
    return 'Dark Black';
  }
}
class LightTheme implements Theme
{
  public function getColor()
  {
    return 'Off white';
  }
}
class AquaTheme implements Theme
{
  public function getColor()
  {
    return 'Light blue';
  }
}

// 4. USE
$darkTheme = new DarkTheme();
$about = new About($darkTheme);
$careers = new Careers($darkTheme);

echo $about->getContent();
echo "\r\n";
echo $careers->getContent();

echo "\r\n";
$aquaTheme = new AquaTheme();
$project = new Project($aquaTheme);
echo $project->getContent();

?>