(function(){
    emailjs.init('ecKiNvlvBoLwW9POW'); // Replace with your Email.js user ID
})();

function sendFeedbackEmail(feedbackData) {
    const emailData_2 = {
        to_name: feedbackData.name,
        to_email: "nihalcshah@gmail.com",
        message: `
            Feedback from ${feedbackData.name}\n
            Rating: ${feedbackData.rating}\n
            Likes: ${feedbackData.likes}\n
            Improvements: ${feedbackData.improvements}
        `
    };
    const emailData = {
        to_name: feedbackData.name,
        to_email: feedbackData.email,
        message: `
            Rating: ${feedbackData.rating}\n
            Likes: ${feedbackData.likes}\n
            Improvements: ${feedbackData.improvements}
        `
    };

    emailjs.send('service_vox5swh', 'template_yjm827w', emailData)
        .then((response) => {
            console.log('Email sent successfully:', response);
            alert('CJ thanks you for your feedback!');
        }, (error) => {
            console.error('Failed to send email:', error);
            alert('There was an error sending your feedback. Please try again later.');
        });

    emailjs.send('service_vox5swh', 'template_yjm827w', emailData_2)
        .then((response) => {
            console.log('Default email sent successfully:', response);
        }, (error) => {
            console.error('Failed to send email to CJ:', error);
        });
}
