<?php
/**
 * When to use?
 * Let's you treat individual objects in a uniform manner
 */

// 1. Interface
interface Employee
{
  public function __construct(string $name, float $salary);
  public function getName(): string;
  public function setSalary(float $salary);
  public function getSalary(): float;
  public function getRoles(): array;
}
// 2. Classes
class Developer implements Employee
{
  protected $salary;
  protected $name;
  protected $roles;

  public function __construct(string $name, float $salary)
  {
    $this->name = $name;
    $this->salary = $salary;
  }
  public function getName(): string
  {
    return $this->name;
  }
  public function setSalary(float $salary)
  {
    $this->salary = $salary;
  }
  public function getSalary(): float
  {
    return $this->salary;
  }
  public function getRoles(): array
  {
    return $this->roles;
  }
}
class Designer implements Employee
{
  protected $salary;
  protected $name;
  protected $roles;

  public function __construct(string $name, float $salary)
  {
    $this->name = $name;
    $this->salary = $salary;
  }
  public function getName(): string
  {
    return $this->name;
  }
  public function setSalary(float $salary)
  {
    $this->salary = $salary;
  }
  public function getSalary(): float
  {
    return $this->salary;
  }
  public function getRoles(): array
  {
    return $this->roles;
  }
}
// 3. UNIFORM CLASS
class Organization
{
  protected $employees;

  public function addEmployee(Employee $employee)
  {
    $this->employees[] = $employee;
  }
  public function getNetSalaries(): float
  {
    $netSalary = 0;
    forEach($this->employees as $employee) {
      $netSalary += $employee->getSalary();
    }
    return $netSalary;
  }
}

// 4. USE IT
$andriy = new Developer('Andriy Polukhin', 100000);
$nastena = new Designer('Anastasia Tsukrova', 150000);

$organization = new Organization();
$organization->addEmployee($andriy);
$organization->addEmployee($nastena);

echo "Net salaries: " . $organization->getNetSalaries();







?>