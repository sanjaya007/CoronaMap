const getLoad = () => {
  id("loading").style.display = "none";
};

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FuamF5YTciLCJhIjoiY2tidXZxdm11MDA0aTJ5cDcxcDJ2cWF3bSJ9.aQSI1e04ZPd6P7lXjLSIxw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [84.124008, 28.394857],
  zoom: 2,
  maxZoom: 3.5,
  minZoom: 1.5,
});

var coronaData = null;
// fetch("http://api.covid19api.com/summary")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     coronaData = data.Countries;
//     globalData = data.Global;
//     globalCoronaReport();
//     searchFn();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchData = async () => {
  try {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    console.log(data);
    coronaData = data.Countries;
    globalData = data.Global;
    globalCoronaReport();
    searchFn();
  } catch (error) {
    console.log(error);
  }
};
fetchData();

locationData.forEach((countryLocation) => {
  const name = countryLocation.name;
  const lat = countryLocation.lat;
  const lng = countryLocation.lng;
  const alpha2code = countryLocation.alpha2code;

  // var popup = new mapboxgl.Popup({ offset: 25 }).setText(name);

  // create a DOM element for the marker
  var el = document.createElement("div");
  el.className = "marker";
  el.setAttribute("cc", alpha2code);
  el.onclick = showPopup;

  new mapboxgl.Marker(el)
    .setLngLat([lng, lat])
    // .setPopup(popup)
    .addTo(map);
});

function showPopup() {
  let cc = this.getAttribute("cc").toLowerCase();
  coronaData.forEach((countryReport) => {
    let totalConfirmed = countryReport.TotalConfirmed;
    let totalDeath = countryReport.TotalDeaths;
    let totalRecovered = countryReport.TotalRecovered;
    if (cc === countryReport.CountryCode.toLowerCase()) {
      id("flag").src = "https://www.countryflags.io/" + cc + "/flat/48.png";
      createPopUp(totalConfirmed, totalDeath, totalRecovered, this);
    } else {
      // alert("No data fro this country available!");
    }
  });
}

const popUpDiv = id("popUp");
function createPopUp(c, d, r, el) {
  id("tc").innerText = formatNumberWithCommas(c);
  id("td").innerText = formatNumberWithCommas(d);
  id("tr").innerText = formatNumberWithCommas(r);

  var rect = el.getBoundingClientRect();
  popUpDiv.style.animation = "pop 0.3s ease";
  popUpDiv.style.top = rect.top + 20 + "px";
  popUpDiv.style.left = rect.left - 5 + "px";
  popUpDiv.style.display = "block";
  setTimeout(function () {
    popUpDiv.style.animation = "";
  }, 300);
}

