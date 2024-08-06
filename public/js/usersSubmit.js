document.addEventListener('DOMContentLoaded', () => {
  // Selecting DOM elements
  const allUserForm = document.getElementById('all-user-form');
  const userForm = document.getElementById('user-form');
  const errorModal = document.getElementById('error-modal');
  const modalMessage = document.getElementById('modal-message');
  const closeBtn = document.querySelector('.close-btn');

  // Initially hide the error modal
  errorModal.style.display = 'none';

  // Event listener for the form to view all users
  allUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = `/users`;
  });

  // Event listener for the form to view a specific user
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = document.getElementById('custom-user-id').value;

    // Validate the user ID
    if (userId < 1 || userId > 208) {
      // If the user ID is not valid, show the error modal
      modalMessage.innerHTML =
        'Please enter a valid User ID between <br> 1 and 208.';
      errorModal.style.display = 'flex';
      return;
    }

    // If the user ID is valid, redirect to the specific user page
    window.location.href = `/users/${userId}`;
  });

  // Event listener to close the error modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    // Hide the modal
    errorModal.style.display = 'none';
  });

  // Event listener to close the error modal when clicking outside of the modal
  window.addEventListener('click', (e) => {
    if (e.target == errorModal) {
      // Hide the modal
      errorModal.style.display = 'none';
    }
  });
});
