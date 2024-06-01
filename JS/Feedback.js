document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            previewFeedback();
        } else {
            form.reportValidity();
        }
    });

    function previewFeedback() {
        // Retrieve form data
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const firstTime = document.querySelector('input[name="firstTime"]:checked').value;
        const informative = document.querySelector('input[name="informative"]:checked').value;
        const improvements = document.getElementById("improvements").value;
        const satisfactionRadios = document.querySelectorAll('input[name="satisfaction"]');
        let satisfaction;
        satisfactionRadios.forEach(radio => {
            if (radio.checked) {
                satisfaction = radio.value;
            }
        });
        const recommendation = document.querySelector('input[name="recommendation"]:checked').value;
        const receiveUpdates = document.getElementById("receiveUpdates").value;
        const additionalQuestions = document.getElementById("additionalQuestions").value;

        // Construct preview HTML
        const previewHTML = `
            <h2>Preview</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>First Time Visiting: ${firstTime}</p>
            <p>Informative and Easy to Navigate: ${informative}</p>
            <p>Improvements: ${improvements}</p>
            <p>Rating: ${satisfaction}</p>
            <p>Recommendation: ${recommendation}</p>
            <p>Receive Updates: ${receiveUpdates}</p>
            <p>Additional Questions or Requests: ${additionalQuestions}</p>
            <button id="editBtn" class="btn">Edit</button>
            <button id="confirmBtn" class="btn">Confirm</button>
        `;

        // Display preview and hide form
        document.getElementById("previewFeedback").innerHTML = previewHTML;
        document.getElementById("previewFeedback").style.display = "block";
        form.style.display = "none";

        // Add event listeners for edit and confirm buttons
        document.getElementById("editBtn").addEventListener("click", function() {
            document.getElementById("previewFeedback").style.display = "none";
            form.style.display = "block";
        });

        document.getElementById("confirmBtn").addEventListener("click", function() {
            submitFeedback(); // Proceed with actual form submission
        });
    }

    function submitFeedback() {
        // Here you can handle form submission, for example, sending data to a server
        // For demonstration purposes, let's just display the confirmation message
        document.getElementById("previewFeedback").style.display = "none";
        document.getElementById("confirmationMessage").style.display = "block";
    }
});
