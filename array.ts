const salary: number = 7500;
const friendSalaries = [7500, 1200, 17933, 2342, 8000, 98870];
const friends: string[] = ['sakib', 'rakib', 'nakib', 'dakib'];

friendSalaries[0] = 10500;
friendSalaries.push(13100);

// friendSalaries[4] = '9800';
// friendSalaries.push('7500');

friends.push('Bakib');
friends[2] = 'Qakib';

let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}