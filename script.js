const gunID = document.querySelector("#gun");
const reload = document.querySelector("#reload");

// Sayfayı yenile
reload.addEventListener("click", () => location.reload());

// Arka planı rastgele resim yap
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
document.querySelector('.bg-wrapper').style.backgroundImage =
  `url("img/${images[Math.floor(Math.random() * images.length)]}")`;

// Geçen zamanı hesapla
function dateDifference() {
    const today = new Date();
    const target = new Date('2023-06-01');

    const diffMs = today - target;
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365 * 10) / 10;

    return {
        years, months, days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    };
}

// Yazıyı bastır
const result = dateDifference();
gunID.innerHTML = `
  Seninle geçen zaman...<br><br>
  💖 <strong>${result.years} yıl</strong>, 
  <strong>${result.months} ay</strong>, 
  <strong>${result.days} gün</strong><br>
  ⏰ <strong>${result.hours} saat</strong>, 
  <strong>${result.minutes} dakika</strong>, 
  <strong>${result.seconds} saniye</strong><br><br>
  Hepsi sana olan sevgimle dolu... 🌹
`;

console.log("Hayatımın anlamısın... Seni her şeyden çok seviyorum!");
