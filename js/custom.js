"use strict";
    /*
    --------------------------------------------------------------
                   DOM SELECTION AREA START
    --------------------------------------------------------------
    */
let mobilePlusBtn = document.querySelector(".plusBtn");
let mobileMinusBtn = document.querySelector(".minusBtn");
let casePlusBtn = document.querySelector(".casePlusBtn");
let caseMinusBtn = document.querySelector(".caseMinusBtn");
let countOne =  document.querySelector(".count");
let countTwo =  document.querySelector(".countTwo");
let mobilePrice = document.querySelector("#mobilePrice");
let mobileCasePrice = document.querySelector("#mobileCasePrice");
let subTotal = document.querySelector("#subTotal");
let totalCost = document.querySelector("#totalCost");
let mainHeader = document.querySelector("header");
let success = document.querySelector(".hide");
    /*
    ---------------------------------------------------------
                   ALL FUNCTION AREA START
    ---------------------------------------------------------    
    */

function plusButton(btn, price, num) {
    let numberCount = Number(btn.innerText);
    let total = numberCount;
    total += 1;
    btn.innerText = total;

    let priceCount = Number(price.innerText);
    let totalPrice = priceCount + num ;
    price.innerText = totalPrice;

    let subTotalCost = Number(subTotal.innerText);
    let finalSubTotalCost = subTotalCost + num;
    subTotal.innerText = finalSubTotalCost;
    
    totalCost.innerText = finalSubTotalCost;
}

function minusButton(btn, price, num){
    let numberCount = Number(btn.innerText);
    let total = numberCount;
    if( numberCount <= 1 ){

    } else {
        total -= 1;
        btn.innerText = total;

        let priceCount = Number(price.innerText);
        let totalPrice = priceCount - num;
        price.innerText = totalPrice;

        let subTotalCost = Number(subTotal.innerText);
        let finalSubTotalCost = subTotalCost - num;
        subTotal.innerText = finalSubTotalCost;

        totalCost.innerText = finalSubTotalCost;
    }
}

function positiveButton(positiveBtn, negativeBtn) {
    positiveBtn.style.backgroundColor = "lime";
    positiveBtn.style.color = "#fff";
    negativeBtn.style.backgroundColor = "#fff";
    negativeBtn.style.color = "#000";
}

function negativeButton(positiveBtn, negativeBtn) {
    positiveBtn.style.backgroundColor = "#fff";
    positiveBtn.style.color = "#000";
    negativeBtn.style.backgroundColor = "red";
    negativeBtn.style.color = "#fff";
}

    // Mobile Area
mobilePlusBtn.addEventListener("click", function(){
    plusButton(countOne, mobilePrice, 1219);
    positiveButton(mobilePlusBtn, mobileMinusBtn);
})

mobileMinusBtn.addEventListener("click", function(){
    minusButton(countOne, mobilePrice, 1219);
    negativeButton(mobilePlusBtn, mobileMinusBtn);
})
    // Case Area
casePlusBtn.addEventListener("click", function(){
    plusButton(countTwo, mobileCasePrice, 59);
    positiveButton(casePlusBtn, caseMinusBtn);
})

caseMinusBtn.addEventListener("click", function(){
    minusButton(countTwo, mobileCasePrice, 59);
    negativeButton(casePlusBtn, caseMinusBtn);
})

success.addEventListener("click", function(){
    mainHeader.style.display = "none";
})