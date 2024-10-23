// Set
// Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

const languages = ['English','Finnish','English','French','Spanish','English', 'French',]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
// Set(4) {"English", "Finnish", "French", "Spanish"}We can also use loop to add element to a set.

// We can also use loop to add element to a set.
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
// Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// We can delete an element from a set using a delete method.
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

// The has method can help to know if a certain element exists in a set.
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// It removes all the elements from a set.
companies.clear()
console.log(companies) // Set(0) {}

// -------------------------------------------------------------------------------------------------------
// Map =>similar like set
// Creating an Map from array
countries = [['Finland', 'Helsinki'],['Sweden', 'Stockholm'],['Norway', 'Oslo'],]
const map = new Map(countries)
console.log(map)
console.log(map.size) //3
// Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

// Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size) //3
// Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

// Getting a value from Map
console.log(countriesMap.get('Finland')) //Helsinki

// Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has('Finland')) // true






  