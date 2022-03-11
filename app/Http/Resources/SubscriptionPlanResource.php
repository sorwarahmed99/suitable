<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionPlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public $preserveKeys = true;

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'plan_name' => $this->plan_name,
            'plan_key' => $this->plan_key,
            'plan_price' => $this->plan_price,
            'discount' => $this->discount,
            'discount_occasion' => $this->discount_occasion,
            'created_at' => $this->created_at,
        ];
    }
}
