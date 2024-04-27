"use client";
import React from "react";
import { OnMemoryDataSourceImpl, RepositoryImpl } from "../../Data/index";
import { TicTacToeView } from "../../Presentation/index";
import "./page.css";

// Dependency injection
const dataSource = new OnMemoryDataSourceImpl();
const repository = new RepositoryImpl(dataSource);

const page = () => {
  return <TicTacToeView repository={repository} />;
};

export default page;
