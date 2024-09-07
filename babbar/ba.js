let startDate = new Date("07 sep,2024 22:31:00").getTime();
let endDate = new Date().getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - endDate;
    const distancePending =startDate - now;


    // call of days hours min secs
    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hours = Math.floor((distancePending % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
    const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
    const secs = Math.floor((distancePending % (60 * 1000)) / (1000));

    // populate
    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("second").innerHTML = secs; 

    let totalDistance=endDate-startDate;
    let percentageDistance=(distanceCovered/totalDistance)*100;

    document.querySelector("barin").style.width=percentageDistance="%";


    if(distancePending<=0){
        clearInterval();
        document.getElementById("timer-box").innerHTML="expired";
        document.getElementById("barin").style.width= "100%";
    }


}
setInterval(updateTimer, 1000);
updateTimer()




// // Set your future end date here
// let endDate = new Date("21 September, 2024 17:00:00").getTime();

// function updateTimer() {
//     const now = new Date().getTime();
//     const distancePending = endDate - now;

//     // // If the target date is reached or passed
//     // if (distancePending < 0) {
//     //     // You can set to zero or any other value you prefer
//     //     document.getElementById("day").innerHTML = 0;
//     //     document.getElementById("hours").innerHTML = 0;
//     //     document.getElementById("minutes").innerHTML = 0;
//     //     document.getElementById("second").innerHTML = 0;
//     //     return; // Stop the interval
//     // }

//     // Calculate days, hours, minutes, and seconds
//     const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
//     const hours = Math.floor((distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//     const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
//     const secs = Math.floor((distancePending % (60 * 1000)) / 1000);

//     // Populate the HTML elements
//     document.getElementById("day").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = mins;
//     document.getElementById("second").innerHTML = secs;
// }

// // Update the timer every second
// setInterval(updateTimer, 1000);

// // Initial call to display the timer immediately
// updateTimer();





