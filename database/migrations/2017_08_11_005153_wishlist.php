<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

// DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);


class Wishlist extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wishlist', function (Blueprint $table) {
            $table->increments('id');
            $table->string('breeds');
        });

        // DB::insert('insert into wishlist (id, breeds) values (?, ?)', [1, 'Doggo']);

    //     DB::table('wishlist')->insert(
    //  array(
    //         'id'     =>   '1', 
    //         'name'   =>   'Doggo'
    //  )
);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('breeds');
    }
}
