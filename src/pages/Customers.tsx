import { Table } from 'antd';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../components/Image'
import useExport from '../hooks/useExport';
import { CustomersItem } from '../components/CustomersItem';
import { CustomerDetail } from '../components/CustomerDetail';
import { RootObject } from '../models/RootObject';


const Customers = () => {
    let navigate = useNavigate()
    const [filteredData, setFilteredData] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        let data = [{
            'id': '#3066',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'date': '06 Jan, 2022',
            'voucher_no': '00437E',
            'transaction_status': 'verified'
        }, {
            'id': '#3067',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'date': '06 Jan, 2022',
            'voucher_no': '00437E',
            'transaction_status': 'verified'
        }, {
            'id': '#3068',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'date': '06 Jan, 2022',
            'voucher_no': '00437E',
            'transaction_status': 'verified'
        }]
        setData(data)
        setFilteredData(data)
    }, [])
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "CUSTOMERS",
            render: (record: RootObject) => {
                return <>
                    {CustomerDetail({ icon: "/" + record.customer.icon, name: record.customer.name, phoneNumber: record.customer.phone })}
                </>
            }
        },
        {
            title: "DATE REGISTERED",
            dataIndex: "date",
        },
        {
            title: "KYC STATUS",
            render: (record: RootObject) => {
                return <>
                    {record.transaction_status == "verified" ? <div className='bg-green-300 text-green-700 rounded-full  px-5 flex space-x-2 items-center '><div className='pr-4'><Image image={"/check.svg"} /></div> Verified</div> : <div className='bg-red-300 text-red-700 rounded-full  px-5 flex space-x-2 items-center '><div className='pr-4'><Image image={"/check.svg"} /></div> Verified</div>}
                </>
            }
        },

        {
            title: "",
            render: (record: RootObject) => {
                return <>
                    <button onClick={()=>onClickViewHandler(record)}>
                        View
                    </button>
                </>
            }
        },
    ];

    const onClickViewHandler = (record) => {
        navigate("/financial/customer-profile")
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys, selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const { onExcelPrint } = useExport({ columns, data: filteredData, fileName: "customers", pdfTheme: "plain" })


    const onClickExport = () => {
        onExcelPrint()
    }

    const handleSearch = (searchText) => {
        if (searchText == "") {
            setFilteredData(data)
        } else {

            const filteredCustomerData = data.filter(({ customer }) => {

                return customer.name.toLowerCase().includes(searchText);
            });

            setFilteredData(filteredCustomerData)
        }
    };

    return (
        <div className='bg-gray-50 w-full min-h-screen p-10 space-y-10'>
            <div className='text-2xl font-medium'>Customers</div>

            <div className='flex flex-col md:flex-row'>
                {CustomersItem({ percent: <div className='text-green-500 flex items-center space-x-2'><Image image={'/up.svg'} /><div>40%</div></div>, label: 'Total customers', value: '2,420' })}

                {CustomersItem({ percent: <div className='text-red-500 flex items-center space-x-2'><Image image={'/down.svg'} /><div>10%</div></div>, label: 'Total active customers', value: '1,210' })}

                {CustomersItem({ percent: <div className='text-green-500 flex items-center space-x-2'><Image image={'/up.svg'} /><div>20%</div></div>, label: 'total defaulters', value: '316' })}
            </div>

            <div className='py-20'>
                <div className='flex items-center justify-between'>
                    <div className='flex relative'>
                        <input type={'text'} placeholder={"Search for customer's name"} className="bg-white outline outline-gray-500 rounded-lg pl-10 px-8 py-2 w-96" onChange={(e) => handleSearch(e.target.value)} />
                        <div className='absolute left-2 top-2'>
                            <Image image={"/search.svg"} />
                        </div>
                    </div>

                    <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg' onClick={()=>onClickExport()}>Export</button>
                </div>

                <Table
                    rowSelection={rowSelection}
                    pagination={{ position: ['bottomCenter'] }}
                    className="mt-8"
                    dataSource={filteredData}
                    columns={columns}
                    rowKey="id"
                />
            </div>

        </div>
    )

}


export default Customers