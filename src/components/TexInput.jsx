import { useField } from 'formik'
import { TextField } from '@mui/material'

const TextInput = ({ ...props }) => {
	const [field, meta] = useField({ ...props, type: props.type })

	return (
		<TextField
			{...field}
			// eslint-disable-next-line react/prop-types
			type={props.type}
			error={meta.error && meta.touched ? true : false}
			helperText={meta.touched ? meta.error : null}
			{...props}
		/>
	)
}

export default TextInput
