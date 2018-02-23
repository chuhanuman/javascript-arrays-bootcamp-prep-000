function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element)
  return array
}
function destructivelyRemoveElementToBeginningOfArray(array) {
  array.shift()
  return array
}
function RemoveElementToBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function RemoveElementFromEndOfArray(array) {
  return array.slice(0, iceCreams.length - 1)
}