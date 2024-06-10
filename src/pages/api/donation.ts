import { NextApiRequest, NextApiResponse } from "next";
import { getDonations, postDonation } from "@/server/queries";
import { db } from '@/server/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const donationRecords = await db.query.donations.findMany();
            res.status(200).json({ success: true, data: donationRecords});
        } catch (error) {
            res.status(400).json({ success: false, message: 'Internal Server Error'});
        }
    } else if (req.method == "POST") {
        try {
            const post = await postDonation(req.body);
            res.status(201).json({ success: true, data: req.body});
        } catch (error) {
            res.status(401).json({ success: false, message: 'Could not POST request'})
        }
    } 
    
    else {
        res.status(405).json({success: false, message: 'Invalid method provided'});
    }
}