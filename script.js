let actualTemp;
let desiredTemp;

actualTemp = prompt("actual temp?:");
desiredTemp = prompt("desired temp?:")

if (actualTemp > desiredTemp) {
    console.log('Run Heat');
} else if (desiredTemp > actualTemp) {
    console.log("Run A/C");
} else console.log('standby');