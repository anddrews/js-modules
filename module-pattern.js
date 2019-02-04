var gradesCalculator = (function () {
  // We keep these variables private inside this closure scope
  
  var myGrades = [93, 95, 88, 0, 55, 91];
  
  function average () {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
      return 'Your average grade is ' + total / myGrades.length + '.';
  }

  function failing (){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  }

  return {
    average: average,
    failing: failing
  }
})();

var failing = gradesCalculator.failing();
var average = gradesCalculator.average();

console.log(failing);
console.log(average);