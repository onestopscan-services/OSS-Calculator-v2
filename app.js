// BUTTONS
let calculateButton = document.querySelector("#calculateButton");
let clearButton = document.querySelector("#clearButton");

let FD33_inc = document.querySelector("#FD33_inc");
let FD33_dec = document.querySelector("#FD33_dec");

let FD24_inc = document.querySelector("#FD24_inc");
let FD24_dec = document.querySelector("#FD24_dec");

let DAB_inc = document.querySelector("#DAB_inc");
let DAB_dec = document.querySelector("#DAB_dec");

let LDAB_inc = document.querySelector("#LDAB_inc");
let LDAB_dec = document.querySelector("#LDAB_dec");

let OS36_inc = document.querySelector("#OS36_inc");
let OS36_dec = document.querySelector("#OS36_dec");

let LFD_inc = document.querySelector("#LFD_inc");
let LFD_dec = document.querySelector("#LFD_dec");

let B24_inc = document.querySelector("#B24_inc");
let B24_dec = document.querySelector("#B24_dec");

let MAG_inc = document.querySelector("#MAG_inc");
let MAG_dec = document.querySelector("#MAG_dec");


// cost per page in dollars ---> example: 0.075 is 7.5 cents, 0.75 is 75 cents
// CPP means "Cost Per Page"
let standardCPP = 0.075;
let lfdCPP = 1.75;
let BookCPP = 0.25;
let MagCPP = 0.25;

let shredCPP = 0.02;
// let scan_rate = 40;

/////////////// NEW COSTS ////////////////////
let FD33c = 420.0;
let FD24c = 315.0;
let DABc = 187.5;
let LDABc = 315.0;
let OS36c = 427.5;
let LFDc = 1.75;
let B24c = 75.0;
let MAGc = 20.0;
/////////////////////////////////////////////

// Initialized values
let FD33value = document.querySelector("#FD33value").value = 0;
let FD24value = document.querySelector("#FD24value").value = 0;
let DABvalue = document.querySelector("#DABvalue").value = 0;
let LDABvalue = document.querySelector("#LDABvalue").value = 0;
let OS36value = document.querySelector("#OS36value").value = 0;
let LFDvalue = document.querySelector("#LFDvalue").value = 0;
let B24value = document.querySelector("#B24value").value = 0;
let MAGvalue = document.querySelector("#MAGvalue").value = 0;

let standardTypeCost = (FD33value + FD24value + DABvalue + LDABvalue + OS36value);
let specialTypeCost = ((LFDvalue * LFDc) + (B24value * B24c) + (MAGvalue * MAGc));

let TotalCost = (standardTypeCost + specialTypeCost);

let pagesPerMinute = 40;

// let client_info = document.querySelector("#client_info").value;


// Type Counts
// let count = 0;
let num33FD = 0;
let numFD24 = 0;
let numDAB = 0;
let numLDAB = 0;
let numOS36 = 0;
let numLFD = 0;
let numB24 = 0;
let numMAG = 0;

// FD33
FD33_inc.addEventListener("click", () => {
    num33FD += 1;
    FD33value = document.querySelector("#FD33value").value = num33FD;
});

FD33_dec.addEventListener("click", () => {
    num33FD -= 1;
    FD33value = document.querySelector("#FD33value").value = num33FD;
});

// FD24
FD24_inc.addEventListener("click", () => {
    numFD24 += 1;
    FD24value = document.querySelector("#FD24value").value = numFD24;
});

FD24_dec.addEventListener("click", () => {
    numFD24 -= 1;
    FD24value = document.querySelector("#FD24value").value = numFD24;
});

// DAB
DAB_inc.addEventListener("click", () => {
    numDAB += 1;
    DABvalue = document.querySelector("#DABvalue").value = numDAB;
});

DAB_dec.addEventListener("click", () => {
    numDAB -= 1;
    DABvalue = document.querySelector("#DABvalue").value = numDAB;
});

// LDAB
LDAB_inc.addEventListener("click", () => {
    numLDAB += 1;
    LDABvalue = document.querySelector("#LDABvalue").value = numLDAB;
});

LDAB_dec.addEventListener("click", () => {
    numLDAB -= 1;
    LDABvalue = document.querySelector("#LDABvalue").value = numLDAB;
});


// OS36
OS36_inc.addEventListener("click", () => {
    numOS36 += 1;
    OS36value = document.querySelector("#OS36value").value = numOS36;
});

OS36_dec.addEventListener("click", () => {
    numOS36 -= 1;
    OS36value = document.querySelector("#OS36value").value = numOS36;
});

