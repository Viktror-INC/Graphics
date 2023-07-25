"use client";
import { useGetAllDataQuery } from "shared/store/queries/getData";
import HomePageView from "views/home-page-view";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const { data, error, isLoading } = useGetAllDataQuery();
  if (isLoading) {
    return (
      <div className="flex h-full w-full justify-center min-h-screen absolute top-0 left-0 items-center">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (!data) {
    return "data fetch error";
  }
  return <HomePageView data={data} />;
}
