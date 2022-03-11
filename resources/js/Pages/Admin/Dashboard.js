import React, { useState } from "react";
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";

export default function Dashboard(props) {
   
    return (
        <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={`Dashboard`}
                btnName = {`Add Packege`}
                href = {route('admin.plan.create')}
            >
            {props.auth.user.firstname}
        </Authenticated>
    );
}