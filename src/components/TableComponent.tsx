import { Table } from 'antd';
import React from 'react';
import { RootObject } from '../pages/Overview';

export function TableComponent(rowSelection: { selectedRowKeys: any[]; onChange: (newSelectedRowKeys: React.Key[]) => void; }, filteredData: any[], columns: ({ title: string; render: (record: RootObject) => JSX.Element; dataIndex?: undefined; } | { title: string; dataIndex: string; render?: undefined; })[], hidden: boolean = true, onRow: (record, index)=>void = ()=>{}) {
    return <div className="w-full bg-white overflow-x-scroll md:overflow-hidden md:w-full my-6 transition-all duration-1000">
        <Table
            rowSelection={rowSelection}
            pagination={{ position: ['bottomCenter'] }}
            onRow={(record, index) => {
                return {
                    onClick: Event => {
                        onRow(record, index)
                    }
                }
            }}
            dataSource={filteredData}
            columns={columns}
            rowKey="id" />

    </div>;
}
