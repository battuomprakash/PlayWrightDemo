import { test, expect } from '@playwright/test';

import { formatAPIRequest, getPOSTAPIRequestBody } from 'src/utils/APIHelper';

import { faker } from '@faker-js/faker';

import tokenAPIRequest from '../../test-data/api_request/Token_API_Request.json';

import putAPIRequest from '../../test-data/api_request/Token_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create PUT API Request using Playwright & typescript', async ({ request }) => {


    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice,
        true, "breakfast", "2025-01-25", "2025-01-27")

    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });   //  to convert the postAPIRequest string data into the json type of data

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validate api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    // Validate property/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName);

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27');


    // GET API Request
    const bookingid = jsonPOSTAPIResponse.bookingid;
    console.log('Booking ID: ' + bookingid);

    const getAPIRespone = await request.get(`/booking/${bookingid}`);

    //Validate status code, status text
    expect((await getAPIRespone).status()).toBe(200);
    expect((await getAPIRespone).statusText()).toBe('OK');
    const getAPIJSONresponse = await (await getAPIRespone).json();
    console.log('GET API Response: ' + JSON.stringify(getAPIJSONresponse, null, 2));

    //Generata token
    const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });

    //Validate status code, status text
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');

    //Generate a token
    const tokenAPIJSONResponse = await tokenAPIResponse.json();
    const token = tokenAPIJSONResponse.token;
    console.log('Token: ' + token);

    //Create PUT API Request
    const putAPIResponse = await request.put(`/booking/${bookingid}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: putAPIRequest,
    })
    
    // but is not working because issue was postman end.
    expect((await putAPIResponse).status()).toBe(200);
    expect((await putAPIResponse).statusText()).toBe('OK');
    const putAPIJSONResponse = await (await putAPIResponse).json();
    console.log('GET API Response: ' + JSON.stringify(putAPIJSONResponse, null, 2));
});