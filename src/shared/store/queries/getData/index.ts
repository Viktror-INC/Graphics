import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";

export interface IResults {
  date: string;
  units: string;
  units_lastyear: string;
  revenue: string;
  revenue_lastyear: string;
  cogs: string;
  cogs_lastyear: string;
  ads_cost: string;
  ads_cost_lastyear: string;
  best_sellers_rank: string;
  best_sellers_rank_lastyear: string;
  ppc_revenue_adjusted: string;
  ppc_revenue_adjusted_lastyear: string;
  ads_cost_adjusted: string;
  ads_cost_adjusted_lastyear: string;
  units_dd: string;
  revenue_dd: string;
  cogs_dd: string;
  ads_dd: string;
  best_sellers_rank_dd: string;
  units_projected: string;
  revenue_projected: string;
  cogs_projected: string;
  ads_cost_projected: string;
  best_sellers_rank_projected: string;
  ppc_revenue_projected: string;
  ppc_revenue: string;
  ppc_revenue_lastyear: string;
}

export interface IStatisticApi {
  payload: {
    results: IResults[];
  };
}

// Define a service using a base URL and expected endpoints
export const statisticApi = createApi({
  reducerPath: "statisticApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    getAllData: builder.query<IStatisticApi, void>({
      query: () => `/reports/test-data`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDataQuery } = statisticApi;
