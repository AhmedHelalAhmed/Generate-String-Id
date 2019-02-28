
let generateRandomId = n => {

    if (n > 0) {
        const characters = ("abcdefghijklmnopqrstuvwxyz").split("");
        const min = 0;
        const max = characters.length;
        let randomIndex = parseInt(Math.random() * (max - min) + min);
        let stringId = '';

        for (let i = 0; i < n; i++) {
            stringId += characters[randomIndex];
            randomIndex = parseInt(Math.random() * (max - min) + min);
        }


        console.log('Your Random Id of length ' + n + ' is : ', stringId);

        return stringId;
    }
    else {

        console.log("Invalid input");
    }


};


// for test 
generateRandomId(3);
generateRandomId(3);

generateRandomId(5);
generateRandomId(10);
generateRandomId(20);
// for test