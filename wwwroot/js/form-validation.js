//Aubrey Farnbach (Wright) Section 2 Group 1
// This script is used to validate the form entry. The form cannot be submitted until these conditions are met.
$(function () {
    // Initialize form validation on the registration form.
    $("form[name='GradeCalculator']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side

            Assignments: {
                required: true,
                range: [0, 100]
            },
            Group_Project: {
                required: true,
                range: [0, 100]
            },
            Quizzes: {
                required: true,
                range: [0, 100]
            },
            Exams: {
                required: true,
                range: [0, 100]
            },
            Intex: {
                required: true,
                range: [0, 100]
            }
        },
        // Specify validation error messages
        messages: {
            Assignments: {
                required: "Required",
                range: "Please enter a number between 0 and 100"
            },
            Group_Project: {
                required: "Required",
                range: "Please enter a number between 0 and 100"
            },
            Quizzes: {
                required: "Required",
                range: "Please enter a number between 0 and 100"
            },
            Exams: {
                required: "Required",
                range: "Please enter a number between 0 and 100"
            },
            Intex: {
                required: "Required",
                range: "Please enter a number between 0 and 100"
            }
        },

        submitHandler: function (form) {
            form.submit();
        }
    });s
});