var gunID = document.querySelector("#gun")
var gunID = document.querySelector("#gun")
var gunID = document.querySelector("#gun")




function dateDifference() {
    const today = new Date();
    const target = new Date('2023-06-01');

    const diffMs = today - target; // Milisaniye farkı
    const second = Math.floor(diffMs / 1000)
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days/365*10)/10

    return {
        years,
        weeks,
        days,
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
`
