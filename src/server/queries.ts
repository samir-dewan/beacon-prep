"use server";

import { db } from "./db";
import { donations } from "./db/schema";

interface donationObj {
    username: string,
    email: string,
    donation: number,
    privacyPolicy: boolean,
}

//gets most recent donation

export async function getDonations() {

    const donations = await db.query.donations.findFirst();

    return donations;
}

//posts donation

export async function postDonation(donation: donationObj) {
    const donationPost = await db.insert(donations).values(donation);

    return donations
}