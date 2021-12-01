const tab = document.querySelector("#overallBtn");
tab.addEventListener("click", pillFocus);

function pillFocus () {
  document.getElementById("v-pills-product-tab").click();
}

const tab1 = document.querySelector("#experienceBtn");
tab1.addEventListener("click", pillFocus1);

function pillFocus1 () {
  document.getElementById("v-pills-service-tab").click();
}

const tab2 = document.querySelector("#serviceBtn");
tab2.addEventListener("click", pillFocus2);

function pillFocus2 () {
  document.getElementById("v-pills-cost-tab").click();
}

const tab3 = document.querySelector("#costBtn");
tab3.addEventListener("click", pillFocus3);

function pillFocus3 () {
  document.getElementById("v-pills-final-tab").click();
}

