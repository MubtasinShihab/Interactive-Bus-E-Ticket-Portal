let selectList = [];

function selectedSeats() {

    const seats = document.getElementsByClassName('seat');

    for (const i of seats) {

        i.addEventListener('click', function (event) {

            let seatNumber = event.target.id;
            selectList.push(seatNumber);

            setBackgroundColorById(seatNumber);
            setTextColorById(seatNumber);

            let seatId = seatNumber + '!';
            showElementById(seatId);

            let seatCount = selectList.length;
            let seatCost = seatCount * 550;
            let remainingSeats = 8 - seatCount;

            hideElementById('no-seat');
            setElementTextValueById('total-price', seatCost);
            setElementTextValueById('grand-total', seatCost);
            setElementTextValueById('available-seats', remainingSeats);            
            setElementTextValueById('availed-seats', seatCount);

            if (selectList.length > 4) {
                alert('Cannot choose more then 4 seats');
                removeBackgroundColorById(seatNumber);
                removeTextColorById(seatNumber);
                hideElementById(seatId);
                setElementTextValueById('total-price', 2200);
                setElementTextValueById('grand-total', 2200);
                setElementTextValueById('available-seats', 4);
                setElementTextValueById('availed-seats', 4);
                console.log(selectList);
                return 0;
            }
        })
    }
}


// coupon "Couple 20" & "NEW15" apply
function couponApply() {

    document.getElementById('coupon-input').addEventListener('keyup', function (event) {

        const inputText = event.target.value;

        const couponBtn = document.getElementById('coupon-btn');

        if (inputText === 'NEW15' || inputText === 'Couple 20') {

            couponBtn.removeAttribute('disabled'); // Apply button enabled

            // After clicking apply button the coupon input field gets hidden
            couponBtn.addEventListener('click', function (event) {

                hideElementById('coupon-input-box'); // coupon input box gets hidden

                // change of grand total after applying coupon
                if (inputText === 'NEW15') {
                    let grand15 = getElementTextValueById('grand-total');
                    grand15 = grand15 - (grand15 * 0.15);
                    setElementTextValueById('grand-total', grand15);
                }
                else if (inputText === 'Couple 20') {
                    let grand20 = getElementTextValueById('grand-total');
                    grand20 = grand20 - (grand20 / 5);
                    setElementTextValueById('grand-total', grand20);
                }
            })

        }
        else {
            couponBtn.setAttribute('disabled', true);
        }
    })
}

// Passenger info, (at least one seat select remaining), phone no input, next btn enable, moral
function passengerInfo() {

    let phoneInput = document.getElementById('phone-input');
    let nextBtn = document.getElementById('next-btn');

    phoneInput.addEventListener('keyup', function (event) {

        let inputNum = event.target.value;
        console.log(inputNum.length);

        if (inputNum.length !== 0 && selectList.length !==0) {
            nextBtn.removeAttribute('disabled');

            document.getElementById('modal-btn').addEventListener('click', function (event) {
                window.location.reload();
            })
        }
        else {
            nextBtn.setAttribute('disabled', true);
        }
    })
}

selectedSeats();