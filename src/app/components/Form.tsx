"use client";

import React, { useState } from "react";
import { TextField, Accordion, Button, Grid, Box, Typography, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from "@mui/material";

interface formDataProps {
  username?: string;
  DOB?: Date;
  email?: string;
  donation?: number;
  privacyPolicy?: boolean | null;
}

export default function Form() {
  const [formData, setFormData] = useState<formDataProps>({
    username: "",
    DOB: new Date(),
    email: "",
    donation: 0,
    privacyPolicy: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Box component="form" onSubmit={formSubmitHandler}>
      <Typography variant="h4" component="h1" gutterBottom>
        Donate Here
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="username"
            label="Full Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="DOB"
            label="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="number"
            id="donation"
            label="Donation"
            name="donation"
            value={formData.donation}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
            <Accordion>
                <AccordionSummary>
                    Privacy Policy
                </AccordionSummary>
                <AccordionDetails>
                    These are the details of the privacy policy that you will agree to if you check below.
                </AccordionDetails>
            </Accordion>

            <FormControlLabel
                control={
                    <Checkbox
                        aria-label="I agree to the Privacy Policy"
                        value={formData.privacyPolicy}
                        onChange={handleChange}
                    />
                }
                label="I agree to the Privacy Policy."
                />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
