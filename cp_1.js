document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const feedbackDisplay = document.getElementById("feedbackMessage");
    const charCount = document.getElementById("charCount");
    const comments = document.getElementById("comments");

    comments.addEventListener("input", function(event) {
        charCount.textContent = '${comments.value.length} characters';
    });

    const tooltip = document.getElementById("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);
    document.addEventListener("mouseover", function(event){
        if (event.target.dataset.tooltip) {
            tooltip.textContent = e.target.dataset.tooltip;
            tooltip.style.display = "block";
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY - 25}px`;
        }
    });

    document.addEventListener("mouseout", (event) {
        if (event.target.dataset.tooltip) {
            tooltip.style.display = "none";
        }
    });
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const commentText = comments.value.trim();

        if (!username || !email || !commentText) {
            alert("Please fill in all fields.");
            return;
        }

        const feedback = document.createElement("div");
        feedback.className = "feedback-entry";
        feedback.innerHTML = "<strong>" + username + "</strong> (" + email + ")<br> " + commentText;
        feedbackDisplay.appendChild(feedback);

        form.reset();
        charCount.textContent = "0 characters";
    });

    document.body.addEventListener("click", function(event) {
        if (form.contains(event.target)) return;
           event.stopPropagation();
        });
    });