let button = document.getElementById("compare");

function compareValues() {
    let lText = document.getElementById("linput-text").value;
    let rText = document.getElementById("rinput-text").value;
    let difference = "";



    if (lText.toLowerCase() == rText.toLowerCase()) {
        console.log("Same");
    } else {
        console.log("Different");
    }
}