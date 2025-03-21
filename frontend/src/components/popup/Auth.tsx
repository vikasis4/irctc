import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/Button";
import close from '@/assets/close.png';
import useAppState from "@/hooks/useAppState";
import axios from "axios";

var LOGIN_ADMIN = "http://localhost:8888/api/admin/auth/login/"
var LOGIN_USER = "http://localhost:8888/api/user/auth/login/"
var REGISTER_USER = "http://localhost:8888/api/user/auth/register/"
var FrontUrl = "http://localhost:5173"

const Auth = () => {

    const [state, setState] = React.useState('Sign In');
    const { setPopUpFxn, setLogInFxn, setUserFxn } = useAppState();


    const schema = z.object({
        username: state == 'Register' ? z.string().min(4) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(8),
    });
    type FormFields = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            var URL = state == 'Register' ? REGISTER_USER : state == 'Admin Login' ? LOGIN_ADMIN : LOGIN_USER;
            var type = state == 'Admin Login' ? 'admin' : 'user';
            var response = await axios.post(URL, data, { withCredentials: true });
            if (response.data.success) {
                setPopUpFxn(false, 'logout');
                setLogInFxn(true);
                localStorage.setItem('authType', type);
                setUserFxn({ name: response.data.result.name, email: response.data.result.email, id: response.data.result._id, type });
                if (state == 'Admin Login')
                    window.location.href = FrontUrl + '/admin';

            } else {
                setError("root", {
                    message: response.data.message,
                });
            }
        } catch (error) {
            setError("root", {
                message: "Something went wrong. Please try again later.",
            });
        }
    };

    var inputStyles = 'p-4 border-2 border-gray-300 w-full text-primary';
    var alertStyles = 'text-red-500 text-left w-full'

    return (
        <form
            className="flex justify-around items-center px-4 relative flex-col gap-2 bg-secondary rounded-md h-[80%] w-[90%] lg:w-[30%] shadow-md"
            onSubmit={handleSubmit(onSubmit)}>

            <h1 className="text-primary font-bold text-5xl pb-2 border-primary border-b-4">{state}</h1>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                {
                    state == "Register" ?
                        <>
                            <input className={inputStyles} {...register("username")} type="text" placeholder="Username" />
                            {errors.username && (
                                <div className={alertStyles}>{errors.username.message}</div>
                            )}
                        </>
                        : null
                }
                <input className={inputStyles} {...register("email")} type="text" placeholder="Email" />
                {errors.email && (
                    <div className={alertStyles}>{errors.email.message}</div>
                )}
                <input className={inputStyles} {...register("password")} type="password" placeholder="Password" />
                {errors.password && (
                    <div className={alertStyles}>{errors.password.message}</div>
                )}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <Button disabled={isSubmitting} variant="primary" size="full" type="submit" text={isSubmitting ? "Loading..." : state} />
                {errors.root && <div className={alertStyles}>{errors.root.message}</div>}
                <div className="flex gap-4 justify-center items-center w-full">
                    <Button
                        variant="secondary"
                        size="full"
                        text={state == "Register" ? "Sign In" : "Register"}
                        onClick={() => setState((state) => (state == "Register" ? 'Sign In' : "Register"))}
                    />
                    <Button
                        variant="secondary"
                        size="full"
                        text={state == 'Admin Login' ? "Sign In" : "Admin Login"}
                        onClick={() => setState((state) => (state == "Admin Login" ? 'Sign In' : "Admin Login"))}
                    />
                </div>
            </div>
            <img onClick={() => setPopUpFxn(false, 'auth')} src={close} alt="close" className="absolute top-2 right-2 h-8 w-8 cursor-pointer" />
        </form>
    );
};

export default Auth;