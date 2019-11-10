document.querySelector("#pounds").addEventListener("blur", ValidateNumInput);

function ValidateNumInput(e) {
    console.log("%c As per W", "color: Red;")
    const num = document.getElementById("pounds");
    const re = /^[0-9]+$/;
    console.log(re.test(num.value));
    if (re.test(num.value)) {
        num.classList.remove("is-invalid");
    } else {
        num.classList.add("is-invalid");
    }

    e.preventDefault();
};

document.querySelector(".btn-info").addEventListener("click", convKg);

function convKg(e) {
    console.log("skrrrr");
    const pound = document.querySelector("#pounds").value
    console.log(pound)
    const kg = pound * 0.454;
    console.log(kg)
    document.querySelector("#kg").value = kg;
};

document.querySelector(".btn-danger").addEventListener("click", clear);

function clear(e) {
    document.querySelector("#pounds").value = "";
    document.querySelector("#kg").value = "";

}
