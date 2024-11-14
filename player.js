Amplitude.init({
    songs: [
        {
            name: 'Equilibrium I (Cello version)',
            artist: 'David Hilowitz',
            album: 'Equilibrium I (Cello version) by David Hilowitz',
            url: './music/David Hilowitz - Equilibrium I (Cello version).mp3',
            cover_art_url:'./music/David Hilowitz - Equilibrium I.jpg'
        },
        {
            name: 'Thiên Địa Hữu Tình Duyên',
            artist: 'Đan Trường - Juky San',
            album: 'Thiên Địa Hữu Tình Duyên (Liên khúc)',
            url: './music/thienhahuutinhduyen.mp3',
            cover_art_url:'./music/thien.jpg'
        },
        {
            name: 'Thiên Lý Ơi',
            artist: 'Jack , Viruss ( Sáng tác )',
            album: 'Thiên Lý Ơi (album)',
            url: './music/thien-ly-oi-jack.mp3',
            cover_art_url: './music/thien-ly-oi-jack.jpg'
        }
    ]
});


function playSong(index) {
    Amplitude.playSongAtIndex(index);
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark'); 
    document.body.classList.toggle('text-white'); 
});

const repeatBtn = document.getElementById('repeatBtn');
repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active');
});