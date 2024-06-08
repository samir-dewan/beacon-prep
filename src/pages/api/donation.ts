"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { getDonations, postDonation } from "@/server/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const donationRecords = await getDonations();
            res.status(200).json({ success: true, data: donationRecords});
        } catch (error) {
            res.status(400).json({ success: false, message: 'Internal Server Error'});
        }
    }

    else if (req.method === "POST") {
        try {
            const postingDonation = await postDonation(req.body);
            res.status(201).json({success: true, message: req.body, data: postingDonation});
        } catch (error) {
            res.status(401).json({success: false, message: `error posting ${req.body} to database`});
        }
    } else {
        res.status(405).json({success: false, message: 'Invalid method provided'});
    }
}