<?php
/**
 * When to use?
 * Request enters from one end and keeps going from object to object till it finds the suitable handler
 */

// 1. ABSTRACT CLASS
abstract class Account
{
    protected $successor;
    protected $balance;

    public function setNext(Account $account)
    {
        $this->successor = $account;
    }

    public function pay(float $amountToPay)
    {
        if ($this->canPay($amountToPay)) {
            echo sprintf('Paid %s using %s' . PHP_EOL, $amountToPay, get_called_class());
        } elseif ($this->successor) {
            echo sprintf('Cannot pay using %s. Proceeding ..' . PHP_EOL, get_called_class());
            $this->successor->pay($amountToPay);
        } else {
            throw new Exception('None of the accounts have enough balance');
        }
    }

    public function canPay($amount): bool
    {
        return $this->balance >= $amount;
    }
}

// 2. CONCRETE CLASSES
class Bank extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}

class Paypal extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}

class Bitcoin extends Account
{
    protected $balance;

    public function __construct(float $balance)
    {
        $this->balance = $balance;
    }
}

// 3. USAGE
// Let's prepare a chain like below
// $bank->$paypall->$bitcoun
//
// First priority bank
//      if bank can't pay then paypal
//      if paypal can't pay then bit coin

$bank = new Bank(100);
$paypal = new Paypal(200);
$bitcoin = new Bitcoin(300);

$bank->setNext($paypal);
$paypal->setNext($bitcoin);

// Let's tru to pay using the first priority i.e. bank
$bank->pay(259);
// Ouput will be
//=============
// Cannot pay using bank. Proceeding...
// Cannot pay using paypal. Proceeding...
// Paid 259 using Bitcoin!


?>