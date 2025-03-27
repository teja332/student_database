document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll('#menu li');
  var studentDetailsBox = document.querySelector('.student-details-box');
  var dashboardBox = document.querySelector('.dashboard-box');
  var aboutBox = document.querySelector('.about-box');
  var feedbackForm = document.querySelector('.feedback-form');
  var overlay = document.querySelector('.overlay');
  var popupBox = document.querySelector('.popup-box');
  var attendanceBtn = document.getElementById('attendanceBtn');
  var subjectsBtn = document.getElementById('subjectsBtn');
  var faqBox = document.querySelector('.faq-box');
  var faqMenuItem = document.getElementById('faq');

  var homeMenuItem = document.getElementById('home');
  homeMenuItem.classList.add('active');
  showOrHideStudentDetailsBox();

  var logo = document.querySelector('.logo-container');
  logo.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    updateDashboardBoxWidth();
  });

  menuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      menuItems.forEach(function (otherItem) {
        otherItem.classList.remove('active');
      });

      item.classList.add('active');

      showOrHideStudentDetailsBox();
      showOrHideDashboardBox();
      showOrHideAboutBox(item);
      showOrHideFeedbackForm(item);
      showOrHideFAQBox();
    });
  });

  function showOrHideStudentDetailsBox() {
    var isHomeActive = homeMenuItem.classList.contains('active');
    studentDetailsBox.style.display = isHomeActive ? 'block' : 'none';
  }

  function showOrHideDashboardBox() {
    var isDashboardActive = document.getElementById('dashboard').classList.contains('active');
    dashboardBox.style.display = isDashboardActive ? 'block' : 'none';
  }

  function showOrHideAboutBox(clickedItem) {
    var isAboutActive = clickedItem.id === 'aboutus';
    aboutBox.style.display = isAboutActive ? 'block' : 'none';
    document.body.classList.toggle('no-scroll', isAboutActive);
  }

  function showOrHideFeedbackForm(clickedItem) {
    var isFeedbackActive = clickedItem.id === 'feedback';
    feedbackForm.style.display = isFeedbackActive ? 'block' : 'none';
  }

  function showOrHideFAQBox() {
    var isFAQActive = faqMenuItem.classList.contains('active');
    faqBox.style.display = isFAQActive ? 'block' : 'none';

    if (isFAQActive) {
      showFAQContent();
    }
  }

  function updateDashboardBoxWidth() {
    // Implementation of the function to update the dashboard box width (if needed)
  }

  function showDashboard() {
    const studentDetailsBox = document.querySelector('.student-details-box');
    const dashboardBox = document.querySelector('.dashboard-box');

    studentDetailsBox.style.display = 'none';
    dashboardBox.style.display = 'block';
  }

  const dashboardMenuItem = document.getElementById('dashboard');
  dashboardMenuItem.addEventListener('click', showDashboard);

  function showAttendanceDialog() {
    overlay.style.display = 'flex';
    popupBox.style.display = 'block';
    overlay.classList.add('active');
    var attendancePercentage = 84.9;
    popupBox.innerHTML = `<p>Your attendance percentage is ${attendancePercentage}%`;
  }

  attendanceBtn.addEventListener('click', showAttendanceDialog);

  function redirectToSubjects() {
    window.open('../assets/Syllabus.pdf', '_blank');
  }

  subjectsBtn.addEventListener('click', redirectToSubjects);

  function showResultsOptions() {
    var resultOption = prompt("Select Results Option:\n1. 1st year 1st sem results\n2. 1st year 2nd sem results");

    if (resultOption === '1') {
      window.open('../assets/sem_1.pdf', '_blank');
    } else if (resultOption === '2') {
      window.open('../assets/sem_2.pdf', '_blank');
    } else {
      alert('Invalid option selected');
    }
  }

  resultsBtn.addEventListener('click', showResultsOptions);

  function showMessage(message) {
    overlay.style.display = 'flex';
    popupBox.style.display = 'block';
    overlay.classList.add('active');
    popupBox.innerHTML = `<p>${message}</p>`;
  }

  function redirectToQuizzesMessage() {
    window.open('https://classroom.google.com/','_blank');
  }
  quizzesBtn.addEventListener('click', redirectToQuizzesMessage);

  function showMeritsMessage() {
    showMessage("There are no Merits. Please contact your Class Teacher.");
  }

  function showCertificatesMessage() {
    showMessage("There are no Certificates. Please contact your Class Teacher.");
  }

  function redirectToFeeInfrastructureMessage() {
    window.open('fee122.pdf', '_blank');
  }

  feeInfrastructureBtn.addEventListener('click', redirectToFeeInfrastructureMessage);

  // quizzesBtn.addEventListener('click', showQuizzesMessage);
  meritsBtn.addEventListener('click', showMeritsMessage);
  certificatesBtn.addEventListener('click', showCertificatesMessage);

  faqMenuItem.addEventListener('click', function (event) {
    event.preventDefault();

    menuItems.forEach(function (otherItem) {
      otherItem.classList.remove('active');
    });

    faqMenuItem.classList.add('active'); 

    showOrHideFAQBox();
  });

  overlay.addEventListener('click', function (event) {
    if (!popupBox.contains(event.target)) {
      overlay.style.display = 'none';
      popupBox.style.display = 'none';
      overlay.classList.remove('active');
    }
  });

  function showFAQContent() {
    var faqContent = document.querySelector('.faq-content');

    if (!faqContent) {
      // Create the FAQ content container
      faqContent = document.createElement('div');
      faqContent.classList.add('faq-content');
      
      // Append FAQ content to the FAQ box
      document.querySelector('.faq-box').appendChild(faqContent);
    }

    // Populate the FAQ content
    faqContent.innerHTML = `
    <h3>Frequently Asked Questions</h3>
    <ul>
      <li><span>Q1 : </span> What is the purpose of this portal?<br>A : To know accurate details about you.</li>

      <li><span>Q2 : </span> How can I check my attendance percentage?<br>A: On Dashboard section you can check your attendance percentage.</li>
      
      <li><span>Q3 : </span> I forgot my password. How can I reset it?
      <br>A : Please go to your class teacher and report about this issue.</li>
      
      <li><span>Q4 : </span> What information can I find in the student portal?<br>A : You can access your attendance, grades, your qualifications and others.</li>
      
      <li><span>Q5 : </span> Can I access my grades and academic records through the portal?<br>A : Yes, you can access your records, if there any problem with that please contact your class teacher.</li>
      
      <li><span>Q6 : </span> Is there a feature to track my academic progress and graduation requirements on the portal?<br>A : Yes, you can track your all records as submitted by your class teacher.</li>
      
      <!-- Add more FAQ items as needed -->

    </ul>
  `;
  }
});
