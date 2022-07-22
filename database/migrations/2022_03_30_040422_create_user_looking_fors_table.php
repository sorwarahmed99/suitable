<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLookingForsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_looking_fors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');

            $table->string('ethnic_origin')->nullable();
            $table->string('country')->nullable();
            $table->string('recidency_status')->nullable();
            $table->string('relocate')->nullable();

            $table->string('min_height')->nullable();
            $table->string('max_height')->nullable();
            $table->string('min_age')->nullable();
            $table->string('max_age')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('have_children')->nullable();
            $table->string('like_to_have_children')->nullable();

            $table->string('religious_history')->nullable();
            $table->string('prayer_frequency')->nullable();
            $table->string('sect')->nullable();
            $table->string('school_of_thoughts')->nullable();
            $table->string('eat_halal')->nullable();
            $table->string('smoke')->nullable();
            $table->string('drink_alchohol')->nullable();
            $table->string('wear_hijab_keep_beard')->nullable();

            $table->string('highest_education')->nullable();
            $table->string('get_married')->nullable();
            $table->string('continue_working')->nullable();
            $table->string('intend_to_move_out')->nullable();
            $table->string('issues_living_with_inlaws')->nullable();
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
        Schema::dropIfExists('user_looking_fors');
    }
}
