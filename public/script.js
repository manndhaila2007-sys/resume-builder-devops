document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form');
  const printBtn = document.getElementById('print-btn');
  const preview = document.getElementById('resume-preview');
  
  // Input fields
  const inputs = {
    fullName: document.getElementById('fullName'),
    email: document.getElementById('email'),
    education: document.getElementById('education'),
    experience: document.getElementById('experience')
  };

  // Function to update the preview in real-time
  const updatePreview = () => {
    const fullName = inputs.fullName.value || 'Your Name';
    const email = inputs.email.value || 'your.email@example.com';
    const education = inputs.education.value || 'Your educational background will appear here...';
    const experience = inputs.experience.value || 'Your professional experience will appear here...';

    const resumeHTML = `
      <div class="resume-output fade-in">
        <h3>${fullName}</h3>
        <p class="contact">✉️ ${email}</p>
        
        <h4>🎓 Education</h4>
        <p>${education}</p>
        
        <h4>💼 Experience</h4>
        <p>${experience}</p>
      </div>
    `;

    preview.innerHTML = resumeHTML;
    
    // Show print button if they started typing a name
    if (inputs.fullName.value.trim().length > 0) {
      printBtn.classList.add('visible');
    } else {
      printBtn.classList.remove('visible');
    }
  };

  // Add event listeners for real-time typing
  Object.values(inputs).forEach(input => {
    input.addEventListener('input', updatePreview);
  });

  // Prevent form submission from reloading the page
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add a little celebration animation on the preview
    preview.classList.add('celebrate');
    setTimeout(() => preview.classList.remove('celebrate'), 500);
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });

  // Initialize with empty state
  updatePreview();
});
