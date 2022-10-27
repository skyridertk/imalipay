import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Image from '../components/Image'
import useExport from '../hooks/useExport';
import { OverviewItem } from '../components/OverviewItem';
import { CustomerDetail } from '../components/CustomerDetail';
import { Customer } from '../models/Customer';



interface RootObject {
    id: number;
    customer: Customer;
    deposit: string;
    date: string;
    transaction_status: string;
}

const Overview = () => {
    let navigate = useNavigate()
    let location = useLocation()
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        let data = [{
            id: 1,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'deposit': 'NGN 34,600',
            'date': 'Jan 6, 2022 09:21',
            'voucher_no': '00437E',
            'transaction_status': 'successful'
        }, {
            id: 2,
            'customer': {
                'icon': 'avatar2.svg',
                'name': 'Julia Rhye',
                'phone': '+2348030000'
            },
            'deposit': 'NGN 34,600',
            'date': 'Jan 6, 2022 09:21',
            'voucher_no': '00437E',
            'transaction_status': 'successful'
        }]
        setData(data)
        setFilteredData(data)
    }, [])

    console.log(location.pathname)

    const onClickCustomerClickHandler = () => {
        navigate("/financial/customer-profile")
    }

    const columns = [
        {
            title: "Customers",
            render: (record: RootObject) => {
                return <>
                    {CustomerDetail({ icon: record.customer.icon, name: record.customer.name, phoneNumber: record.customer.phone })}
                </>
            }
        },
        {
            title: "Deposit",
            dataIndex: "deposit",
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Voucher no",
            dataIndex: "voucher_no",
        },

        {
            title: "Trans status",
            render: (record: RootObject) => {
                return <>
                    {record.transaction_status == "successful" ? <div className='bg-green-300 text-green-700 rounded-full w-min px-5'>Successful</div> : <div className='bg-red-300 text-red-700 rounded-full w-min px-5'>Failed</div>}
                </>
            }
        },
    ];
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys, selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const { onExcelPrint } = useExport({ columns, data: filteredData, fileName: "overview", pdfTheme: "plain" })


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
        <div className='bg-gray-50 w-full min-h-screen p-10 space-y-4'>
            <div className='text-2xl font-medium'>Overview</div>

            <div className='flex flex-col md:flex-row flex-wrap'>
                {OverviewItem({ icon: '/featured-wallet.svg', label: 'Total outstanding balance', value: '6,709,288' })}

                {OverviewItem({ icon: '/featured-payment.svg', label: 'Total outstanding balance', value: '6,709,288' })}

                {OverviewItem({ icon: '/featured-transaction.svg', label: 'Total outstanding balance', value: '6,709,288' })}
            </div>

            <div className='py-20'>
                <div className='flex items-center justify-between'>
                    <div className='flex relative'>
                        <input type={'text'} placeholder={"Search for customer's name"} className="bg-white outline outline-gray-500 rounded-lg pl-10 px-8 py-2 w-96" onChange={(e) => handleSearch(e.target.value)} />
                        <div className='absolute left-2 top-2'>
                            <Image image={"/search.svg"} />
                        </div>
                    </div>

                    <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg' onClick={() => onClickExport()}>Export</button>
                </div>


                <Table
                    rowSelection={rowSelection}
                    className="mt-8"
                    pagination={{ position: ['bottomCenter'] }}
                    dataSource={filteredData}
                    columns={columns}
                    rowKey="id"
                />
            </div>

        </div>
    )




}



export default Overview