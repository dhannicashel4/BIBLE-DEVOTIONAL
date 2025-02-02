const devotionals = [
    { date: "January 1", verse: "Psalm 118:24", message: "This is the day the Lord has made; let us rejoice and be glad in it." },
    { date: "January 2", verse: "Proverbs 3:5-6", message: "Trust in the Lord with all your heart and lean not on your own understanding." },
    { date: "January 3", verse: "Matthew 6:33", message: "Seek first the kingdom of God and His righteousness, and all these things will be given to you." },
    // Add devotionals for all 365 days...
    { date: "December 31", verse: "Revelation 21:4", message: "He will wipe away every tear from their eyes, and death shall be no more." }
];

let currentDay = new Date().getDate() - 1;
let currentMonth = new Date().getMonth();

function updateDevotional() {
    let index = (currentMonth * 31) + currentDay;
    let devotional = devotionals[index % devotionals.length];

    document.getElementById("date").innerText = devotional.date;
    document.getElementById("verse").innerText = `📖 ${devotional.verse}`;
    document.getElementById("devotional").innerText = devotional.message;
}

function prevDay() {
    if (currentDay === 0) {
        currentMonth = (currentMonth - 1 + 12) % 12;
        currentDay = 30;
    } else {
        currentDay--;
    }
    updateDevotional();
}

function nextDay() {
    if (currentDay === 30) {
        currentMonth = (currentMonth + 1) % 12;
        currentDay = 0;
    } else {
        currentDay++;
    }
    updateDevotional();
}

// Load today's devotional on page load
updateDevotional();
