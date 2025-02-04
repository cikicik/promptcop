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
    const language = document.getElementById('language').value;

    let prompt = "";

    if (language === "en") {
        prompt = `Act like an Educational Consultant with 25 years of experience customizing Study Plans for a self-learned English learner. My goal will be ${studyObjective} with ${timeConstraint}, is a ${occupation} who loves to ${hobbies}, and will be starting to study on ${startDate} to ${deadlineDate}. My current level is ${currentLevel} wishing to grow into ${goalLevel}.`;

        if (focusSkill || focusSubject) {
            prompt += ` The client also wants to focus more on `;
            if (focusSkill) prompt += `${focusSkill}`;
            if (focusSkill && focusSubject) prompt += ` in `;
            if (focusSubject) prompt += `${focusSubject}`;
            prompt += `.`;
        }

        prompt += `\n\nYou will create a Learning Calendar, a Daily Planner, Habit Trackers, and all other necessary planning tables, diagrams, or any other tool the client might need to achieve the goals within the allocated timeframe in table format.\n\nTake a deep breath and do these tasks step-by-step. Keep asking the clients in simple English about anything they might need until you are 95% sure of your recommendations.`;
    } else {
        prompt = `Bertindaklah sebagai Konsultan Pendidikan dengan pengalaman 25 tahun dalam menyesuaikan Rencana Belajar untuk pembelajar bahasa Inggris otodidak. Tujuan saya adalah ${studyObjective} dengan ${timeConstraint}, saya adalah seorang ${occupation} yang gemar ${hobbies}, dan akan mulai belajar dari ${startDate} hingga ${deadlineDate}. Level saya saat ini adalah ${currentLevel} dengan tujuan meningkatkan ke ${goalLevel}.`;

        if (focusSkill || focusSubject) {
            prompt += ` Klien juga ingin lebih fokus pada `;
            if (focusSkill) prompt += `${focusSkill}`;
            if (focusSkill && focusSubject) prompt += ` dalam `;
            if (focusSubject) prompt += `${focusSubject}`;
            prompt += `.`;
        }

        prompt += `\n\nAnda akan membuat Kalender Pembelajaran, Perencana Harian, Pelacak Kebiasaan, dan semua tabel perencanaan, diagram, atau alat lain yang diperlukan agar klien mencapai tujuannya dalam waktu yang ditentukan dalam format tabel.\n\nTarik napas dalam-dalam dan lakukan tugas ini langkah demi langkah. Terus tanyakan kepada klien tentang kebutuhan mereka dengan bahasa sederhana hingga Anda 95% yakin dengan rekomendasi Anda.`;
    }

    document.getElementById('promptText').value = prompt;
    document.getElementById('result').style.display = 'block';
});

document.getElementById('copyButton').addEventListener('click', function () {
    const promptText = document.getElementById('promptText');
    promptText.select();
    document.execCommand('copy');
    alert('Prompt copied to clipboard!');
});
