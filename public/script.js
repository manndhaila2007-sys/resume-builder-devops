document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form');
  const preview = document.getElementById('resume-preview');
  const printBtn = document.getElementById('print-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    const resumeHTML = `
      <div class="resume-output">
        <h3>${fullName}</h3>
        <p class="contact">✉️ ${email}</p>
        
        <h4>Education</h4>
        <p>${education}</p>
        
        <h4>Experience</h4>
        <p>${experience}</p>
      </div>
    `;

    preview.innerHTML = resumeHTML;
    printBtn.style.display = 'block';
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });
});
