document.getElementById("btn").addEventListener("click", function() {
  var height_val = document.getElementById('height').value;
  var weight_val = document.getElementById('weight').value; 


  var height_in_m = height_val / 100;


  var bmi = weight_val / (height_in_m * height_in_m);

 
  var bmio = bmi.toFixed(2);

  let category = "";
  switch (true) {
      case (bmi < 18.5):
          category = "Underweight";
          break;
      case (bmi >= 18.5 && bmi <= 24.9):
          category = "Ideal";
          break;
      case (bmi >= 25 && bmi <= 29.9):
          category = "Overweight";
          break;
      case (bmi >= 30):
          category = "Obesity";
          break;
      default:
          category = "Invalid BMI value";
  }

  document.getElementById("result").innerHTML = "Your BMI is " + bmio + " Category: " + category;
});
