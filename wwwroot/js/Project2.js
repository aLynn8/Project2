// Aubrey Farnbach (Wright) Section 2 Group 1

// Gets values from form and calculates grade upon submission
$("#submitbutton").click(function () {
    var Assignments = $("#Assignments").val();
    var Group_Projects = $("#Group_Project").val();
    var Quizzes = $("#Quizzes").val();
    var Exams = $("#Exams").val();
    var Intex = $("#Intex").val();

    //Calculates percentage grade
    var raw_score = parseInt(Assignments) * .5 + parseInt(Group_Projects) * .1 + parseInt(Quizzes) * .1 + parseInt(Exams) * .2 + parseInt(Intex) * .1;
    var letter_grade = "Q" //placeholder

    //Calculates letter grade
    if (raw_score >= 94) {
        letter_grade = "A"
    } else if (raw_score >= 90) {
        letter_grade = "A-"
    } else if (raw_score >= 87) {
        letter_grade = "B+"
    } else if (raw_score >= 84) {
        letter_grade = "B"
    } else if (raw_score >= 80) {
        letter_grade = "B-"
    } else if (raw_score >= 77) {
        letter_grade = "C+"
    } else if (raw_score >= 74) {
        letter_grade = "C"
    } else if (raw_score >= 70) {
        letter_grade = "C-"
    } else if (raw_score >= 67) {
        letter_grade = "D+"
    } else if (raw_score >= 64) {
        letter_grade = "D"
    } else if (raw_score >= 60) {
        letter_grade = "D-"
    } else {
        letter_grade = "E"
    }

    //saves alert string
    var alert_text = letter_grade + " " + raw_score + "%";

    //If the conditions in the separate validatoin script are met, then this displays the alert. 
    if ($.isNumeric(raw_score) && (0 <= Assignments <= 100) && (0 <= Group_Projects <= 100) && (0 <= Quizzes <= 100) && (0 <= Exams <= 100) && (0 <= Intex <= 100)) {
        alert(String(alert_text));
    }

});