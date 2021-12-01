$(function () {
    $('#optBtn a').on('click', function () {
      const category= ($(this).text());
      catBtn.textContent = category;
    });
    $('#locOptBtn a').on('click', function () {
      const location= ($(this).text());
      locBtn.textContent = location;
    });
    $('#optBtn2 a').on('click', function () {
      const category2 = ($(this).text());
      catBtn2.textContent = category2;
    });
    $('#locOptBtn2 a').on('click', function () {
      const location2 = ($(this).text());
      locBtn2.textContent = location2;
    });
  });

const optBtn = document.querySelector("#optBtn");
optBtn.addEventListener("click", shiftCategoryFocus);

function shiftCategoryFocus () { 
    document.getElementById("searchBtn").focus();
}

const locOptBtn = document.querySelector("#locOptBtn");
locOptBtn.addEventListener("click", shiftLocationFocus);

function shiftLocationFocus () { 
    document.getElementById("locSearchBtn").focus();
}

const optBtn2 = document.querySelector("#optBtn2");
optBtn2.addEventListener("click", shiftCategoryFocus2);

function shiftCategoryFocus2 () { 
    document.getElementById("searchBtn2").focus();
}

const locOptBtn2 = document.querySelector("#locOptBtn2");
locOptBtn2.addEventListener("click", shiftLocationFocus2);

function shiftLocationFocus2 () { 
    document.getElementById("locSearchBtn2").focus();
}


