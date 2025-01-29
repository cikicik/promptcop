document.getElementById('promptForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const studyObjective = document.getElementById('studyObjective').value;
    const timeConstraint = document.getElementById('timeConstraint').value;
    const occupation = document.getElementById('occupation').value;
    const hobbies = document.getElementById('hobbies').value;
    const startDate = document.getElementById('startDate').value;
    const deadlineDate = document.getElementById('deadlineDate').value;
    const currentLevel = document.getElementById('currentLevel').value;
    const goalLevel = document.getElementById('goalLevel').value;
    const focusSkill = document.getElementById('focusSkill').value;
    const focusSubject = document.getElementById('focusSubject').value;

    let prompt = `Act like an Educational Consultant with 25 years of experience customizing Study Plans for a self-learned English learner. Your client's goal will be ${studyObjective} with ${timeConstraint}, is a ${occupation} who loves to ${hobbies}, and will be starting to study on ${startDate} to ${deadlineDate}. The client's current level is ${currentLevel} wishing to grow into ${goalLevel}.`;

    if (focusSkill || focusSubject) {
        prompt += ` The client also wants to focus more on `;
        if (focusSkill) prompt += `${focusSkill}`;
        if (focusSkill && focusSubject) prompt += ` in `;
        if (focusSubject) prompt += `${focusSubject}`;
        prompt += `.`;
    }

    prompt += `\n\nYou will create a Learning Calendar, a Daily Planner, Habit Trackers, and all other necessary planning tables, diagrams, or any other tool the client might need to achieve the goals within the allocated timeframe. \n\nTake a deep breath and do these tasks step-by-step. Keep asking the clients about anything they might need until you are 95% sure of your recommendations.`;

    document.getElementById('promptText').value = prompt;
    document.getElementById('result').style.display = 'block';
});

document.getElementById('copyButton').addEventListener('click', function () {
    const promptText = document.getElementById('promptText');
    promptText.select();
    document.execCommand('copy');
    alert('Prompt copied to clipboard!');
});
