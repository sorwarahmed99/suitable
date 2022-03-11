<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubscriptionPlanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'plan_name' => ['required', 'max:50'],
            'plan_key' => ['required', 'max:50'],
            'plan_price' => ['required'],
            'discount' => ['nullable', 'max:12'],
            'discount_occasion' => ['nullable', 'max:50'],
        ];
    }
}
