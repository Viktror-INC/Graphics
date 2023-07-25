import React, { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { IResults } from "shared/store/queries/getData";
import dayjs from "dayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from "@mui/material";
import { theme } from "shared/styles/theme";
import { colors } from "shared/styles/colors";

interface IProps {
  results: IResults[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Profit per months",
    },
  },
};

const Graph: React.FC<IProps> = (props) => {
  const { results } = props;

  const months = useMemo(() => {
    const actualMonths = new Set<string>();

    results.forEach((item) => {
      actualMonths.add(dayjs(item.date).format("MMMM"));
    });

    return Array.from(actualMonths);
  }, [results]);

  const [selectMonth, setSelectMonth] = useState<string>(months[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectMonth(event.target.value as string);
  };

  const filteredResult = results.filter(
    (item) => dayjs(item.date).format("MMMM") === selectMonth
  );

  const labels = filteredResult.map((item) => {
    const correctDate = dayjs(item.date).format("DD/MM/YYYY");
    return correctDate;
  });

  const graphicData = {
    labels,
    datasets: [
      {
        label: "Profit",
        backgroundColor: colors.blue["blue-300"],
        borderColor: colors.blue["blue-250"],
        borderWidth: 1,
        data: filteredResult.map((item) => {
          const revenue = parseFloat(item.revenue);
          const cogs = parseFloat(item.cogs);
          const adsCost = parseFloat(item.ads_cost);
          const profit = Math.round(revenue - cogs - adsCost);
          return profit;
        }),
      },
    ],
  };

  return (
    <>
      <ThemeProvider theme={theme("violet")}>
        <FormControl className=" w-full max-w-[300px]">
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectMonth}
            label="Month"
            onChange={handleChange}
          >
            {months.map((item: string, index) => (
              <MenuItem key={`${item}_${index}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
      <Bar options={options} data={graphicData} />
    </>
  );
};

export default Graph;
