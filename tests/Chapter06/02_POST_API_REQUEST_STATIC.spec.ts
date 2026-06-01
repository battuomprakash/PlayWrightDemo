import { test, expect } from '@playwright/test';

import { formatAPIRequest } from 'src/utils/APIHelper';

import path from 'path';
import fs from 'fs';

import {faker} from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API Request using dynamic api request body in playwright & typescript', async ({ request }) => {

    // Reading json file

    const filepath = path.join(__dirname, '../../test-data/api_request/Dynamic_POST_API_Request.json');
    const jsonTemplate = fs.readFileSync(filepath, 'utf-8');

    // Updating POST API request body
    const values  = ['playwright typescript by testers talk','playwright javascript by testers talk', 1000];
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);
   
    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, {data: JSON.parse(postAPIRequest)});   //  to convert the postAPIRequest string data into the json type of data

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: '+JSON.stringify(jsonPOSTAPIResponse,null,2));

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');
});

test('Create POST API Request using dynamic api request body in playwright & typescript 2', async ({ request }) => {

    // Reading json file

    const filePath = path.join(__dirname, '../../test-data/api_request/Dynamic_POST_API_Request.json');
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8');
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({min:1000, max:10000});

    // Updating POST API request body
    const values  = [firstName,lastName, 1000];
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);
   
    // Create POST API Request
    const postAPIResponse = await request.post(`/booking`, {data: JSON.parse(postAPIRequest)});   //  to convert the postAPIRequest string data into the json type of data

    // Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: '+JSON.stringify(jsonPOSTAPIResponse,null,2));

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

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01');
});