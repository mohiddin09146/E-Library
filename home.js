
      let savedUser = localStorage.getItem("storedUsername");
        let dict = {
  "y22am3201": "ANDE UMA MAHESWARI",
  "y22am3202": "BALE ABHINAY VINSY",
  "y22am3203": "BANAVATH VENKAT RAM",
  "y22am3204": "BANDISETTY JAGADEESH",
  "y22am3205": "BEEMANAPALLI RAMACHANDRA",
  "y22am3206": "BODAPATI NOOKARAJU",
  "y22am3207": "BODA PAVAN KUMAR",
  "y22am3208": "CHENNA SATYANNARAYANA",
  "y22am3209": "CHIKKALA KRUPA SON",
  "y22am3210": "CHINTAMALLA TEJASWINI",
  "y22am3211": "CHINTHALPUDI RAJASHEKHAR",
  "y22am3212": "DISSIMUDI DEVI ANJANA PUSHPA",
  "y22am3213": "DOMMETI JAGATHKALYANI",
  "y22am3214": "EDUMADU SWATHI",
  "y22am3215": "GORLI PRANEETHA",
  "y22am3216": "GOTTIPATI LEELA VIJAY KUMAR",
  "y22am3217": "GUDIKKALA HANOK",
  "y22am3218": "GUDIVADA UMASANKAR",
  "y22am3219": "JANU BHANU PRAKASH",
  "y22am3220": "JONNAKUTI SUJAN KUMAR",
  "y22am3221": "KAGITHALA ASHOK KUMAR",
  "y22am3222": "KOKA JAYA VARMA",
  "y22am3223": "KONDA JAGADEESH",
  "y22am3224": "DONDRAGUNTA TEVAN SANTOSH",
  "y22am3225": "KONDRU RATNA KUMAR",
  "y22am3226": "KUNCHALETHA REVATHI",
  "y22am3227": "MADDI JAGADEESH",
  "y22am3228": "MADDU MANASWI PRIYA",
  "y22am3229": "MADIMIDISTI BALA",
  "y22am3230": "MARISETTI BHAGYA LAKSHMI",
  "y22am3231": "MARUPUDI VEERENDRA",
  "y22am3232": "MOGILI BALAJI",
  "y22am3233": "MONDA THARANI SRI",
  "y22am3234": "MUNAVATH VENKATA VARSHITH",
  "y22am3235": "MUDDULURI SULTAN",
  "y22am3236": "NAGUBOINA SAI GANESH",
  "y22am3237": "NAKKA VENKESH",
  "y22am3238": "NAMBURU MOUNIKA",
  "y22am3239": "NAMBURU PRASANTH MAHIMA TEJAS",
  "y22am3240": "NANI DHANA LAKSHMI",
  "y22am3241": "NEERASA HARI KRISHNA",
  "y22am3242": "PALLAPATI BHARATHCHANDRA",
  "y22am3243": "PANCHIREDDI YUVARAJU",
  "y22am3244": "PANGA PRAGNA",
  "y22am3245": "PASUPULETI KOUSHIK KUMAR",
  "y22am3246": "PILLI BHARATH",
  "y22am3247": "POTHURAJU SONY",
  "y22am3248": "PULIME NAGA VEERA SAI RAM",
  "y22am3249": "PULIMELA RAJASEKHAR",
  "y22am3250": "PYDI PRANEETHIKA",
  "y22am3251": "SANKA HARSHINI",
  "y22am3252": "SHAIK ABDUL RAHEEM",
  "y22am3253": "SHAIK MASEEDU MOHIDDIN",
  "y22am3254": "SINGAMPALLI BALA VENKATARAJU",
  "y22am3255": "TAMMA SATHVIK REDDY",
  "y22am3256": "TELLA VENKATA SIVA NAGA RAJU",
  "y22am3257": "THAINANA SAMUEL",
  "y22am3258": "VALLEPU LAKSHMI",
  "y22am3259": "VELURI HAVILA",
  "y22am3260": "VISHAKA ANUSHA",
  "y22am3261": "VODAREVU SHAIK MOHAMMAD KAIF",
  "y22am3262": "YAMARTHI SUSEEL KUMAR",
  "y22am3263": "YARLAGADDA SRINIVAS",
  "l23am3267": "BOMMINENI GOPAL",
  "l23am3268": "NALLAPANENI SAI TEJA",
  "l23am3269": "PASUMARTHI JEEVAN KUAMR",
  "l23am3270": "SAGA JAYA NAGA CHANDRIKA",
  "l23am3271": "SAYYED FAREED BABU",
  "l23am3272": "VARIKUTI RAMESH",
  "l23am3273": "VENNA CHANDRA SEKHAR REDDY",
  "l23am3274": "YAMARTHI STEPHEN"
}
  function showAlert(message) {
    document.getElementById("alert-message").innerText = message;
    document.getElementById("custom-alert").style.display = "block";
  }

  function closeAlert() {
    document.getElementById("custom-alert").style.display = "none";
  }

  showAlert("welcome "+dict[savedUser])
  console.log(localStorage.getItem("books"));
