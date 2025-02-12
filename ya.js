document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('message').classList.add('hidden');
});

document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    createHearts();
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('message').classList.add('hidden');
});

function createHearts() {
    const body = document.body;
    const numberOfHearts = 20; // Jumlah hati yang akan muncul

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Simbol hati
        heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        heart.style.animationDuration = Math.random() * 2 + 2 + 's'; // Durasi animasi acak
        heart.style.fontSize = Math.random() * 20 + 20 + 'px'; // Ukuran hati acak
        body.appendChild(heart);

        // Hapus hati setelah animasi selesai
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }
}

// Buat hati setiap 1 detik
setInterval(createHearts, 1000);