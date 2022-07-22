<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProfileInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profile_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('marital_status')->nullable();
            $table->string('living_with')->nullable();
            $table->string('have_children')->nullable();
            $table->string('like_to_have_children')->nullable();
            $table->string('physical_disability')->nullable();
            $table->string('height')->nullable();
            $table->string('hair_color')->nullable();
            $table->string('fitness')->nullable();
            $table->text('bio')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_profile_infos');
    }
}
