import { useNavigate } from "react-router-dom"
import { MainProp } from "../models/MainProp"

const Main = ({}: MainProp) => {
	let navigate = useNavigate()
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='flex flex-col space-y-6'>
				<button className='w-96 outline rounded-full h-20 hover:bg-gray-100' onClick={() => navigate("/financial")}>
					Financial Dashboard
				</button>
				<button className='w-96 outline rounded-full h-20 hover:bg-gray-100' onClick={() => navigate("/reconciliation")}>
					Reconcilation Dashboard
				</button>
			</div>
		</div>
	)
}

export default Main