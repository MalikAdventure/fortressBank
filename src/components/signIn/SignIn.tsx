import { useForm, SubmitHandler } from "react-hook-form";

import './SignIn.scss';
import { IShippingFields } from "./SignInInterface";

//!!! https://www.youtube.com/watch?v=1_4yH0C9iq0&list=WL&index=12&t=426s
//!!! доделать по видео 14:30

const SignIn = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<IShippingFields>();

	const onSubmit: SubmitHandler<IShippingFields> = data => {
		alert(`аккаунт ${data.phone} ${data.password}`);
	};

	return (
		<section className='sign-in'>
			<div className='sign-in__container container'>
				<h2 className="sign-in__title title-h2">Войти в аккаунт</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('phone', {
							required: 'not phone',
						})}
					/>
					{errors?.phone && <div style={{ color: 'red' }}>{errors.phone.message}</div>}
					<input
						{...register('password', {
							required: 'not password',
						})}
					/>
					{errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
					<div>
						<button>Войти</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SignIn;