// The T-0 we're calculating the fee from...
const T0_YEAR = 2020;
const T0_MONTH = 7;
const T0_DAY = 23;
const T0_HOUR = 12;
const T0_MINUTE = 0;
const T0_SECOND = 0;

const FEE_PER_SECOND = 500 / 15 / 60; // $500 per 15 minutes

let T0 = new Date(T0_YEAR, T0_MONTH - 1 /*zero-based*/, T0_DAY, T0_HOUR, T0_MINUTE, T0_SECOND, 0);

function calculateCurrentFine()
{
    let now = new Date();
    let diff = now - T0;
    if (diff < 0)
        diff = 0;
    diff = Math.floor(diff) / 1000; // Milliseconds to seconds
    return diff * FEE_PER_SECOND;
}

function fineToString(fine)
{
    let pennies = Math.floor(fine * 100) % 100;
    let dollars = Math.floor(fine)
    dollars = dollars.toLocaleString() + '.';
    pennies = pennies.toString();
    while (pennies.length < 2)
        pennies = '0' + pennies;
    return '$' + dollars + pennies;
}

function updateDisplay()
{
    let fine = calculateCurrentFine();
    let outputString = fineToString(fine);
    $('#fine').html(outputString);
}

$( document ).ready(function() {
    updateDisplay();
    setInterval(updateDisplay, 1000);
});