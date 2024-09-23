function Calculte() {
    let totalmarks = 850;
    let obtainedmarks = parseInt(document.getElementById('totalmarks').value);

    let result = (obtainedmarks / totalmarks) * 100;
    console.log(result);

    if (result > 90) {
        console.log("Top Marks")
        document.getElementById('para').innerHTML = "Top Marks";
    }
    else if (result >= 90 && result < 80) {
        console.log("A Grade")
    } else {
        console.log("B Grade")
    }


}