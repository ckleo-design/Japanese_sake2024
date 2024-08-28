$(function () {
    $("#header-include").load("assets/parts/header.html #header-outer");
    $("#footer-include").load("assets/parts/footer.html #footer-outer");
    $("#footer-outer-individual-sake").load("../assets/parts/footer.html #footer-outer-individual-sake");
    $("#header-include-page").load("../assets/parts/header.html #header-outer-page");
    $("#footer-include-page-why-sake").load("../assets/parts/footer.html #footer-outer-page-why-sake");
    $("#footer-include-page-restaurants").load("../assets/parts/footer.html #footer-outer-page-restaurants");
    $("#footer-include-page-selected-sake").load("../assets/parts/footer.html #footer-outer-page-selected-sake");
    $("#footer-include-individual-restaurant").load("../assets/parts/footer.html #footer-outer-individual-restaurant");
})
