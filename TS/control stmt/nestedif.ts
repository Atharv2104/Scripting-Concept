let age: number = 22;
let hasLicense: boolean = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("License required.");
    }
} else {
    console.log("You are underage.");
}