const globalCoronaReport = () => {
  let globalConfirmed = document.querySelector(".global-confirmed");
  let globalDeath = document.querySelector(".global-death");
  let globalRecovered = document.querySelector(".global-recovered");
  let allCountriesDiv = document.querySelector(".all-countries");

  const globalTotalReport = () => {
    globalConfirmed.innerText = formatNumberWithCommas(
      globalData.TotalConfirmed
    );
    globalDeath.innerText = formatNumberWithCommas(globalData.TotalDeaths);
    globalRecovered.innerText = formatNumberWithCommas(
      globalData.TotalRecovered
    );
  };

  const showCase = (el) => {
    let cc = el.getAttribute("cc");
    coronaData.forEach((countryReport) => {
      let countryName = countryReport.Country;
      let totalConfirmed = countryReport.TotalConfirmed;
      let totalDeath = countryReport.TotalDeaths;
      let totalRecovered = countryReport.TotalRecovered;
      let newConfirmed = countryReport.NewConfirmed;
      let newDeaths = countryReport.NewDeaths;
      let newRecovered = countryReport.NewRecovered;

      if (cc === countryReport.CountryCode.toLowerCase()) {
        id("pop-flag-img").src =
          "https://www.countryflags.io/" + cc + "/flat/64.png";
        id("namePop").innerText = countryName;
        id("totalCases").innerText = formatNumberWithCommas(totalConfirmed);
        id("totalDeathsCase").innerText = formatNumberWithCommas(totalDeath);
        id("totalRecoveredCase").innerText = formatNumberWithCommas(
          totalRecovered
        );
        id("newConfirmed").innerText =
          "+" + formatNumberWithCommas(newConfirmed);
        id("newDeaths").innerText = "+" + formatNumberWithCommas(newDeaths);
        id("newRecovered").innerText =
          "+" + formatNumberWithCommas(newRecovered);
        moveAllCountriesReportPop(el);
      }
    });
  };

  const allCountriesReport = () => {
    coronaData = coronaData.sort(dynamicsort("TotalConfirmed", "desc"));
    coronaData.forEach((country, index) => {
      let countryName = country.Country;
      if (countryName.length >= 12)
        countryName = countryName.substring(0, 12) + "...";

      const theDiv =
        '<div class="country" title="' +
        country.Country +
        '" cc="' +
        country.CountryCode.toLowerCase() +
        '">' +
        '<div class="country-flag">' +
        '<img src="https://www.countryflags.io/' +
        country.CountryCode.toLowerCase() +
        '/flat/48.png" alt="flag">' +
        "</div>" +
        '<div class="country-name">' +
        '<h1 id="countryName"> ' +
        countryName +
        " </h1>" +
        "</div>" +
        '<div class="country-report">' +
        '<h3 id="countryReport">' +
        formatNumberWithCommas(country.TotalConfirmed) +
        "</h3>" +
        "</div>" +
        "</div>";
      allCountriesDiv.innerHTML += theDiv;
    });
  };

  globalTotalReport();
  allCountriesReport();

  let allNavCountriesDivs = document.querySelectorAll(".country");
  allNavCountriesDivs.forEach((cdiv) => {
    cdiv.onclick = () => {
      showCase(cdiv);
    };
  });

  let countryReportPopUpDiv = id("coronaPop"),
    crpdTime;
  const moveAllCountriesReportPop = (el) => {
    clearTimeout(crpdTime);
    countryReportPopUpDiv.style.bottom = null;
    var rect = el.getBoundingClientRect();
    let countryReportPopUpDivHeightHalf =
      countryReportPopUpDiv.getBoundingClientRect().height / 2;
    let currentTop;
    countryReportPopUpDiv.style.left = "21vw";
    if (countryReportPopUpDivHeightHalf !== 0) {
      currentTop = rect.top - countryReportPopUpDivHeightHalf + 25;
      countryReportPopUpDiv.style.top = currentTop + "px";
    }
    //bound rect height returnd 0 for first click hence this check had to be done
    else {
      currentTop = rect.top - 212 + 25;
      countryReportPopUpDiv.style.top = currentTop + "px";
    }
    countryReportPopUpDiv.style.animation = "leftPop 0.3s ease";
    countryReportPopUpDiv.style.display = "block";

    crpdTime = setTimeout(function () {
      countryReportPopUpDiv.style.animation = "";
    }, 300);

    let topCheck =
      currentTop + countryReportPopUpDiv.getBoundingClientRect().height;
    if (topCheck > window.innerHeight) {
      countryReportPopUpDiv.style.top = null;
      countryReportPopUpDiv.style.bottom = 0;
      id("caretLeft").style.position = "fixed";
      id("caretLeft").style.left = "19.35vw";
      id("caretLeft").style.top = rect.top + "px";
    } else {
      id("caretLeft").style.position = "absolute";
      id("caretLeft").style.top = "calc(50% - 25px)";
      id("caretLeft").style.left = "-30px";
    }
  };
};

document.onclick = (e) => {
  let ev = e || window.event;
  let targetElement = ev.target;
  let tarClass = ev.target.className;
  if (tarClass !== "country") hideWithAnimation("coronaPop", "coronaPopEnd");
  if (tarClass.indexOf("mapboxgl-marker") < 0)
    hideWithAnimation("popUp", "popEnd");
};

var hwaTime;
function hideWithAnimation(elid, aniamtionName) {
  let theEl = id(elid);
  theEl.style.animation = "";
  theEl.style.animation = aniamtionName + " 0.3s ease";
  hwaTime = setTimeout(() => {
    theEl.style.display = "none";
    theEl.style.animation = "";
  }, 300);
}

map.on("drag", function () {
  if (id("popUp")) hideWithAnimation("popUp", "popEnd");
});

map.on("zoomstart", function () {
  if (id("popUp")) hideWithAnimation("popUp", "popEnd");
});
