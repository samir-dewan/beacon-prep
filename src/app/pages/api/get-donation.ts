import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            console.log("in handler");
            const donationRecords = await db.query.donations.findFirst();
            res.status(200).json({ success: true, data: donationRecords});
        } catch (error) {
            res.status(200).json({ success: false, message: 'Internal Server Error'});
        }
    } else {
        res.status(405).json({success: false, message: 'Invalid Method'});
    }
}