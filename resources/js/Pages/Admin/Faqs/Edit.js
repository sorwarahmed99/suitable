import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import LoadingButton from "@/Components/LoadingButton";
import DeleteButton from "@/Components/DeleteButton";
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";

const Edit = ({auth}) => {
    const { faq } = usePage().props;
    const { data, setData, put, errors, processing } = useForm({
        question: faq.question || '',
        answer: faq.answer || '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("admin.faq.update", faq.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this faq?")) {
            Inertia.delete(route("admin.faq.delete", faq.id));
        }
    }

    return (
        <Authenticated
          auth={auth}
          errors={errors}
          header={`Faqs / ${faq.question}`}
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
                                    name="question"
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
                                    name="answer"
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
                        <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
                            {!faq.deleted_at && (
                                <DeleteButton onDelete={destroy}>Delete Faq</DeleteButton>
                            )}
                            <LoadingButton
                                loading={processing}
                                type="submit"
                                className="ml-auto btn-indigo"
                                >
                                Update Faq
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