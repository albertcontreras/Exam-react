import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'





const DashboardLayout = () => { 
    return (
			<div className='min-h-screen flex flex-col '>	
			<header className="bg-slate-900 flex items-center justify-between h-20 w-full ">
			<svg xmlns="http://www.w3.org/2000/svg" 
				fill="none" viewBox="0 0 24 24" 
				strokeWidth="1.5" stroke="currentColor" 
				className="w-10 h-10 text-white ml-2 ">
            <path strokeLinecap="round" 
				strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
			</svg>
             <div className=" text-white text-center text-4xl font-bold animate-pulse">Banco Credit Suisse</div>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-10 h-10 text-white mr-2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
			</header>
			<div className="flex flex-1" >
            <div className=' bg-slate-900 w-60 '>
                <ul className='flex flex-col gap-6 justify-center '>
                <li ><NavLink exact to="/solicitudTarjetas"className="w-full text-center " >Solicitud de Tarjetas</NavLink></li >
                <li ><NavLink exact to="/tarjetasSolicitadas" activeClassName="active"className="w-full text-center ">Tarjetas Solicitadas</NavLink></li>
                <li ><NavLink exact to="/tarjetasAprobadas" activeClassName="active" className="w-full text-center ">Tarjetas Aprobadas</NavLink></li>
				
                </ul>
            </div>
			<main className=' flex-1 p-4"'>
				<Outlet  />
			</main>
			</div>
			</div>
	
	)
}

export default DashboardLayout
