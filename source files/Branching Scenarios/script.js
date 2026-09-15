document.addEventListener('DOMContentLoaded', function() {
  // Add interactive elements for SCORM tracking
  const startButton = document.querySelector('.btn-primary');
  if (startButton) {
    startButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Course started!');
      // Simulate SCORM tracking
      if (typeof window.scormAPI !== 'undefined') {
        window.scormAPI.SetValue('cmi.core.lesson_status', 'in_progress');
      }
    });
  }
});