<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserReligiousHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_religious_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');

            $table->string('religious_history')->nullable();
            
            $table->string('read_quran')->nullable();
            
            $table->string('prayer_frequency')->nullable();
            $table->string('sect')->nullable();
            $table->string('school_of_thoughts')->nullable();
            $table->string('eat_halal')->nullable();
            $table->string('smoke')->nullable();
            $table->string('drink_alchohol')->nullable();
            $table->string('wear_hijab_keep_beard')->nullable();
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
        Schema::dropIfExists('user_religious_histories');
    }
}
