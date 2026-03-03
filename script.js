function generatePassword() {
  const length = document.getElementById("length").value;
  const resultField = document.getElementById("result");

  if (length < 8 || length > 20) {
    alert("Please enter a length between 8 and 20");
    return;
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  resultField.value = password;
}

function checkStrength() {
  const password = document.getElementById("checkInput").value;
  const result = document.getElementById("strengthResult");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()]/.test(password)) strength++;

  if (strength === 5) {
    result.textContent = "Very Strong 🔥";
    result.style.color = "green";
  } else if (strength >= 3) {
    result.textContent = "Strong 💪";
    result.style.color = "blue";
  } else if (strength === 2) {
    result.textContent = "Medium ⚠️";
    result.style.color = "orange";
  } else {
    result.textContent = "Weak ❌";
    result.style.color = "red";
  }
}
