document.getElementById("calculate").addEventListener("click", function () {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    alert("Mohon isi berat dan tinggi badan dengan benar.");
    return;
  }

  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Berat badan kurang";
  } else if (bmi < 24.9) {
    status = "Berat badan normal";
  } else if (bmi < 29.9) {
    status = "Berat badan berlebih";
  } else {
    status = "Obesitas";
  }

  const result = `Indeks Massa Tubuh (BMI) kamu adalah ${bmi.toFixed(
    2
  )} , ${status}.`;
  document.getElementById("result").innerHTML = result;
});
