import { NextApiRequest, NextApiResponse } from "next";
import { getDonations } from "@/server/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const donationRecords = await getDonations();
            res.status(200).json({ success: true, data: donationRecords});
        } catch (error) {
            res.status(400).json({ success: false, message: 'Internal Server Error'});
        }
    } else {
        res.status(405).json({success: false, message: 'Invalid method provided'});
    }
}