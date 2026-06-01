interface BookingAPI{
    "firstname": string,
    "lastname": string,
    "totalprice": number,
    "depositpaid": Boolean,
    "additionalneeds": string,
    "bookingdates":BookingDates
}


interface BookingDates{
"checkin": string,
        "checkout": string
}