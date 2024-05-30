"use client";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Icon, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import SinglePatient from "@/components/dashboard/patients/single-patient";

export default function Page(): React.JSX.Element {
    const [selectedPatient, setSelectedPatient] = React.useState<string>("");

    const [rows, setRows] = React.useState<any[]>([]);

    React.useEffect(() => {
        fetch("http://127.0.0.1:5000/patients")
            .then((response) => response.json())
            .then((data) => {
                let temp = data.data.map((row: any, idx: number) => {
                    return {
                        ...row,
                        id: idx,
                    };
                });
                setRows(temp);
            });
    }, []);

    const columns: GridColDef[] = [
        { field: "subject_id", headerName: "Subject ID", width: 150 },
        { field: "anchor_age", headerName: "Age", width: 100 },
        { field: "gender", headerName: "Gender", width: 100 },
        {
            field: "view",
            headerName: "View",
            width: 100,
            renderCell(params) {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {
                            setSelectedPatient(params.row.subject_id);
                        }}
                    >
                        View
                    </Button>
                );
            },
        },
    ];

    return (
        <Box>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                {selectedPatient && (
                    <Button
                        onClick={() => {
                            setSelectedPatient("");
                        }}
                    >
                        <ArrowBack />
                    </Button>
                )}

                <Typography variant="h4">
                    {selectedPatient ? "Patient Info" : "All Patients"}
                </Typography>
            </div>

            <div style={{ height: 25, width: "100%" }}></div>
            <Grid spacing={3}>
                {selectedPatient ? (
                    <SinglePatient patient_id={selectedPatient} />
                ) : (
                    <Box>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            onRowClick={(row) => {
                                console.log(row);
                            }}
                        />
                    </Box>
                )}
            </Grid>
        </Box>
    );
}
