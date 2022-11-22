import React, { useEffect } from "react";
import 'antd/dist/antd.css';
import { Table, Tabs } from 'antd';
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { tableColumns } from "./tableColums";


export const Page = () => {
  const data = useSelector((store: AnyAction) => store.data);
  const columns = tableColumns;
  console.log('DataPage', data)
  useEffect(() => {
    
  }, [data])

  return (
    <div>
      <Table dataSource={data.current} columns={columns} />;
    </div>
  );
};

export default Page;