
    document.getElementById('qcmForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Collecting answers
        var form = document.getElementById('qcmForm');
        var answers = {};
        var questions = form.querySelectorAll('.question');
        questions.forEach(function(question, index) {
            var radio = question.querySelector('input[type="radio"]:checked');
            if (radio) {
                answers['question' + (index + 1)] = radio.value;
            } else {
                answers['question' + (index + 1)] = ''; // If no option is selected
            }
        });

        // Displaying answers (You can modify this according to your requirement)
        var result = 'Réponses :\n';
        for (var i = 0; i < questions.length; i++) {
            result += 'Question ' + (i + 1) + ': ' + answers['question' + (i + 1)] + '\n';
        }
        alert(result);
    });

