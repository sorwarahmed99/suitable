import React, { useState } from "react";
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Authenticated from "@/Layouts/AdminLayouts/Authenticated";

export default function Dashboard(props) {
   
    return (
        <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={`Dashboard`}
                btnName = {`Route Users`}
                href = {route('admin.users')}
            >
            {props.auth.user.firstname}
        </Authenticated>
    );
}