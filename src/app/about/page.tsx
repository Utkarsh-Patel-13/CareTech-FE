"use client";
import { CheckCircleOutline } from "@mui/icons-material";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { set } from "react-hook-form";

const AboutUs = () => {
    const [submitted, setSubmitted] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h2">Support</Typography>
            {/* <div style={{ height: 20 }} /> */}
            {/* <Card>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        p: 4,
                    }}
                >
                    <Typography variant="h5">CareTech</Typography>
                    <Typography variant="body1">
                        CareTech was started by three graduate students at the
                        University of California, Irvine as just an idea for
                        their Capstone project which has now evolved as a major
                        technology partner for large hospital chains. The
                        company is dedicated to reshaping healthcare delivery
                        with empathy at its core.
                    </Typography>
                </CardContent>
            </Card> */}
            <Card sx={{ marginTop: 2, bgcolor: "background.default" }}>
                <CardHeader
                    title="Raise a Ticket"
                    titleTypographyProps={{ variant: "h5" }}
                />
                {submitted && (
                    <Alert
                        icon={<CheckCircleOutline fontSize="inherit" />}
                        severity="success"
                        sx={{ m: 3 }}
                    >
                        Thank you for reaching out. We have successfully
                        recieved your message. We will get back to you within 5
                        business days.
                    </Alert>
                )}

                <CardContent>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "& .MuiTextField-root": { mb: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="subject"
                            label="Subject"
                            variant="outlined"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="message"
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                setSubmitted(true);
                                setName("");
                                setEmail("");
                                setSubject("");
                                setMessage("");
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AboutUs;
