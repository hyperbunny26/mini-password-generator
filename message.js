function getPassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+?><:{}[]'";

    let passwordLength = 16;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        
        password += chars.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById('password').value = password;
}



function getAnswer() {
    let answers = ["pickles", "cheese wiz", "I have no answer", "hydration", "vitamns", "sirens", "justice", "chicken nuggets", "trees", "grass", "the sun", "Valkyrie", "Valhalla", "Heimdal", "Bronco", "Seahawk", "hamburger", "Black Panther", "Caffiene", "wine", "beer", "lantern", "brief", "lessons in combat", "war of the decade", "love is not peace", "peace is always war", "language is complicated" ];
    
    let myAnswers = answers[Math.floor(Math.random() * answers.length)]
    
    console.log(myAnswers);
    document.getElementById('answer').value = myAnswers;
}
    
    


