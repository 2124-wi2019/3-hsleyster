/* Heather Sleyster
sleyster_a03b.js
INFO 2124
Thoendel
12/21/2019
*/

const firstName = "Heather";
const lastName = "Sleyster";
const villainFirstName = "Darth";
const villainLastName = "Vader";
const companyName = "Google";
let annualSalary = 100000;
let laughString = "Bahahahaha";
let age = 40;
let weight = 148.5;
let counterStartValue = 5;
let message = `Good evening, ${ firstName }. I'm glad to see you could join us. \n
According to your files, you are ${ age } years old. That means next year you'll be
${ age + 1 } years old and if I double your age, you'd be ${ age * 2 } years old.
\n
I found your file beacuse your last name ${ lastName.toUpperCase()} was all capitalized
on your folder. This is unusual because our files usually have last names all lowercase.
So I expected to see ${ lastName.toLowerCase()} , which I did not see. \n
Allow me to introduce myself. My name is ${ villainFirstName } ${ villainLastName }. \n
I'm the chief investigator at ${ companyName }... I've been tasked with investigating you
due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
know, your annual salary is $${ annualSalary } and 10% of your annual salary is $${ annualSalary * .10 },
which is a sizeable amount for our company. \n
I know your password. It was simple, it's just the first, third, and fourth letters of your first name: \n
${ firstName.charAt(0)} ${ firstName.charAt(2)} ${ firstName.charAt(3)} \n
And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name: \n
${ lastName.indexOf("S")} ${ lastName.indexOf("e")} ${ lastName.indexOf("y")} \n
Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds ${ lastName.startsWith("V")} 
... and then I ask Google home, "Does my last name end with 'n'", and Google responds ${ lastName.endsWith("n") } \n
And sometimes, I ask Google home if my weight is finite, and Google home responds ${ isFinite(weight) }, which makes me happy.
... but when I ask if my first name is finite, Google home responds, ${ isFinite(firstName) } , and this makes me sad \n
Anyway, I've talked too much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us. \n
Allow me to laugh five times: \n
${ laughString.repeat(5) } \n\n
**Background Voice** \n
Now counting down: \n
${ counterStartValue } \n
${ counterStartValue - 1 } \n
${ counterStartValue - 2 } \n
${ counterStartValue - 3 } \n
${ counterStartValue - 4 } \n
${ counterStartValue - 5 } \n
\n
Boom!`
console.log(message);