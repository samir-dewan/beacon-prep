"use client";

import React, { useState } from "react";
import { TextField, Accordion, Button, Grid, Box, Typography, FormHelperText, AccordionSummary, FormControl, AccordionDetails, Checkbox, FormControlLabel, InputAdornment } from "@mui/material";
import { postDonation } from "@/server/queries";

interface formDataProps {
  username: string;
  email: string;
  donation: number;
  privacyPolicy: boolean;
}

interface formTouchProps {
  username: boolean;
  email: boolean;
  donation: boolean;
  privacyPolicy: boolean;
}

export default function Form() {
  const [formData, setFormData] = useState<formDataProps>({
    username: "",
    email: "",
    donation: 0,
    privacyPolicy: false,
  });

  const [touched, setTouched] = useState<formTouchProps>({
    username: false,
    email: false,
    donation: false,
    privacyPolicy: false
  });

  const [emailValid, setEmailValid] = useState<boolean>(false)

  const [validPost, setValidPost] = useState<boolean>(true);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleValidateEmailRegex = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    emailPattern.test(e.target.value) ? setEmailValid(true) : setEmailValid(false)
  };

  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name} = e.target;
    setTouched({
      ...touched,
      [name]: true
    })
  }

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields: (keyof formDataProps)[] = ["username", "email", "donation", "privacyPolicy"]
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        console.log(`No ${String(field)} in form`);
        setValidPost(false);
        return;
      }
    }

    setValidPost(true);

    await postDonation(formData);
  }

  return (
    <Box component="form" onSubmit={formSubmitHandler}>
      <Typography variant="h4" component="h1" gutterBottom>
        Donate Here
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error = {(touched.username || !validPost) && formData.username.length < 3}
            helperText={(touched.username || !validPost) && formData.username.length < 3 && "Please write more than two characters for your name."}
            id="username"
            label="Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            error={(touched.email || !validPost) && !emailValid}
            helperText = {(touched.email || !validPost) && !emailValid && "Please enter a valid email address."}
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={(e) => 
              {handleChange(e)
              handleValidateEmailRegex(e)}}
            onBlur={handleBlur}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">£</InputAdornment>
            }}
            error={(touched.donation || !validPost) && formData.donation <= 0}
            helperText={(touched.donation || !validPost) && formData.donation <= 0 && "Please enter a positive donation amount."}
            id="donation"
            label="Donation"
            name="donation"
            value={formData.donation}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            type="number"
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
              required
              control={
                <Checkbox
                  aria-label="I agree to the Privacy Policy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
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
