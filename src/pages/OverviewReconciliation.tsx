import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import ModalForm from '../components/Modal';
import useExport from '../hooks/useExport';
import { CustomOverviewItem } from '../components/CustomOverviewItem';
import { ModalTitle } from '../components/ModalTitle';
import { CustomerDetail } from '../components/CustomerDetail';
import { OverviewItem } from '../components/OverviewItem';
import { RootObject } from '../models/RootObject';
import { TableComponent } from '../components/TableComponent';
import { Container } from '../components/Container';
import { SearchComponent } from '../components/SearchComponent';
import { ReconciliationOverviewItem } from '../components/ReconciliationOverviewItem';


const OverviewReconciliation = () => {
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [showMobileAccountModal, setShowMobileAccountModal] = useState(false)
    const [showBankAccountModal, setShowBankAccountModal] = useState(false)
    const [showConnectERPModal, setShowConnectERPModal] = useState(false)

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let data = [{
            id: 0,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'invoice_total': 'KES 11,600',
            'date': 'Jan 6, 2022 09:21',
            'amount_received': 'KES 2182',
            'transaction_status': '82'
        }, {
            id: 1,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'invoice_total': 'KES 11,600',
            'date': 'Jan 6, 2022 09:21',
            'amount_received': 'KES 2182',
            'transaction_status': '82'
        }, {
            id: 2,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'invoice_total': 'KES 11,600',
            'date': 'Jan 6, 2022 09:21',
            'amount_received': 'KES 2182',
            'transaction_status': '82'
        }, {
            id: 3,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'invoice_total': 'KES 11,600',
            'date': 'Jan 6, 2022 09:21',
            'amount_received': 'KES 2182',
            'transaction_status': '82'
        }, {
            id: 4,
            'customer': {
                'icon': 'avatar1.svg',
                'name': 'Olivia Rhye',
                'phone': '+2348030000'
            },
            'invoice_total': 'KES 11,600',
            'date': 'Jan 6, 2022 09:21',
            'amount_received': 'KES 2182',
            'transaction_status': '82'
        }]
        setData(data)
        setFilteredData(data)
    }, [])

    const columns = [
        {
            title: "DATE",
            dataIndex: "date",
        },
        {
            title: "ACCOUNT",
            render: (record: RootObject) => {
                return <>
                    {CustomerDetail({ icon: record.customer.icon, name: record.customer.name, phoneNumber: record.customer.phone })}
                </>
            }
        },
        {
            title: "INVOICE TOTAL",
            dataIndex: "invoice_total",
        },

        {
            title: "AMOUNT RECEIVED",
            dataIndex: "amount_received",
        },
        {
            title: "PERCENTAGE RECONCILED",
            render: (record: RootObject) => {
                return <>
                    {record.transaction_status >= '50' ? <div className=' text-green-400 font-medium rounded-full w-min px-5'>{record.transaction_status}%</div> : <div className=' text-red-700 rounded-full w-min px-5'>{record.transaction_status}%</div>}
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

    const { onExcelPrint } = useExport({ columns, data: filteredData, fileName: "reconciliation", pdfTheme: "plain" })


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
            <div className='text-2xl font-medium'>Account summary</div>

            <div className='flex flex-col md:flex-row items-center justify-between space-y-5'>
                <button className='flex bg-gray-100 px-4 py-2 rounded-lg items-center space-x-4'>
                    <Image image={'/filter_alt.svg'} />
                    <div>Today</div>
                    <Image image={'/downward-arrow.svg'} />
                </button>
                <div className='flex space-x-5'>
                    {AccountButton({ icon: '/link.svg', label: 'Connect ERP', color: 'bg-[#FFBD2E]', onClick: () => setShowConnectERPModal(true) })}

                    {AccountButton({ icon: '/description.svg', label: 'Upload CV', color: 'text-white bg-[#80B539]', onClick: () => setShowUploadModal(true) })}

                    {AccountButton({ icon: '/account_circle.svg', label: 'Connect Account', color: 'text-white bg-[#222222]', onClick: () => setShowConnectERPModal(true) })}
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                {ReconciliationOverviewItem({ icon: '/account_1.svg', label: 'Total order transactions', value: '6,708,321' })}

                {ReconciliationOverviewItem({ icon: '/account_2.svg', label: 'Total collections', value: '2,240,059' })}

                {CustomOverviewItem({ icon: '/featured-transaction.svg', label: 'Reconcile', value: <div>53 <span className='text-gray-200'>/100%</span></div> })}
            </div>

            <div className='py-20'>
                <div className='flex items-center justify-between'>
                    {SearchComponent("Search for drivers's name", handleSearch)}

                    <button className='bg-white py-2 px-5 outline outline-gray-500 rounded-lg' onClick={() => onClickExport()}>Export</button>
                </div>

                {TableComponent(rowSelection, filteredData, columns)}
            </div>


            {UploadModal({ showUploadModal, setShowUploadModal })}
            {MobileAccountModal({ showMobileAccountModal, setShowMobileAccountModal })}
            {BankAccountModal({ showBankAccountModal, setShowBankAccountModal })}
            {ConnectERPModal({ showConnectERPModal, setShowConnectERPModal })}
        </Container>


    )

}

function AccountButton({ icon, label, color, onClick }) {
    return (
        <button className={`${color} flex px-3 py-2 rounded-lg items-center`} onClick={onClick}>
            <Image image={icon} />
            <div>{label}</div>
        </button>
    )
}





function UploadModal({ showUploadModal, setShowUploadModal }) {
    return (
        <ModalForm visible={showUploadModal} onCancel={() => {
            setShowUploadModal(false);
        }}>

            <div className='w-full p-5 space-y-6'>
                <div>
                    <Image image={'/arrow-back.svg'} />
                </div>
                <div className='py-5 bg-gray-200 outline-dashed rounded-xl flex flex-col justify-center items-center'>
                    <Image image={'/upload_file.svg'} />
                    <div className='text-sm'>
                        Click to upload PDF file
                    </div>
                </div>

                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Submit
                </button>
            </div>

        </ModalForm>


    )

}

function MobileAccountModal({ showMobileAccountModal, setShowMobileAccountModal }) {
    return (
        <ModalForm visible={showMobileAccountModal} onCancel={() => {
            setShowMobileAccountModal(false);
        }}>
            <div className='w-full p-5 space-y-6'>
                <div className='flex space-x-2 items-center'>
                    <Image image={'/arrow-back.svg'} />
                    <div>
                        Go back
                    </div>
                </div>

                {ModalTitle({ label: 'Mobile money account', subTitle: 'Choose an option to proceed' })}



                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Connect Mpesa account
                </button>

                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Upload Mpesa statement
                </button>
            </div>

        </ModalForm>

    )

}


function BankAccountModal({ showBankAccountModal, setShowBankAccountModal }) {
    return (
        <ModalForm visible={showBankAccountModal} onCancel={() => {
            setShowBankAccountModal(false);
        }}>
            <div className='w-full p-5 space-y-6'>
                <div className='flex space-x-2 items-center'>
                    <Image image={'/arrow-back.svg'} />
                    <div>
                        Go back
                    </div>
                </div>

                {ModalTitle({ label: 'Bank account', subTitle: 'Choose an option to proceed' })}



                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Connect bank account
                </button>

                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Upload bank statement
                </button>
            </div>

        </ModalForm>


    )
}

function ConnectERPModal({ showConnectERPModal, setShowConnectERPModal }) {
    return (
        <ModalForm visible={showConnectERPModal} onCancel={() => {
            setShowConnectERPModal(false);
        }}>
            <div className='w-full p-5 space-y-6'>

                {ModalTitle({ label: 'Connect with us', subTitle: 'Connect your mobile account or bank statement to continue' })}


                <select defaultValue={'0'} className="w-full px-4 py-2  rounded-xl outline">
                    <option value={'0'}>
                        Xero
                    </option>
                </select>

                <button className='bg-green-400 w-full py-3 rounded-lg'>
                    Connect
                </button>
            </div>

        </ModalForm>

    )
}




export default OverviewReconciliation