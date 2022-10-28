import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import useExport from '../hooks/useExport';
import { RootObject } from '../models/RootObject';
import { DefaultersItem } from '../components/DefaultersItem';
import { CustomerDetail } from '../components/CustomerDetail';
import { TableComponent } from '../components/TableComponent';
import { Container } from '../components/Container';
import { SearchComponent } from '../components/SearchComponent';



const Defaulters = () => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let data = [{
            'id': '#3066',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': '06 Jan, 2022',
            'transaction_status': 'verified'
        }, {
            'id': '#3067',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': '06 Jan, 2022',
            'transaction_status': 'verified'
        }, {
            'id': '#3068',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': '06 Jan, 2022',
            'transaction_status': 'verified'
        }, {
            'id': '#3069',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': '06 Jan, 2022',
            'transaction_status': 'verified'
        }, {
            'id': '#3706',
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Pheonix Baker',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': '06 Jan, 2022',
            'transaction_status': 'verified'
        },]
        setData(data)
        setFilteredData(data)
    }, [])

    const columns = [
        {
            title: "DRIVER",
            render: (record: RootObject) => {
                return <>
                    {CustomerDetail({ icon: "/" + record.customer.icon, name: record.customer.name, phoneNumber: record.customer.phone })}
                </>
            }
        },
        {
            title: "LOAN AMOUNT",
            dataIndex: "price",
        },
        {
            title: "DATE REQUESTED",
            dataIndex: "date",
        },
        {
            title: "LOAN STATUS",
            render: (record: RootObject) => {
                return <>
                    {record.transaction_status == "verified" ? <div className='bg-green-300 text-green-700 rounded-full w-min px-5'>Verified</div> : <div className='bg-red-300 text-red-700 rounded-full w-min px-5'>Not Verified</div>}
                </>
            }
        },

        {
            title: "",
            render: (record: RootObject) => {
                return <>
                    <button>
                        View
                    </button>
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

    const { onExcelPrint } = useExport({ columns, data: filteredData, fileName: "defaulters", pdfTheme: "plain" })


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
        <Container>


            <div className='flex items-center justify-end'>

                <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg flex space-x-3 items-center'>
                    <div>
                        <Image image={'/filter.svg'} />
                    </div>
                    <div>
                        Filter
                    </div>
                </button>
            </div>
            <div className='text-2xl font-medium'>Defaulters</div>

            <div className='flex flex-col md:flex-row'>
                {DefaultersItem({ icon: '/default-amount.svg', additional: '',icon_vert: '/more-vert.svg',  label: 'Total default amount (NGN)', value: '3,160,010' })}

                {DefaultersItem({ icon: '/total-defaults.svg', additional: <div className='text-red-500 flex items-center'><Image image={'/up_1.svg'}/>10%</div>, icon_vert: '/more-vert.svg', label: 'Total default (NGN)', value: '890,100' })}

                {DefaultersItem({ icon: '/defaults-icon.svg', additional: <div className='text-green-500 flex items-center'><Image image={'/up.svg'}/>100%</div>, icon_vert: '/more-vert.svg', label: 'Total number of defaulters', value: '316' })}
            </div>

            <div className='py-20'>
                <div className='flex items-center justify-between'>
                {SearchComponent("Search for driver's name", handleSearch)}

                    <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg' onClick={() => onClickExport()}>Export</button>
                </div>

                {TableComponent(rowSelection, filteredData, columns)}
            </div>
        </Container>
    )




}



export default Defaulters