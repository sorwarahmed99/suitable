<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserFamilyInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_family_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->integer('siblings')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
            
            // $table->integer('how_many_brothers_and_sisters')->nullable();
            // $table->string('a_day_living_with_family')->nullable();
            // $table->string('get_married')->nullable();
            // $table->string('continue_working')->nullable();
            // $table->string('intend_to_move_out')->nullable();
            // $table->string('issues_living_with_inlaws')->nullable();
            // $table->string('future_plan')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_family_infos');
    }
}
