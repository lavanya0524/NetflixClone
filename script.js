/*   ------- SLIDER POSTER API ----------     */

const API_KEY = "0640648060133799656e325a6906a241";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const slider = document.getElementById("slider");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

async function fetchMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();
  displayMovies(data.results);
}

function displayMovies(movies) {
  movies.forEach((movie, index) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("relative", "slider-item");
    movieElement.innerHTML = `
            <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${
      movie.title
    }" class="rounded-lg  cursor-pointer" data-movie='${JSON.stringify(movie)}'>
            <div class="absolute top-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-lg rounded-bl-lg">TOP 10</div>
            <div class="absolute bottom-0 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg">Recently added</div>
            <div class="absolute bottom-0 right-0 text-white text-2xl font-bold p-2">${
              index + 1
            }</div>
        `;
    slider.appendChild(movieElement);
  });

  document.querySelectorAll(".slider-item img").forEach((img) => {
    img.addEventListener("click", (e) => {
      const movie = JSON.parse(e.target.dataset.movie);
      modalImage.src = IMAGE_BASE_URL + movie.backdrop_path;
      modalContent.innerHTML = `
                <h2 class="text-2xl font-bold mb-2">${movie.title}</h2>
                <p class="text-sm mb-2">Release Year: ${new Date(
                  movie.release_date
                ).getFullYear()}</p>
                <p class="text-sm mb-2">Genre: ${movie.genre_ids.join(", ")}</p>
                <p class="text-sm mb-4">${movie.overview
                  .split(" ")
                  .slice(0, 20)
                  .join(" ")}...</p>
            `;
      modal.classList.remove("hidden");
    });
  });
}

document.getElementById("prev").addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("next").addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

fetchMovies();

/*   ------- STICKY BUTTON ----------     */

document.addEventListener("scroll", function () {
  const stickyButton = document.getElementById("stickyButton");
  const triggerElement = document.querySelector(".additional-sections");
  const triggerPosition = triggerElement.getBoundingClientRect().top;

  if (triggerPosition <= parent.innerHeight) {
    stickyButton.classList.remove("hidden");
  } else {
    stickyButton.classList.add("hidden");
  }
});

/*   ------- FREQUENCTLY ASKED QUESTIONS ----------     */

function toggleDropdown1() {
  const dropdownContent1 = document.getElementById("dropdown-content-1");
  const toggleIcon1 = document.getElementById("toggle-icon-1");
  if (dropdownContent1.classList.contains("max-h-0")) {
    dropdownContent1.classList.remove("max-h-0");
    dropdownContent1.classList.add("max-h-96");
    toggleIcon1.innerHTML = "&times;";
  } else {
    dropdownContent1.classList.remove("max-h-96");
    dropdownContent1.classList.add("max-h-0");
    toggleIcon1.innerHTML = "&times;";
  }
}

function toggleDropdown2() {
  const dropdownContent2 = document.getElementById("dropdown-content-2");
  const toggleIcon2 = document.getElementById("toggle-icon-2");
  if (dropdownContent2.classList.contains("max-h-0")) {
    dropdownContent2.classList.remove("max-h-0");
    dropdownContent2.classList.add("max-h-96");
    toggleIcon2.innerHTML = "&times;";
  } else {
    dropdownContent2.classList.remove("max-h-96");
    dropdownContent2.classList.add("max-h-0");
    toggleIcon2.innerHTML = "&times;";
  }
}

function toggleDropdown3() {
  const dropdownContent = document.getElementById("dropdown-content-3");
  const toggleIcon = document.getElementById("toggle-icon-3");
  if (dropdownContent.classList.contains("max-h-0")) {
    dropdownContent.classList.remove("max-h-0");
    dropdownContent.classList.add("max-h-96");
    toggleIcon.innerHTML = "&times;";
  } else {
    dropdownContent.classList.remove("max-h-96");
    dropdownContent.classList.add("max-h-0");
    toggleIcon.innerHTML = "&times;";
  }
}

function toggleDropdown4() {
  const dropdownContent = document.getElementById("dropdown-content-4");
  const toggleIcon = document.getElementById("toggle-icon-4");
  if (dropdownContent.classList.contains("max-h-0")) {
    dropdownContent.classList.remove("max-h-0");
    dropdownContent.classList.add("max-h-96");
    toggleIcon.innerHTML = "&times;";
  } else {
    dropdownContent.classList.remove("max-h-96");
    dropdownContent.classList.add("max-h-0");
    toggleIcon.innerHTML = "&times;";
  }
}

function toggleDropdown5() {
  const dropdownContent = document.getElementById("dropdown-content-5");
  const toggleIcon = document.getElementById("toggle-icon-5");
  if (dropdownContent.classList.contains("max-h-0")) {
    dropdownContent.classList.remove("max-h-0");
    dropdownContent.classList.add("max-h-96");
    toggleIcon.innerHTML = "&times;";
  } else {
    dropdownContent.classList.remove("max-h-96");
    dropdownContent.classList.add("max-h-0");
    toggleIcon.innerHTML = "&times;";
  }
}

function toggleDropdown6() {
  const dropdownContent = document.getElementById("dropdown-content-6");
  const toggleIcon = document.getElementById("toggle-icon-6");
  if (dropdownContent.classList.contains("max-h-0")) {
    dropdownContent.classList.remove("max-h-0");
    dropdownContent.classList.add("max-h-96");
    toggleIcon.innerHTML = "&times;";
  } else {
    dropdownContent.classList.remove("max-h-96");
    dropdownContent.classList.add("max-h-0");
    toggleIcon.innerHTML = "&times;";
  }
} 

/* ---------------  Disable context menu ------------ */ 
/* document.addEventListener("contextmenu",function(e){
  e.preventDefault()
},false) */
