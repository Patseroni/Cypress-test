async function fetchChallenges() {
    const userErrorMessage = "Failed to load challenges, please come back later.";

    try {
        const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");

        if (!res.ok) {
            throw new Error(userErrorMessage);
        }

        const data = await res.json();
        return data.challenges;

    } catch (error) {
        console.error("Error when trying to fetch api:", error);

        const errorWrapper = document.querySelector(".error__wrapper");
        errorWrapper.classList.add("error__message")
        errorWrapper.textContent = userErrorMessage;
    }
}



async function fetchAvailableTimes(date, challengeId) {
    const url = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${date}&challenge=${challengeId}`;
    const res = await fetch(url);
    return res.json();
}

async function postReservations(id, name, email, date, time, nrOfparticipants) {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            challenge: id,
            name: name,
            email: email,
            date: date,
            time: time,
            participants: nrOfparticipants,
        }),
    });
    if (!res.ok) {
        throw new Error(`Failed: ${res.statusText}`);
    }
    else {
        return res;
    }
}