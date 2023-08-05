import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();

    const {createUser}=useContext(AuthContext)

    const onSubmit=data=>{

        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
    }

    const validatePassword = (value) => {
        // Password must be at least 6 characters
        if (value.length < 6) {
            return "Password must be at least 6 characters long";
        }

        // Password must contain at least one capital letter
        if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one capital letter";
        }

        // Password must contain at least one special character
        if (!/[!@#$%^&*()]/.test(value)) {
            return "Password must contain at least one special character";
        }

        return true;
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        validate: validatePassword
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password && (
                                    <span>{errors.password.message}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) =>
                                            value === getValues("password") ||
                                            "Passwords do not match"
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword && (
                                    <span>{errors.confirmPassword.message}</span>
                                )}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL")}

                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className="my-4 text-center">
                                Already have an account?{" "}
                                <Link className="font-bold text-orange-500" to="/login">
                                    Login
                                </Link>{" "}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;