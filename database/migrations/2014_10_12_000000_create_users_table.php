<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('nickname')->nullable();
            $table->string('username')->nullable();
            $table->string('email')->unique();
            $table->integer('phone')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('account_created_with')->nullable();
            $table->string('ethnic_origin')->nullable();
            $table->string('country')->nullable();
            $table->string('recidency_status')->nullable();
            $table->string('relocate')->nullable();
            $table->string('postcode')->nullable();
            $table->integer('profile_step')->nullable();
            $table->boolean('account_status')->default(0)->nullable();
            $table->unsignedBigInteger('account_verified_by')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });

        // Schema::table('admins', function (Blueprint $table) {
        //     $table->foreignId('account_verified_by')->constrained();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
