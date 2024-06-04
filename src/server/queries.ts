"use server";
import { db } from "./db";
import { donations } from "./db/schema";

interface donationObj {
    username: string,
    email: string,
    DOB: Date,
    donation: number,
    privacyPolicy: boolean
}

export async function postDonation(donation: donationObj ) {

    await db.insert(donations).values(donation);

    console.log("added to donations database: ", donation);

    return;
}