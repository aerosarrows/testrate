$(function () {
    $('#optBtn a').on('click', function () {
      const category= ($(this).text());
      catBtn.textContent = category;
    });
  });

const optBtn = document.querySelector("#optBtn");
optBtn.addEventListener("click", shiftCategoryFocus);

function shiftCategoryFocus () { 
    document.getElementById("searchBtn").focus();
}
