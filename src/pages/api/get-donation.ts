import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const donationRecords = await db.query.donations.findFirst();
            res.status(200).json({ success: true, data: donationRecords});
        } catch (error) {
            res.status(200).json({ success: false, message: 'Internal Server Error'});
        }
    }
    
    // else if (req.method == "POST") {
    //     try {
    //         const newDonation = await db.insert(donations).value(req.body);
    //         res.status(201).json({ success: true, data: newDonation});
    //     } catch (error) {
    //         res.status(401).json({success: false, message: 'have not been able to POST donation'});
    //     }
    // }
    
    else {
        res.status(405).json({success: false, message: 'Invalid Method'});
    }
}