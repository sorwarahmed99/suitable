import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import LoadingButton from "@/Components/LoadingButton";
import DeleteButton from "@/Components/DeleteButton";
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";

const Edit = ({auth}) => {
    const { plan } = usePage().props;
    const { data, setData, put, errors, processing } = useForm({
        plan_name: plan.plan_name || '',
        plan_key: plan.plan_key || '',
        plan_price: plan.plan_price || '',
        discount: plan.discount || '',
        discount_occasion: plan.discount_occasion || '',
    });

    console.log(data.plan_name);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("admin.plan.update", plan.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("admin.plan.delete", plan.id));
        }
    }

    return (
        <Authenticated
          auth={auth}
          errors={errors}
          header={`Subscription Plans / ${plan.plan_name}`}
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
                                    name="plan_name"
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
                                    name="plan_key"
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
                                    name="plan_price"
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
                                        name="discount"
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
                                        name="discount_occasion"
                                        value={data.discount_occasion}
                                        onChange={e => setData('discount_occasion', e.target.value)}
                                    />
                                    <span className="text-red-600">
                                        {errors.discount_occasion}
                                    </span>
                                </div>
                            </div>
                           
                            
                        </div>
                        <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
                            {!plan.deleted_at && (
                                <DeleteButton onDelete={destroy}>Delete Contact</DeleteButton>
                            )}
                            <LoadingButton
                                loading={processing}
                                type="submit"
                                className="ml-auto btn-indigo"
                                >
                                Update Contact
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};


export default Edit;