/* const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
*/ 



  const calculateAge = (person, currentYear) => {
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : 2024 - person.yearOfBirth;
  }

  const findTheOldest = (people, currentYear) => {
    return people.reduce((longestLived, currentPerson) => {
      const age = calculateAge(currentPerson, currentYear);
      if (age > (longestLived ? longestLived.age : 0)) {
        return { name: currentPerson.name, age };
      } else {
        return longestLived;
      }
    }, null);
  }
// Do not edit below this line
module.exports = findTheOldest;
