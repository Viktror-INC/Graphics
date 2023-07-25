import React from "react";

import { IStatisticApi } from "shared/store/queries/getData";
import Wrapper from "shared/components/wrapper";
import Graph from "./components/graph";

interface IProps {
  data: IStatisticApi;
}

const HomePageView: React.FC<IProps> = (props) => {
  const { data } = props;
  const results = data.payload.results;

  return (
    <Wrapper className="flex-col">
      <Graph results={results} />
    </Wrapper>
  );
};

export default HomePageView;
