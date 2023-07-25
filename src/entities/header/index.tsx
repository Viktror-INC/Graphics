import Wrapper from "shared/components/wrapper";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Link className="text-slate-50 text-2xl font-bold " href={"/"}>
          Graphs
        </Link>
      </Wrapper>
    </header>
  );
};

export default Header;