// LFD
LFD_inc.addEventListener("click", () => {
    numLFD += 1;
    LFDvalue = document.querySelector("#LFDvalue").value = numLFD;
});

LFD_dec.addEventListener("click", () => {
    numLFD -= 1;
    LFDvalue = document.querySelector("#LFDvalue").value = numLFD;
});

// B24
B24_inc.addEventListener("click", () => {
    numB24 += 1;
    B24value = document.querySelector("#B24value").value = numB24;
});

B24_dec.addEventListener("click", () => {
    numB24 -= 1;
    B24value = document.querySelector("#B24value").value = numB24;
});

// MAG
MAG_inc.addEventListener("click", () => {
    numMAG += 1;
    MAGvalue = document.querySelector("#MAGvalue").value = numMAG;
});

MAG_dec.addEventListener("click", () => {
    numMAG -= 1;
    MAGvalue = document.querySelector("#MAGvalue").value = numMAG;
});


// Function to switch to result page by hiding the calculator page
let display_calculator = () => {
    let calc_div = document.querySelector("#calc_div");
    let calc_button_div = document.querySelector("#calcButtonDiv");
    let client_div = document.querySelector("#client_div");
    let result_screen = document.querySelector("#result_screen");

    calc_div.style.display = "grid";
    calc_button_div.style.display = "flex";
    client_div.style.display = "flex";
    result_screen.style.display = "none";
}

// // Function to switch back to calculator page and hide results page
let display_results = () => {
    let calc_div = document.querySelector("#calc_div");
    let calc_button_div = document.querySelector("#calcButtonDiv");
    let client_div = document.querySelector("#client_div");
    let result_screen = document.querySelector("#result_screen");

    calc_div.style.display = "none";
    calc_button_div.style.display = "none";
    client_div.style.display = "none";
    result_screen.style.display = "block";
}


// Function that updates the invoice table
let updateInvoice = () => {
    // HTML Table elements
    let tFD33cost = document.querySelector("#FD33cost");
    let tFD24cost = document.querySelector("#FD24cost");
    let tDABcost = document.querySelector("#DABcost");
    let tLDABcost = document.querySelector("#LDABcost");
    let tOS36cost = document.querySelector("#OS36cost");
    let tLFDcost = document.querySelector("#LFDcost");
    let tB24cost = document.querySelector("#B24cost");
    let tMAGcost = document.querySelector("#MAGcost");

    // The calculated cost breakdown //////////////////////
    let FD33cost = FD33c * num33FD;
    let FD24cost = FD24c * numFD24;
    let DABcost = DABc * numDAB;
    let LDABcost = LDABc * numLDAB;
    let OS36cost = OS36c * numOS36;
    let LFDcost = LFDc * numLFD;
    let B24cost = B24c * numB24;
    let MAGcost = MAGc * numMAG;

    let client_info = document.querySelector("#client_info").value;
    let client_summ = document.querySelector("#client_summ");
    client_summ.innerText = client_info;

    let sumFD33 = document.querySelector("#sumFD33");
    sumFD33.innerText = num33FD;
    tFD33cost.innerText = "$" + FD33cost;

    let sumFD24 = document.querySelector("#sumFD24");
    sumFD24.innerText = numFD24;
    tFD24cost.innerText = "$" + FD24cost;

    let sumDAB = document.querySelector("#sumDAB");
    sumDAB.innerText = numDAB;
    tDABcost.innerText = "$" + DABcost;

    let sumLDAB = document.querySelector("#sumLDAB");
    sumLDAB.innerText = numLDAB;
    tLDABcost.innerText = "$" + LDABcost;

    let sumOS36 = document.querySelector("#sumOS36");
    sumOS36.innerText = numOS36;
    tOS36cost.innerText = "$" + OS36cost;

    let sumLFD = document.querySelector("#sumLFD");
    sumLFD.innerText = numLFD;
    tLFDcost.innerText = "$" + LFDcost;

    let sumB24 = document.querySelector("#sumB24");
    sumB24.innerText = numB24;
    tB24cost.innerText = "$" + B24cost;

    let sumMAG = document.querySelector("#sumMAG");
    sumMAG.innerText = numMAG;
    tMAGcost.innerText = "$" + MAGcost;
};


