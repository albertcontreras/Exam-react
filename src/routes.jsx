import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from "./layouts/Dash"
import SolicitudTarjeta from "./pages/SolicitudTarjeta"
import TarjetaSolicitada from "./pages/TrajetasSolicitadas"
import TarjetaAprobada from "./pages/TarjetasAprobadas"

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          element: (<Navigate to='/solicitudTarjetas' />),
          index: true,
        },
        { path: 'solicitudTarjetas', element: <SolicitudTarjeta /> },
        { path: 'tarjetasSolicitadas', element: <TarjetaSolicitada /> },
        { path: 'tarjetasAprobadas', element: <TarjetaAprobada /> }
      ]
    }
  ])

  return routes
}