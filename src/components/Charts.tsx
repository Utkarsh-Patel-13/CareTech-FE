"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import type { SxProps } from "@mui/material/styles";

import { LineChart } from "@/components/core/chart";

interface ChartsProps {
    xaxis?: any[];
    yaxis: any[];
    y?: any[];
    sx?: SxProps;
}

function Charts({ xaxis, yaxis, y, sx }: ChartsProps): React.JSX.Element {
    return (
        <Card sx={sx}>
            <CardContent>
                <LineChart
                    xAxis={xaxis}
                    series={yaxis}
                    yAxis={y}
                    height={350}
                />
            </CardContent>
            <Divider />
        </Card>
    );
}

export default React.memo(Charts);
