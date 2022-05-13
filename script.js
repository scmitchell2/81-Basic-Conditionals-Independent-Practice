// 2. Social Studies section
$(".ss-button").click(function() {
    let ssInput = $(".social-studies").val();

    if (ssInput === "Albany") {
        $(".ss-message").text("Correct!");
    } else {
        $(".ss-message").text("Wrong! Try again.");
    }
});


// 3. Math section
$(".math-button").click(function() {
    let mathInput = Number($(".math").val());

    if (mathInput === 30) {
        $(".math-message").text("Correct!");
    } else {
        $(".math-message").text("Wrong! Try again.");
    }
});


// 4. Science section
$(".science-button").click(function() {
    let sciInput = $(".science").val();

    if (sciInput === "solid") {
        $(".science-message").text("Correct!");
    } else {
        $(".science-message").text("Wrong! Try again.");
    }
});