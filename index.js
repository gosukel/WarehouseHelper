const container = document.querySelector(".container");
const addPalletBtn = document.querySelector("#add-pallet-btn");
const calculateBtn = document.querySelector("#calculate-btn");
const siteTitle = document.querySelector(".title-text");

function addPallet() {
    // container div
    let newSkid = document.createElement("div");
    newSkid.classList.add("skid");

    // density div
    let densityDiv = document.createElement("div");
    densityDiv.classList.add("density");
    newSkid.appendChild(densityDiv);

    // skid-details div
    let skidDetails = document.createElement("div");
    skidDetails.classList.add("skid-details");
    newSkid.appendChild(skidDetails);

    // weight-div
    let weightDiv = document.createElement("div");
    weightDiv.classList.add("weight-div");
    let weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "Weight";
    weightDiv.appendChild(weightInput);
    let weightSpan = document.createElement("span");
    weightSpan.innerText = "lbs";
    weightDiv.appendChild(weightSpan);
    skidDetails.appendChild(weightDiv);

    // length-div
    let lengthDiv = document.createElement("div");
    lengthDiv.classList.add("length-div");
    let lengthInput = document.createElement("input");
    lengthInput.type = "number";
    lengthInput.placeholder = "Length";
    lengthDiv.appendChild(lengthInput);
    let lengthSpan = document.createElement("span");
    lengthSpan.innerText = "in.";
    lengthDiv.appendChild(lengthSpan);
    skidDetails.appendChild(lengthDiv);

    // width-div
    let widthDiv = document.createElement("div");
    widthDiv.classList.add("width-div");
    let widthInput = document.createElement("input");
    widthInput.type = "number";
    widthInput.placeholder = "Width";
    widthDiv.appendChild(widthInput);
    let widthSpan = document.createElement("span");
    widthSpan.innerText = "in.";
    widthDiv.appendChild(widthSpan);
    skidDetails.appendChild(widthDiv);

    // height-div
    let heightDiv = document.createElement("div");
    heightDiv.classList.add("height-div");
    let heightInput = document.createElement("input");
    heightInput.type = "number";
    heightInput.placeholder = "Height";
    heightDiv.appendChild(heightInput);
    let heightSpan = document.createElement("span");
    heightSpan.innerText = "in.";
    heightDiv.appendChild(heightSpan);
    skidDetails.appendChild(heightDiv);

    container.appendChild(newSkid);
}

function calculateSkid(weight, length, width, height) {
    if (
        typeof weight === "string" ||
        weight <= 0 ||
        typeof length === "string" ||
        length <= 0 ||
        typeof width === "string" ||
        width <= 0 ||
        typeof height === "string" ||
        height <= 0
    ) {
        return false;
    }
    let density = weight / ((length * width * height) / 1728);
    return density.toFixed(1);
}

function calculateSkids() {
    let allSkids = document.querySelectorAll(".skid");
    allSkids.forEach((skid) => {
        let weight = Number(skid.querySelector(".weight-div input").value);
        let length = Number(skid.querySelector(".length-div input").value);
        let width = Number(skid.querySelector(".width-div input").value);
        let height = Number(skid.querySelector(".height-div input").value);
        let skidDetails = skid.querySelector(".skid-details");
        let densityVal = calculateSkid(weight, length, width, height);
        if (!densityVal) return;
        let densityDiv = skid.querySelector(".density");
        denseClass =
            densityVal >= 10
                ? "max-dense"
                : densityVal > 6
                ? "med-dense"
                : "min-dense";

        skidDetails.classList.add("slide");
        densityDiv.classList.add("active");
        densityDiv.classList.add(denseClass);
        densityDiv.innerText = densityVal;
    });
}

addPalletBtn.addEventListener("click", addPallet);
calculateBtn.addEventListener("click", calculateSkids);
siteTitle.addEventListener("click", () => {
    location.reload();
});
