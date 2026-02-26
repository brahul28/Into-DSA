function votingEligibility(age) {

    if (age >= 18) {
        console.log("Eligible for voting");
    } else {
        console.log("Not Eligible for voting");
    }
}

let result = votingEligibility(18);

console.log(result);