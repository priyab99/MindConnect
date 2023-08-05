import { Link } from "react-router-dom";


const Login = () => {

    const handleLogIn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        
        console.log(email,password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className="text-center mt-2">or</p>
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Google" />
                        </div>
                        <p className="my-4 text-center">New to MindConnect? <Link className="font-bold text-orange-500" to='/signup'>Sign Up</Link> </p>
                
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;