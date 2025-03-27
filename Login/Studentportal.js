function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var users = {
    "bommalibheemateja.22.csd@anits.edu.in": "anits123",
    "akisaisuryakamaltarun.22.csd@anits.edu.in": "anits123",
    "mandapatirohitvarma.22.csd@anits.edu.in": "anits123",
    "rellimadhu.22.csd@anits.edu.in": "anits123",
    "siddanathiroopeshvenkatganesh.22.csd@anits.edu.in": "anits123",
    "marridurgaprasad.22.csd@anits.edu.in": "anits123",
    "velugubantlapraveenkumar.22.csd@anits.edu.in": "anits123",
    "undelarajasekharreddy.22.csd@anits.edu.in": "anits123",
  };

  var redirectPaths = {
    "akisaisuryakamaltarun.22.csd@anits.edu.in": "A22126551067/67.html",
    "bommalibheemateja.22.csd@anits.edu.in": "A22126551072/72.html",
    "mandapatirohitvarma.22.csd@anits.edu.in": "A22126551092/92.html",
    "marridurgaprasad.22.csd@anits.edu.in": "A22126551094/94.html",
    "rellimadhu.22.csd@anits.edu.in": "A22126551107/107.html",
    "siddanathiroopeshvenkatganesh.22.csd@anits.edu.in": "A22126551114/114.html",
    "undelarajasekharreddy.22.csd@anits.edu.in": "A22126551122/122.html",
    "velugubantlapraveenkumar.22.csd@anits.edu.in": "A22126551125/125.html",
  };

  if (users.hasOwnProperty(username) && password === users[username]) {
    showSuccessMessage();
    
    setTimeout(function () {
      // Redirect only if a valid path exists
      if (redirectPaths.hasOwnProperty(username)) {
        window.location.href = redirectPaths[username];
      } else {
        // Default redirection if no specific path is found
        window.location.href = "index.html";
      }
    }, 3000);
    
    return false; // Prevent form submission
  } else {
    alert("Invalid username or password. Please try again.");
    return false;
  }
}

function showSuccessMessage() {
  document.querySelector('.dim-overlay').style.display = 'block';
  var successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';

  setTimeout(function () {
    successMessage.style.display = 'none';
    document.querySelector('.dim-overlay').style.display = 'none';
  }, 3000);
}
