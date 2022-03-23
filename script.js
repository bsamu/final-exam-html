let arr = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
]

const creator = (item) => {
    return `
        <div class="card">
            <div class="subCard">
                <div class="sub">${item.sub}</div>
                <h2 class="title">${item.text}</h2>
                <div class="text">${item.title}</div>
            </div>
            <button button ><span class="buttonText">Save</span><span class="arrow material-icons">arrow_forward</span></button>
        </div>`
}

function loadEvent() {
    const container = document.querySelector("#container")
    for (const item of arr) {
        container.insertAdjacentHTML("beforeend", creator(item))
    }

    console.log('the page has loaded');
}

window.addEventListener("load", loadEvent);