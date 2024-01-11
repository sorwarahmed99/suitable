import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";
import LoadingButton from "@/Components/LoadingButton";

const Create = (props) => {
    const { data, setData, errors, post, processing } = useForm({
        question: '',
        answer: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("admin.faq.store"));
    }

    return (
        <Authenticated
          auth={props.auth}
          errors={props.errors}
          header={`Faqs / Create`}
          btnName = {`Go back`}
          href = {route('admin.faqs')}
      >
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Question</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.question}
                                    onChange={(e) =>
                                        setData("question", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.question}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">Answer</label>
                                <textarea
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.answer}
                                    onChange={(e) =>
                                        setData("answer", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.answer}
                                </span>
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