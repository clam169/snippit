<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('snippit_tag', function (Blueprint $table) {
            $table->primary(['snippit_id','tag_id']);
            $table->bigInteger('snippit_id')->unsigned();
            $table->bigInteger('tag_id')->unsigned();
            $table->foreign('snippit_id')
                ->references('id')
                ->on('snippits');
            $table->foreign('tag_id')
                ->references('id')
                ->on('tags');
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
        Schema::dropIfExists('snippit_tag');
    }
};
