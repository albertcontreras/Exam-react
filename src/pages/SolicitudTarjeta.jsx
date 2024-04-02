import { Formik, Form } from 'formik'
import TextInput from "../components/TexInput"
import { Button, Card,Stack,Container,Typography, CardContent} from '@mui/material'
import { useDataStore } from "../Store"
import { useSnackbar } from 'notistack'



const validateSolicitud  = (values) =>{
  const errors = {}
   if (!values.nombre) {
     errors.nombre = "este campo no puede estar vacio"
   } 
   if (!values.documentoIdentidad) {
    errors.documentoIdentidad = 'este campo no puede estar vacio'
  }

  if (!values.correo) {
    errors.correo = 'este campo no puede estar vacio'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = 'formato de correo no válido'
  }
  
  if (!values.telefono) {
    errors.telefono = 'este campo no puede estar vacio'
  }

  return errors
}



const SolicitudTarjeta = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { data, setData } = useDataStore((state) => ({
    data: state.data,
    setData: state.setData
  }))



  const initialValues = {
    nombre: '',
    documentoIdentidad: '',
    correo: '',
    telefono: ''
  }

  const crearSolicitud = (values, resetForm) => {
    let auxData = []
    if (data === null || data === undefined) auxData = []
    else auxData = [...data]
    enqueueSnackbar('Solicitud creada Correctamente', { variant: 'success' } )
    setData([...auxData, values])
    resetForm()
  }

  return (
    <Container maxWidth="md">
       <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        justifyContent="start"
        mb={1}
        mt={3}
      >
        <Typography variant='h5'>
          Solicitud de Tarjeta de Crédito
        </Typography>
      </Stack>
      <Card>
        <CardContent>
          <Container maxWidth= "xs">
            <Formik
              initialValues={initialValues}
              validate={(values) => validateSolicitud(values)}
              onSubmit={(values, { resetForm }) => crearSolicitud(values, resetForm)}
            >
              <Form>
                <Stack
                  direction='column'
                  mt={5}
                  alignItems='stretch'
                  justifyContent='center'
                  spacing={4}
                  
                >
                  <TextInput
                    size="small"
                    type='text'
                    variant='outlined'
                    label='Nombre'
                    name='nombre'
                    fullWidth
                  />
                  <TextInput
                    size="small"
                    variant='outlined'
                    label='Documento de Identidad'
                    name='documentoIdentidad'
                    fullWidth
                  />
                  <TextInput
                    size="small"
                    variant='outlined'
                    label='Correo Electrónico'
                    name='correo'
                    fullWidth
                  />
                  <TextInput
                    size="small"
                    type='number'
                    variant='outlined'
                    label='Teléfono'
                    name='telefono'
                    fullWidth
                  />
                </Stack>
                <Stack spacing={3} mt={2} alignItems='end'>
                  <Button type="submit" style={{ backgroundColor: "#0f172a", color: "white" }}>Guardar</Button>
								</Stack>
              </Form>
            </Formik>
          </Container> 
        </CardContent>
      </Card>
      </Container>
  )
}

export default SolicitudTarjeta