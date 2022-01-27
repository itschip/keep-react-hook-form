A lib to store `react-hook-form` values in session storage.

```tsx
type FormData = {
	username: string;
	email: string;
}

function App() {
	const { register, watch, setValue } = useForm<FormData>({ defaultValues: { email: '', username: '' } });
	
	usePersistForm<FormData>({
		formName: "login",
		watch,
		setValue,
		shouldValidate: true,
		shouldDirty: true,
		onRestored: (values) => {
			console.log(values)
		}
	})
	
	return (
		<div className="App">
			<input {...register('username')} />
			<input {...register('email')} />
		</div>
	);
}
```