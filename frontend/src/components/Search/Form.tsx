import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/Button";
import from from '@/assets/from.png';
import to from '@/assets/location.png';
import swap from '@/assets/swap.png';

const Form = () => {


    const schema = z.object({
        from: z.string().min(2),
        to: z.string().min(2),
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
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };

    var inputStyles = 'p-4 border-b-2 rounded-none border-gray-300 w-full text-primary';
    var alertStyles = 'text-red-500 text-left w-full'

    return (
        <form className="flex justify-around items-center px-4 flex-col gap-2 bg-secondary h-full w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
                <div className="flex gap-2 w-full justify-center items-center">
                    <img src={from} alt="from" className="h-4 w-4" />
                    <input className={inputStyles} {...register("from")} type="text" placeholder="from" />
                    <img src={swap} alt="from" className="h-8 w-8 rotate-90" />
                </div>
                {errors.from && (
                    <div className={alertStyles}>{errors.from.message}</div>
                )}
                <div className="flex gap-2 w-full justify-center items-center">
                    <img src={to} alt="from" className="h-4 w-4" />
                    <input className={inputStyles} {...register("to")} type="text" placeholder="to" />
                </div>
                {errors.to && (
                    <div className={alertStyles}>{errors.to.message}</div>
                )}
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <Button disabled={isSubmitting} variant="primary" size="full" type="submit" text={isSubmitting ? "Loading..." : "Search"} />
                {errors.root && <div className={alertStyles}>{errors.root.message}</div>}
            </div>
        </form>
    );
};

export default Form;