const books = JSON.parse(localStorage.getItem("books")) || [];

const container = document.getElementById("cards-container");

// Clear previous content
container.innerHTML = "";

books.forEach(book => {
    const card = `
    <div class="card m-2 p-2 shadow-sm custom-card">
        <img src="${book.image}" class="card-img-top" alt="${book.name} image">
        <div class="card-body">
            <h6 class="card-title">${book.name}</h6>
            <p class="card-text"><strong>Author:</strong> ${book.author}</p>
            <p class="card-text"><strong>Semester:</strong> ${book.semester}</p>
             <p class="card-text"><strong>Books:</strong> ${book.books_count}</p>
            <p class="card-text"><strong>Discription:</strong> ${book.discription}</p>
            
        </div>
    </div>`;
    
    container.insertAdjacentHTML("beforeend", card);
});
function extra_books() {
  const extraDiv = document.getElementById("extra");
  extraDiv.innerHTML = ""; // Clear previous books

  const books = JSON.parse(localStorage.getItem("Normal")) || {}; // Corrected key name

  Object.entries(books).forEach(([name, count], index) => {
    setTimeout(() => {
      const bookCard = document.createElement("div");
      bookCard.className = "col-md-4 book-card";
      bookCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Count: ${count}</p>
             
          </div>
        </div>
      `;
      extraDiv.appendChild(bookCard);
      requestAnimationFrame(() => {
        bookCard.style.opacity = "1";
        bookCard.style.transform = "translateY(0)";
      });
    }, index * 600); // Delay for smooth effect
  });
}
function getNormal() {
    return JSON.parse(localStorage.getItem('Normal')) || {};
}
       console.log(getNormal());

let searchTimeouts = [];
function extra_books() {
  const extraDiv = document.getElementById("extra");
  extraDiv.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("Normal")) || {};

  let delayIndex = 0;
  Object.entries(books).forEach(([name, details]) => {
    let count = details.count;
    let author = details.author;

    setTimeout(() => {
      const bookCard = document.createElement("div");
      bookCard.className = "col-md-4 book-card";
      bookCard.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Count: ${count}</p>
            <p class="card-text">Author: ${author}</p>
          </div>
        </div>
      `;
      extraDiv.appendChild(bookCard);
      requestAnimationFrame(() => {
        bookCard.style.opacity = "1";
        bookCard.style.transform = "translateY(0)";
      });
    }, delayIndex * 600);
    delayIndex++;
  });
}

function searchBooksSeparate() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value.toLowerCase();
  const searchDiv = document.getElementById("searchResults");

  searchTimeouts.forEach(timeout => clearTimeout(timeout));
  searchTimeouts = [];

  searchDiv.innerHTML = "";

  if (searchValue === "") {
    return;
  }

  const books = JSON.parse(localStorage.getItem("Normal")) || {};

  let delayIndex = 0;
  Object.entries(books).forEach(([name, details]) => {
    let count = details.count;
    let author = details.author;

    if (name.toLowerCase().includes(searchValue)) {
      let timeout = setTimeout(() => {
        const bookCard = document.createElement("div");
        bookCard.className = "col-md-4 book-card";
        bookCard.innerHTML = `
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Count: ${count}</p>
              <p class="card-text">Author: ${author}</p>
            </div>
          </div>
        `;
        searchDiv.appendChild(bookCard);
        requestAnimationFrame(() => {
          bookCard.style.opacity = "1";
          bookCard.style.transform = "translateY(0)";
        });
      }, delayIndex * 600);
      searchTimeouts.push(timeout);
      delayIndex++;
    }
  });
  if (delayIndex === 0) {
    searchDiv.innerHTML = `<p class="text-center text-danger bg-light">No books found</p>`;
  }
}
function clearSearchResults() {
  document.getElementById("searchResults").innerHTML = "";
}