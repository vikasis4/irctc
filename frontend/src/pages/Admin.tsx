import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import axios from "axios";
import useAppState from "@/hooks/useAppState";
import { timeToDateString } from "@/utils/handleDate";
import useAuth from "@/hooks/useAuth";

const URL = 'http://localhost:8888/api/admin/cred/train/create/'

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const schema = z.object({
    trainName: z.string(),
    trainNumber: z.number(),
    source: z.string(),
    destination: z.string(),
    arrivalTime: z.string().refine((time) => timeRegex.test(time), {
        message: "Arrival time must be in the format HH:mm",
    }),
    departureTime: z.string().refine((time) => timeRegex.test(time), {
        message: "departure time must be in the format HH:mm",
    }),
    duration: z.number(),
    totalSeats: z.number(),
    availableSeats: z.number(),
});

type FormFields = z.infer<typeof schema>;

function Admin() {

    const app = useAppState();

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

            if (!app.appState.user.id || app.appState.user.id.length === 0) return alert("Please Login First");

            data.arrivalTime = timeToDateString(data.arrivalTime);
            data.departureTime = timeToDateString(data.departureTime);

            var response = await axios.post(URL + app.appState.user.id, data, {withCredentials: true});

            if (response.data.success) {
                alert("Train Created Successfully");
                window.location.reload();
            } else {
                setError("root", {
                    message: response.data.message,
                });
            }
        } catch (error) {
            setError("root", {
                message: "Something went wrong",
            });
        }
    };

    var inputStyles = 'p-2 border-b-2 rounded-none border-gray-300 w-full font-bold bg-secondary appearance-none text-primary';
    var alertStyles = 'text-red-500 text-left w-full'

    if (app.appState.user.type === 'user') return <NoAccess />

    return (
        <div className='flex justify-center items-center p-8 h-full w-full flex-col gap-6'>
            <div className="flex justify-between items-center h-full w-full">
                <Button variant="primary" size="default" text="Go Back" onClick={() => window.history.back()} />
                <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            </div>
            <form className="flex justify-around items-center px-4 flex-col gap-6 bg-secondary h-full w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center items-center gap-8 w-full">

                    <input className={inputStyles} {...register("trainName")} type="text" placeholder="trainName" />
                    {errors.trainName && (
                        <div className={alertStyles}>{errors.trainName.message}</div>
                    )}

                    <input className={inputStyles} {...register("trainNumber", { valueAsNumber: true })} type="number" placeholder="trainNumber - 6 Digits" />
                    {errors.trainNumber && (
                        <div className={alertStyles}>{errors.trainNumber.message}</div>
                    )}

                    <input className={inputStyles} {...register("source")} type="text" placeholder="source" />
                    {errors.source && (
                        <div className={alertStyles}>{errors.source.message}</div>
                    )}

                    <input className={inputStyles} {...register("destination")} type="text" placeholder="destination" />
                    {errors.destination && (
                        <div className={alertStyles}>{errors.destination.message}</div>
                    )}

                    <input className={inputStyles} {...register("arrivalTime")} type="text" placeholder="arrivalTime (Must be in the format HH:mm)" />
                    {errors.arrivalTime && (
                        <div className={alertStyles}>{errors.arrivalTime.message}</div>
                    )}

                    <input className={inputStyles} {...register("departureTime")} type="text" placeholder="departureTime (Must be in the format HH:mm)" />
                    {errors.departureTime && (
                        <div className={alertStyles}>{errors.departureTime.message}</div>
                    )}
                    <input className={inputStyles} {...register("duration", { valueAsNumber: true })} type="number" placeholder="Duration in Minutes" />
                    {errors.duration && (
                        <div className={alertStyles}>{errors.duration.message}</div>
                    )}

                    <input className={inputStyles} {...register("totalSeats", { valueAsNumber: true })} type="number" placeholder="totalSeats" />
                    {errors.totalSeats && (
                        <div className={alertStyles}>{errors.totalSeats.message}</div>
                    )}

                    <input className={inputStyles} {...register("availableSeats", { valueAsNumber: true })} type="number" placeholder="availableSeats" />
                    {errors.availableSeats && (
                        <div className={alertStyles}>{errors.availableSeats.message}</div>
                    )}

                </div>

                <div className="flex flex-col gap-4 justify-center items-center w-full">
                    <Button disabled={isSubmitting} variant="primary" size="full" type="submit" text={isSubmitting ? "Loading..." : "Submit"} />
                    {errors.root && <div className={alertStyles}>{errors.root.message}</div>}
                </div>
            </form>
        </div>
    )
}

const NoAccess = () => {
    const auth = useAuth()

    React.useEffect(() => {
        auth('admin')
    }, [])

    return <h1 className="flex justify-center items-center h-screen w-screen text-4xl text-red-400">Unauthorized</h1>
}

export default Admin