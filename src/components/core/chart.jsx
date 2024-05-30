"use client";

import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";

const Chart = dynamic(
    () => import("@mui/x-charts").then((mod) => mod.LineChart),
    {
        ssr: false,
        loading: () => (
            <Skeleton variant="rounded" width={"100%"} height={350} />
        ),
    }
);

export const LineChart = Chart;

// "use client";

// import dynamic from "next/dynamic";
// import { styled } from "@mui/material/styles";

// const ApexChart = dynamic(() => import("react-apexcharts"), {
//     ssr: false,
//     loading: () => null,
// });

// export const Chart = styled(ApexChart)``;
