$(document).ready(function() {
    function updateCountdown() {
        const eventDate = new Date('2025-01-12T17:00:00');
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            $('#countdown > div').text('¡Es el día del cumpleaños!');
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        $('#countdown > div').html(`<div>${days}<span>días</span></div><div>${hours}<span>hrs.</span></div><div>${minutes}<span>mins.</span></div><div>${seconds}<span>segs.</span></div>`);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});