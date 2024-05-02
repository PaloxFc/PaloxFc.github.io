function redirectToSelected() {
            var selectElement = document.getElementById("socialMediaSelect");
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            if (selectedOption.value) {
                window.open(selectedOption.value, "_blank");
            } else {
                alert("Please select a social media platform.");
            }
        }
function clearFormFields() {
        document.getElementById('Contact').reset();
      }
  
      // Reload the page when it loses focus or when the user navigates away
      window.addEventListener('blur', function() {
        location.reload();
      });
  
      // Reload the page when navigating to another page within the same website
      window.addEventListener('beforeunload', function() {
        clearFormFields();
      });
