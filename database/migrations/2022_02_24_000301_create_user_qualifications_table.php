<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_qualifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('highest_education')->nullable();

            $table->string('university')->nullable();
            $table->string('university_graduation_year')->nullable();
            $table->string('college')->nullable();
            $table->string('college_graduation_year')->nullable();


            $table->string('current_profession')->nullable();
            $table->string('for_how_long')->nullable();
            $table->string('company_name')->nullable();
            $table->string('yearly_income')->nullable();
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
        Schema::dropIfExists('user_qualifications');
    }
}
