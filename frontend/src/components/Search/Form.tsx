import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/Button";
import from from '@/assets/from.png';
import to from '@/assets/location.png';
import swap from '@/assets/swap.png';
import calender from '@/assets/calendar.png';
import { Dropdown } from "@/components/ui/DropDownMenu";
import briefcase from '@/assets/briefcase.png';
import classimg from '@/assets/class.png';
import { Checkable } from "@/components/ui/Checkable";
import { useNavigate } from "react-router-dom";
import useSearch from "@/hooks/useSearch";


const Form = () => {

    const navigate = useNavigate();

    const schema = z.object({
        source: z.string(),
        destination: z.string(),
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

    const search = useSearch()

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            var respose = await search(data.source, data.destination);
            if (respose.success) {
                navigate(`/showTrains?source=${data.source}&destination=${data.destination}`);
            } else {
                setError("root", {
                    message: "No Trains Found",
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
    var parenStyles = "flex gap-2 w-full justify-center items-center"

    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
    const [classes, setClasses] = React.useState("All Classes");
    const [reservations, setReservations] = React.useState("General");
    const [selected, setSelected] = React.useState<{ [key: number]: boolean }>({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    var indexes = ["Person with Disability", "Flexible with date", "Train with Available Birth", "Railway Pass Consession"]


    return (
        <form
            className="flex justify-around items-center px-4 flex-col gap-2 bg-secondary h-full w-full"
            onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col justify-center items-center gap-8 w-full">

                <div className="h-full w-full lg:flex-row lg:pt-8 flex flex-col gap-8">

                    <div className="h-full w-full flex flex-col gap-8">

                        <div className={parenStyles}>
                            <img src={from} alt="from" className="h-4 w-4" />
                            <input className={inputStyles} {...register("source")} type="text" placeholder="source" />
                            <img src={swap} alt="source" className="h-8 w-8 rotate-90" />
                        </div>
                        {errors.source && (
                            <div className={alertStyles}>{errors.source.message}</div>
                        )}

                        <div className={parenStyles}>
                            <img src={to} alt="destination" className="h-4 w-4" />
                            <input className={inputStyles} {...register("destination")} type="text" placeholder="destination" />
                        </div>
                        {errors.destination && (
                            <div className={alertStyles}>{errors.destination.message}</div>
                        )}

                        <div className={parenStyles}>
                            <img src={calender} alt="from" className="h-4 w-4" />
                            <input
                                placeholder="DD/MM/YYYY"
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className={inputStyles}
                            />
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-col gap-8">
                        <Dropdown
                            value={classes}
                            options={["All Classes", "Economy", "Business", "First Class"]}
                            onOptionSelect={setClasses}
                            srcimg={briefcase} />

                        <Dropdown
                            value={reservations}
                            options={["General", "Women", "Senior Citizen", "Divyang", "Tatkal", "Lower Berth"]}
                            onOptionSelect={setReservations}
                            srcimg={classimg} />
                    </div>

                </div>

                <div className="flex justify-center items-center flex-col w-full gap-2 mb-4 lg:flex-row lg:justify-start lg:flex-wrap ">
                    {
                        indexes.map((data, index) => {
                            index = index + 1
                            return (
                                <Checkable
                                    key={index}
                                    selected={selected[index]}
                                    onChange={() => setSelected({ ...selected, [index]: !selected[index] })}
                                    text={data} />
                            );
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row justify-between items-end w-full">
                <div className="w-full lg:w-[30%] h-full">
                    <Button disabled={isSubmitting} variant="primary" size="full" type="submit" text={isSubmitting ? "Loading..." : "Search"} />
                    {errors.root && <div className={alertStyles}>{errors.root.message}</div>}
                </div>
                <Button
                    text="Easy Bookings on AskDiksha"
                    variant="primary"
                    size="default"
                />
            </div>
        </form>
    );
};

export default Form;