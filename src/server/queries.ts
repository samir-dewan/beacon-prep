"use server";

import { db } from "./db";
import { donations } from "./db/schema";

interface donationObj {
    username: string,
    email: string,
    DOB: string,
    donation: number,
    privacyPolicy: boolean
}

export async function getDonations() {

    const donations = await db.query.donations.findFirst();

    return donations;
}

export async function postDonation(donation: donationObj ) {

    await db.insert(donations).values(donation);

    return donations;
}