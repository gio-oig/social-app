const SignUpForm = () => {
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="exampleInputName" className="form-label">
					Name
				</label>
				<input
					name="name"
					type="text"
					className="form-control"
					id="exampleInputName"
					aria-describedby="emailHelp"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					name="email"
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					name="password"
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlFile1">
					Select Profile Image
				</label>
				<input
					name="image"
					type="file"
					className="form-control-file"
					id="exampleFormControlFile1"
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default SignUpForm;
