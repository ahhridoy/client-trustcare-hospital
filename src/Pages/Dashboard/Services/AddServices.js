import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://murmuring-fortress-54571.herokuapp.com/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setSuccess(true);
                }
            });
    };

    return (
        <>
            <div className="form-div">
                <form onSubmit={handleSubmit(onSubmit)} className="form-field">
                    <input
                        className="input-field"
                        placeholder="Product Name"
                        {...register("name")}
                    />
                    <textarea
                        className="input-field"
                        placeholder="Product Description"
                        {...register("description")}
                    />
                    <input
                        className="input-field"
                        placeholder="Image Link"
                        {...register("img", { required: true })}
                    />
                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <br />
                    <br />
                    <Button
                        variant="info"
                        style={{ width: "100%" }}
                        type="submit"
                    >
                        Add a Service
                    </Button>
                </form>
            </div>
            {success && (
                <Alert severity="success">
                    Your Services Added Successfully!
                </Alert>
            )}
        </>
    );
};

export default AddServices;
