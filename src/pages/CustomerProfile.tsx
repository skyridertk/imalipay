import { useNavigate } from 'react-router-dom'
import Image from '../components/Image'
import { Field } from '../components/Field'
import { Flex } from '../components/Flex'
import { Label } from '../components/Label'
import { NumberField } from '../components/NumberField'
import { CustomerDetail } from '../components/CustomerDetail'
import { PendingPaymentItem } from '../components/PendingPaymentItem'
import { TransactionHistory } from '../components/TransactionHistory'

const CustomerProfile = () => {
    let navigate = useNavigate()
    return (
        <div className='bg-gray-50 w-full min-h-screen p-10 space-y-4'>
            <div><span className='cursor-pointer' onClick={() => navigate(-1)}>Go back</span> / <span>Oliver Tap</span></div>

            <div className='flex flex-col md:flex-row items-start bg-white'>
                <div className='flex-1 space-y-5 flex flex-col  items-center p-10'>
                    <div className='w-full'>Customer's Profile</div>

                    <div className='w-full'>
                        {CustomerDetail({ icon: '/avatar5.svg', name: 'Oliver tai', phoneNumber: 'Customer' })}
                    </div>


                    <Flex>
                        {Field({ value: '', label: 'First name', type: 'text' })}
                        {Field({ value: '', label: 'Last name', type: 'text' })}
                    </Flex>

                    <Flex>
                        {NumberField({ value: '', label: 'Phonenumber', type: 'text' })}
                    </Flex>

                    <Flex>
                        {Field({ value: '', label: 'Date of birth', type: 'text' })}
                        {Field({ value: '', label: 'State of residence', type: 'text' })}
                    </Flex>

                    <Flex>
                        {Field({ value: '', label: 'Bank name', type: 'text' })}
                        {Field({ value: '', label: 'Bank number', type: 'text' })}
                    </Flex>


                    {Field({ value: '', label: 'Address', type: 'text' })}

                </div>

                <div className='hidden w-10 md:flex justify-center'>
                    <Image image={'/vert_line.svg'} />
                </div>

                <div className='flex-1 flex flex-col  items-center p-10 space-y-5'>
                    <div className='w-full'>
                        {Label({ value: 'Transaction history' })}
                    </div>

                    <div className='flex  justify-center items-center h-32 overflow-clip w-full border-2 rounded-lg'>
                        {TransactionHistory({ label: 'Amount loaned(NGN)', value: '404,051' })}

                        <div className='py-10 h-10 flex justify-center items-center'>
                            <Image image={'/vert_line.svg'} />
                        </div>
                        {TransactionHistory({ label: 'Amount paid(NGN)', value: '120,000' })}
                    </div>

                    <div className='space-y-5 w-full'>
                        {Label({ value: 'Pending Payment' })}

                        <div className='space-y-4'>
                            {PendingPaymentItem({})}
                            {PendingPaymentItem({})}
                            {PendingPaymentItem({})}
                            {PendingPaymentItem({})}
                        </div>

                    </div>
                </div>


            </div>



        </div>
    )







}

export default CustomerProfile