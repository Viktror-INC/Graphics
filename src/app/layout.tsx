"use client";
//libraries
import { Provider } from "react-redux";

//store
import { store } from "shared/store";

//styles
import "./globals.css";
import Header from "entities/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black-900">
        <Header/>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
