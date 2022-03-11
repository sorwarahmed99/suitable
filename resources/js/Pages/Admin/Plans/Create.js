import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";
import LoadingButton from "@/Components/LoadingButton";

const Create = (props) => {
    const { data, setData, errors, post, processing } = useForm({
        plan_name: '',
        plan_key: '',
        plan_price: '',
        discount: '',
        discount_occasion: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.plan.store"));
    }

    return (
        <Authenticated
          auth={props.auth}
          errors={props.errors}
          header={`Subscription Plans / Create`}
          btnName = {`Go back`}
          href = {route('admin.plans')}
      >
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Plan name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.plan_name}
                                    onChange={(e) =>
                                        setData("plan_name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.plan_name}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">Plan key</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.plan_key}
                                    onChange={(e) =>
                                        setData("plan_key", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.plan_key}
                                </span>
                            </div>

                            <div className="mb-4">
                                <label className="">Plan Price</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.plan_price}
                                    onChange={(e) =>
                                        setData("plan_price", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.plan_price}
                                </span>
                            </div>
                        
                            <div>
                                <div className="mb-4">
                                    <label className="">Discount (%)</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2"
                                        label="Title"
                                        name="title"
                                        value={data.discount}
                                        onChange={(e) =>
                                            setData("discount", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.discount}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <label className="">Discount For</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2"
                                        label="Title"
                                        name="title"
                                        value={data.discount_occasion}
                                        onChange={(e) =>
                                            setData("discount_occasion", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.discount_occasion}
                                    </span>
                                </div>
                            </div>
                           
                            
                        </div>
                        <div className="mt-4">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
                            >
                            Create Plan
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Create;