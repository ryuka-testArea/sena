var gunID = document.querySelector("#gun")
var gunID = document.querySelector("#gun")
var gunID = document.querySelector("#gun")

// Resim dosyalarının isimlerini bir diziye ekleyin.
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; // 'img' klasöründeki resim dosyaları

// Rastgele bir resim seçme fonksiyonu
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return `img/${images[randomIndex]}`;
}

// .bg sınıfına sahip elementi seç
const bgElement = document.querySelector('.bg');

// Arka plan resmini rastgele belirle
bgElement.style.backgroundImage = `url(${getRandomImage()})`;


function dateDifference() {
    const today = new Date();
    const target = new Date('2023-06-01');

    const diffMs = today - target; // Milisaniye farkı
    const second = Math.floor(diffMs / 1000)
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days/30);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days/365*10)/10

    return {
        years,
        weeks,
        days,
        months,
        hours: hours % 24,
        minutes: minutes % 60,
        second : second % 60,
    };
}

const result = dateDifference();


gunID.innerHTML = `Seni 

        
        <h1 >
           ${result.years} Yil
        </h1>

        <h1 >
        ${result.months} Ay
        </h1>

        <h1 >
           ${result.weeks} Hafta
        </h1>

        <h1 >
            ${result.days} Gün
            </h1>
            
            <h1 >
            ${result.hours} saat
            </h1>
            

        <h1 >
              ${result.minutes} dakika
        </h1>

                <h1 >
              ${result.second} saniye
        </h1>

        Boyunca Hergün Sevdim
        <br>
        İyiki Varsin Prensesim
`
console.log("Kurcalıyorsan eger 12 aralık 2024 saat 1 gibi yazdim bunu en son mesajımda yanlız kalmak istediğimi söylemiştim gercekten içime oturdu ilerde daha neler yapmazsın demen")