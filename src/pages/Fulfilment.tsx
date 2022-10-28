import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../components/Image'
import ModalForm from '../components/Modal';
import useExport from '../hooks/useExport';
import { RootObject } from '../models/RootObject';
import { ConnectItem } from '../components/ConnectItem';
import { CustomerDetail } from '../components/CustomerDetail';
import { TableComponent } from '../components/TableComponent';
import { Container } from '../components/Container';
import { SearchComponent } from '../components/SearchComponent';


const Fulfilment = () => {
    const [data, setData] = useState([])
    let navigate = useNavigate()
    const [filteredData, setFilteredData] = useState([])
    const [showConnectAccountModal, setShowConnectAccountModal] = useState(false)


    useEffect(() => {
        let data = [{
            id: 0,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 1,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 2,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 3,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 4,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 5,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 6,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        }, {
            id: 7,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'price': 'NGN 34,600',
            'date': 'Jan 6, 2022      ',
            'vehicle_model': 'Mazda - Model Q',
            'transaction_status': 'active'
        },]
        setData(data)
        setFilteredData(data)
    }, [])

    const columns = [
        {
            title: "CUSTOMERS",
            render: (record: RootObject) => {
                return <>
                    {CustomerDetail({ icon: "/" + record.customer.icon, name: record.customer.name, phoneNumber: record.customer.phone })}
                </>
            }
        },
        {
            title: "PRICE",
            dataIndex: "price",
        },
        {
            title: "DATE",
            dataIndex: "date",
        },
        {
            title: "VEHICLE MODEL",
            dataIndex: "vehicle_model",
        },
        {
            title: "COL. STATUS",
            render: (record: RootObject) => {
                return <>
                    {record.transaction_status == "active" || record.transaction_status == "successful" ? <div className=' text-green-400 font-medium rounded-full w-min px-5'>{record.transaction_status}</div> : <div className=' text-red-700 rounded-full w-min px-5'>{record.transaction_status}</div>}
                </>
            }
        }
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

    const { onExcelPrint } = useExport({ columns, data: filteredData, fileName: "fulfilment", pdfTheme: "plain" })


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
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-medium'>Fulfilment</div>
                <button className='px-4 py-3 bg-[#014342] rounded-xl text-white' onClick={() => setShowConnectAccountModal(true)}>
                    Register
                </button>
            </div>



            <div className='py-20'>
                <div className='flex items-center justify-between'>
                    {SearchComponent("Search for customer's name", handleSearch)}

                    <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg' onClick={() => onClickExport()}>Export</button>
                </div>
                

                {TableComponent(rowSelection, filteredData, columns, true,(record, index)=>navigate("/financial/fulfilment-profile"))}


            </div>

            {ConnectAccountModal({ showConnectAccountModal, setShowConnectAccountModal })}
        </Container>
    )




}


function ConnectAccountModal({ showConnectAccountModal, setShowConnectAccountModal }) {
    return (

        <ModalForm visible={showConnectAccountModal} onCancel={() => {
            setShowConnectAccountModal(false);
        }}>
            <div className='w-full p-5 space-y-6'>
                <div>
                    <div className='text-2xl'>Connect account</div>
                    <div className='font-light text-xs'>
                        Connect your mobile account or bank statement to continue
                    </div>
                </div>

                <div className='flex flex-col justify-center space-y-2'>
                    {ConnectItem({ icon: '/account_balance.svg', label: 'Mobile money account' })}

                    {ConnectItem({ icon: '/balance_account.svg', label: 'Mobile money account' })}
                </div>
            </div>
        </ModalForm>


    )

}

export default Fulfilment


