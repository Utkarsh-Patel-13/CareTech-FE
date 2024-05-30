"use client";

import Charts from "@/components/Charts";
import { patient_stats, PatientStats } from "@/data/patient_stats";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";

interface propsType {
    patient_id: string;
}
function SinglePatient({ patient_id }: propsType): React.JSX.Element {
    const [patientInfo, setPatientInfo] = useState<any>({});

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/patient/${patient_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPatientInfo({
                    id: data.data.subject_id,
                    age: data.data.anchor_age,
                    dob: data.data.anchor_year - 100,
                    insurance: data.data.insurance,
                    race: data.data.race,
                    gender: data.data.gender,
                });
            });
    }, []);

    return (
        <Box>
            <Card sx={{ maxWidth: 345, m: 2, bgcolor: "background.default" }}>
                <CardHeader
                    title={`Patient ID: ${patient_id}`}
                    titleTypographyProps={{ variant: "h5" }}
                />
                <CardContent>
                    <Typography variant="h6">Patient Details:</Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1">
                            Gender:{" "}
                            {patientInfo.gender ? patientInfo.gender : "N/A"}
                        </Typography>
                        <Typography variant="body1">
                            Age: {patientInfo.age}
                        </Typography>
                        <Typography variant="body1">
                            Birth Year: {patientInfo.dob}
                        </Typography>
                        <Typography variant="body1">
                            Race: {patientInfo.race ? patientInfo.race : "N/A"}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Grid container spacing={3}>
                {patient_stats.map((data: PatientStats, idx: number) => {
                    return (
                        <Grid lg={6} xs={9} key={data.label}>
                            <Charts
                                yaxis={[
                                    {
                                        data: data["values"]
                                            .slice(0, 100)
                                            .map((val) => val.toPrecision(3)),
                                        label: data["label"],
                                    },
                                ]}
                                y={[{ label: "Reading" }]}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default React.memo(SinglePatient);
