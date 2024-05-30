import * as React from "react";
import type { Metadata } from "next";
import Grid from "@mui/material/Unstable_Grid2";

import { config } from "@/config";

import { mortality_data, MortalityType } from "@/data/mortality_stats_final";
import Charts from "@/components/Charts";
import { Box, Typography } from "@mui/material";

export const metadata = {
    title: `Home | ${config.site.name}`,
} satisfies Metadata;

const generateRandomNumber = (): number => {
    return Math.random() * (500 - 0) + 0;
};

export default function Page(): React.JSX.Element {
    return (
        <Box>
            <Typography variant="h4">Mortality Statistics</Typography>
            <div style={{ height: 10 }}></div>
            <Grid container spacing={3}>
                {mortality_data.map((data: MortalityType, idx: number) => {
                    let low = generateRandomNumber();
                    let low2 = generateRandomNumber();
                    return (
                        <Grid lg={6} xs={9} key={data.label}>
                            <Charts
                                xaxis={[
                                    {
                                        data: data["data_s"]["x"]
                                            .slice(low2, low2 + 300)
                                            .map((val) => {
                                                if (val < 0) {
                                                    val = val * -1;
                                                }
                                                val.toPrecision(3);
                                                return val;
                                            }),
                                        label: data["label"],
                                    },
                                    {
                                        data: data["data_ns"]["x"]
                                            .slice(low, low + 300)
                                            .map((val) => {
                                                if (val < 0) {
                                                    val = val * -1;
                                                }
                                                val.toPrecision(3);
                                                return val;
                                            }),
                                        label: data["label"],
                                    },
                                ]}
                                yaxis={[
                                    {
                                        data: data["data_s"]["y"]
                                            .slice(low2, low2 + 300)
                                            .map((val) => {
                                                if (val < 0) {
                                                    val = val * -1;
                                                }
                                                val.toPrecision(3);
                                                return val;
                                            }),
                                        label: `Survival`,
                                    },
                                    {
                                        data: data["data_ns"]["y"]
                                            .slice(low, low + 300)
                                            .map((val) => {
                                                if (val < 0) {
                                                    val = val * -1;
                                                }
                                                val.toPrecision(3);
                                                return val;
                                            }),
                                        label: `Non Survival`,
                                    },
                                ]}
                                y={[{ label: "Density" }]}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
