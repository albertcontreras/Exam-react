import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'




const DashboardLayout = () => {
    return (
			<div className='w-full h-screen'>	
			<header className ="bg-blue-500 border-r-1 border-black h-16 w-auto flex items-center justify-center">
             <div className=" text-white text-2xl font-bold">Banco Credit Suisse</div>
			</header>
			<div className="flex flex-row h-full w-full">
            <nav className=' bg-blue-500 w-60 h-full p-4'>
                <ul className='flex flex-col items-center space-y-40 '>
                <li className='text-white mt-10  '><NavLink exact to="/solicitudTarjetas" activeClassName="active">Solicitud de Tarjetas</NavLink></li>
                <li className='text-white '><NavLink exact to="/tarjetasSolicitadas" activeClassName="active">Tarjetas Solicitadas</NavLink></li>
                <li className='text-white  '><NavLink exact to="/tarjetasAprobadas" activeClassName="active">Tarjetas Aprobadas</NavLink></li>
                </ul>
            </nav>
			<main className='flex-1 p-4 border-2 border-black'>
				<Outlet />
				</main>
			</div>
			</div>
	
	)
}

export default DashboardLayout
