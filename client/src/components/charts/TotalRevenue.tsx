import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import {
  ArrowCircleDownRounded,
  ArrowCircleUpRounded,
} from "@mui/icons-material";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
const TotalRevenue = () => {

  const lastYearsTotal = TotalRevenueSeries[0].data.reduce(
    (prevVal, currVal) => prevVal + currVal,
    0
  );
  const thisYearsTotal = TotalRevenueSeries[1].data.reduce(
    (prevVal, currVal) => prevVal + currVal,
    0
  );

  const totalRevenuePercentage = Number(((thisYearsTotal/lastYearsTotal - 1)*100).toFixed(2)) ;
  
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          {totalRevenuePercentage > 0 ? (
            <ArrowCircleUpRounded sx={{ fontSize: 35, color: "green" }} />
          ) : (
            <ArrowCircleDownRounded sx={{ fontSize: 35, color: "red" }} />
          )}
          <Stack>
            <Typography
              fontSize={15}
              color={totalRevenuePercentage > 0 ? "green" : "red"}
              fontWeight={700}
            >
              {totalRevenuePercentage}%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Year
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
