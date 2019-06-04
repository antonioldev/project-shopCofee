function showMoreDetails_0() { /*this f check if the extra details of each shop are hidden or visible*/
    info_1.style.display = "none";
    map_1.style.display = "none";
    info_2.style.display = "none";
    map_2.style.display = "none";
    info_3.style.display = "none";
    map_3.style.display = "none";
    info_4.style.display = "none";
    map_4.style.display = "none";
    var elmnt = document.getElementById("locationName_0");
    elmnt.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    document.getElementById("rotate_1").checked = false;
    document.getElementById("rotate_2").checked = false;
    document.getElementById("rotate_3").checked = false;
    document.getElementById("rotate_4").checked = false;
    document.getElementById("moreInfoImageButton_1").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_2").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_3").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_4").setAttribute("title", "More info");

    var checkStyle = info_0.style.display;
    if (checkStyle != "block") {
        info_0.style.display = "block";
        map_0.style.display = "block";
        document.getElementById("moreInfoImageButton_0").setAttribute("title", "Less info");
    }
    else {
        info_0.style.display = "none";
        map_0.style.display = "none";    /*need animation*/
        /*orientation.style.transform = "initial"; /*for both image and hidden*/
        document.getElementById("moreInfoImageButton_0").setAttribute("title", "More info");
    }
}

function showMoreDetails_1() { /*this f check if the extra details of each shop are hidden or visible*/
    info_0.style.display = "none";
    map_0.style.display = "none";
    info_2.style.display = "none";
    map_2.style.display = "none";
    info_3.style.display = "none";
    map_3.style.display = "none";
    info_4.style.display = "none";
    map_4.style.display = "none";
    var elmnt = document.getElementById("map_1");
    elmnt.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    document.getElementById("rotate_0").checked = false;
    document.getElementById("rotate_2").checked = false;
    document.getElementById("rotate_3").checked = false;
    document.getElementById("rotate_4").checked = false;
    document.getElementById("moreInfoImageButton_0").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_2").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_3").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_4").setAttribute("title", "More info");
    var checkStyle = info_1.style.display;
    if (checkStyle != "block") {
        info_1.style.display = "block";
        map_1.style.display = "block";
        document.getElementById("moreInfoImageButton_1").setAttribute("title", "Less info");

    }
    else {
        info_1.style.display = "none";
        map_1.style.display = "none";    /*need animation*/
        /*orientation.style.transform = "initial"; /*for both image and hidden*/
        document.getElementById("moreInfoImageButton_1").setAttribute("title", "More info");
    }
}

function showMoreDetails_2() { /*this f check if the extra details of each shop are hidden or visible*/
    info_0.style.display = "none";
    map_0.style.display = "none";
    info_1.style.display = "none";
    map_1.style.display = "none";
    info_3.style.display = "none";
    map_3.style.display = "none";
    info_4.style.display = "none";
    map_4.style.display = "none";
    var elmnt = document.getElementById("locationName_2");
    elmnt.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    document.getElementById("rotate_1").checked = false;
    document.getElementById("rotate_0").checked = false;
    document.getElementById("rotate_3").checked = false;
    document.getElementById("rotate_4").checked = false;
    document.getElementById("moreInfoImageButton_0").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_1").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_3").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_4").setAttribute("title", "More info");

    var checkStyle = info_2.style.display;
    if (checkStyle != "block") {
        info_2.style.display = "block";
        map_2.style.display = "block";
        document.getElementById("moreInfoImageButton_2").setAttribute("title", "Less info");

    }
    else {
        info_2.style.display = "none";
        map_2.style.display = "none";    /*need animation*/
        /*orientation.style.transform = "initial"; /*for both image and hidden*/
        document.getElementById("moreInfoImageButton_2").setAttribute("title", "More info");
    }
}
function showMoreDetails_3() { /*this f check if the extra details of each shop are hidden or visible*/
    info_1.style.display = "none";
    map_1.style.display = "none";
    info_2.style.display = "none";
    map_2.style.display = "none";
    info_0.style.display = "none";
    map_0.style.display = "none";
    info_4.style.display = "none";
    map_4.style.display = "none";
    var elmnt = document.getElementById("locationName_3");
    elmnt.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    document.getElementById("rotate_1").checked = false;
    document.getElementById("rotate_2").checked = false;
    document.getElementById("rotate_0").checked = false;
    document.getElementById("rotate_4").checked = false;
    document.getElementById("moreInfoImageButton_0").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_1").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_2").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_4").setAttribute("title", "More info");

    var checkStyle = info_3.style.display;
    if (checkStyle != "block") {
        info_3.style.display = "block";
        map_3.style.display = "block";
        document.getElementById("moreInfoImageButton_3").setAttribute("title", "Less info");

    }
    else {
        info_3.style.display = "none";
        map_3.style.display = "none";    /*need animation*/
        /*orientation.style.transform = "initial"; /*for both image and hidden*/
        document.getElementById("moreInfoImageButton_3").setAttribute("title", "More info");
    }
}

function showMoreDetails_4() { /*this f check if the extra details of each shop are hidden or visible*/
    info_1.style.display = "none";
    map_1.style.display = "none";
    info_2.style.display = "none";
    map_2.style.display = "none";
    info_3.style.display = "none";
    map_3.style.display = "none";
    info_0.style.display = "none";
    map_0.style.display = "none";
    var elmnt = document.getElementById("map_4");
    elmnt.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    document.getElementById("rotate_1").checked = false;
    document.getElementById("rotate_2").checked = false;
    document.getElementById("rotate_3").checked = false;
    document.getElementById("rotate_0").checked = false;
    document.getElementById("moreInfoImageButton_0").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_1").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_2").setAttribute("title", "More info");
    document.getElementById("moreInfoImageButton_3").setAttribute("title", "More info");

    var checkStyle = info_4.style.display;
    if (checkStyle != "block") {
        info_4.style.display = "block";
        map_4.style.display = "block";
        document.getElementById("moreInfoImageButton_4").setAttribute("title", "Less info");

    }
    else {
        info_4.style.display = "none";
        map_4.style.display = "none";    /*need animation*/
        document.getElementById("moreInfoImageButton_4").setAttribute("title", "More info");
    }
}