// array constants
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ----------------------------------------------------------------------------------

// arr.forEach(callback(currentValue, optional index, optional array))

companies.forEach((currVal, idx, arr) => {
  console.log(currVal);
  console.log(idx);
  console.log(arr);
});

// ----------------------------------------------------------------------------------

// arr.filter(callback(predicate, optional index, optional array))

const canDrink = ages.filter((age) => age >= 21);

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

// ----------------------------------------------------------------------------------

// arr.map(callback(currentValue, optional index, optional array))

const companyNames = companies.map((company) => company.name);

const formattedCompanies = companies.map((company) => {
  return `${company.name} [${company.start} - ${company.end}]`;
});

const agesSquare = ages.map((age) => Math.sqrt(age));

// ----------------------------------------------------------------------------------

// arr.sort(firstEl, secondEl)

const ascendingCompanyStartYears = companies.sort((c1, c2) => {
  return c1.start > c2.start ? 1 : -1;
});

const ascendingAges = ages.sort((a, b) => a - b);

// ----------------------------------------------------------------------------------

// arr.reduce(callback(accumulator, currentValue, optional index, optional array), optional initial value)

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

// ----------------------------------------------------------------------------------

// combined methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, curr) => total + curr);
