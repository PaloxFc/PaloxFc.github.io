function redirectToSelected() {
            var selectElement = document.getElementById("socialMediaSelect");
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            if (selectedOption.value) {
                window.open(selectedOption.value, "_blank");
            } else {
                alert("Please select a social media platform.");
            }
        }
