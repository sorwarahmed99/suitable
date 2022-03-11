<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SubscriptionPlanCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id', 'plan_name', 'plan_key', 'plan_price', 'discount', 'discount_occasion', 'creatred_at'
        );

        // return [
        //     'data' => SubscriptionPlanResource::collection($this->collection)
        // ];
    }
}