// Function to calculate time needed
let calculate_time = () => {
    FD33value = Number(document.querySelector("#FD33value").value * (5600));
    FD24value = Number(document.querySelector("#FD24value").value * (4200));
    DABvalue = Number(document.querySelector("#DABvalue").value * (2700));
    LDABvalue = Number(document.querySelector("#LDABvalue").value * (4200));
    OS36value = Number(document.querySelector("#OS36value").value * (6300));
    LFDvalue = Number(document.querySelector("#LFDvalue").value * (1));
    B24value = Number(document.querySelector("#B24value").value * (300));
    MAGvalue = Number(document.querySelector("#MAGvalue").value * (80));

    let totalPages = (FD33value + FD24value + DABvalue + LDABvalue + OS36value + LFDvalue + B24value + MAGvalue);
    let totalMinutes = totalPages / pagesPerMinute;
    let totalSeconds = (totalMinutes * 60);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds / 60) % 60);
    let seconds = Math.floor(totalSeconds % 60);

    let shredCost = totalPages * shredCPP;

    let estTime = document.querySelector("#estTime");
    let estimatedTimestring = "[" + totalPages + " pages ]" + " [" + hours + " hours " + minutes + " minutes] " + " [Shred Cost: " + shredCost + "]";
    estTime.innerText = estimatedTimestring;



    // console.log(estimatedTimestring);
};


// Calculate Button
calculateButton.addEventListener("click", () => {
    // standard types ---> variable = Number(domElement.value * (number of pages))
    FD33value = Number(document.querySelector("#FD33value").value * (FD33c));
    FD24value = Number(document.querySelector("#FD24value").value * (FD24c));
    DABvalue = Number(document.querySelector("#DABvalue").value * (DABc));
    LDABvalue = Number(document.querySelector("#LDABvalue").value * (LDABc));
    OS36value = Number(document.querySelector("#OS36value").value * (OS36c));

    // special types
    LFDvalue = Number(document.querySelector("#LFDvalue").value * (LFDc));
    B24value = Number(document.querySelector("#B24value").value * (B24c));
    MAGvalue = Number(document.querySelector("#MAGvalue").value * (MAGc));

    standardTypeCost = (FD33value + FD24value + DABvalue + LDABvalue + OS36value);
    specialTypeCost = ((LFDvalue) + (B24value) + (MAGvalue));

    TotalCost = (standardTypeCost + specialTypeCost);

    let resultTotal = document.querySelector("#totalCost");
    resultTotal.innerText = "$" + TotalCost;
    resultTotal.style = "font-weight: bold";

    calculate_time();
    updateInvoice();
    display_results();
});
// calculateButton.addEventListener("click", () => {
//     // standard types ---> variable = Number(domElement.value * (number of pages))
//     FD33value = Number(document.querySelector("#FD33value").value * (5800));
//     FD24value = Number(document.querySelector("#FD24value").value * (4200));
//     DABvalue = Number(document.querySelector("#DABvalue").value * (2700));
//     LDABvalue = Number(document.querySelector("#LDABvalue").value * (4200));
//     OS36value = Number(document.querySelector("#OS36value").value * (6300));

//     // special types
//     LFDvalue = Number(document.querySelector("#LFDvalue").value * (1));
//     B24value = Number(document.querySelector("#B24value").value * (300));
//     MAGvalue = Number(document.querySelector("#MAGvalue").value * (80));

//     standardTypeCost = ((FD33value + FD24value + DABvalue + LDABvalue + OS36value) * standardCPP);
//     specialTypeCost = ((LFDvalue * lfdCPP) + (B24value * BookCPP) + (MAGvalue * MagCPP));

//     TotalCost = (standardTypeCost + specialTypeCost);

//     let resultTotal = document.querySelector("#totalCost");
//     resultTotal.innerText = "$" + TotalCost;
//     resultTotal.style = "font-weight: bold";

//     calculate_time();
//     updateInvoice();
//     display_results();
// });

// Clear Button
clearButton.addEventListener("click", () => {
    FD33value = document.querySelector("#FD33value").value = 0;
    FD24value = document.querySelector("#FD24value").value = 0;
    DABvalue = document.querySelector("#DABvalue").value = 0;
    LDABvalue = document.querySelector("#LDABvalue").value = 0;
    OS36value = document.querySelector("#OS36value").value = 0;
    LFDvalue = document.querySelector("#LFDvalue").value = 0;
    B24value = document.querySelector("#B24value").value = 0;
    MAGvalue = document.querySelector("#MAGvalue").value = 0;

    let client_info = document.querySelector("#client_info").value = "";
    num33FD = 0;
    numFD24 = 0;
    numDAB = 0;
    numLDAB = 0;
    numOS36 = 0;
    numLFD = 0;
    numB24 = 0;
    numMAG = 0;
});
