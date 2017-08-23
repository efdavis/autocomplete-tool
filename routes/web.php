<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return view('welcome');
});


Route::group(['prefix' => 'api'], function() {
    Route::get('/breeds', function(){
        $breeds = DB::table('dog_breeds')->get();

        return $breeds;
    });

    // Route::post('/dogBreedAdd', function() {
    //      DB::insert('insert into wishlist (id, breeds) values (?, ?)', [2, 'Froggo']);
    // });

     Route::post('/dogBreedAdd', function(Request $req) {
        // return var_dump($_POST);

        //arugment is the name of the field we want to access in the data send
        // error_log(print_r($req->body, true));
        $breeds = $req->input('breed');


        $data = array('breeds'=>$breeds);

        // return dd($data);

        // return $data;

        // json_encode translates the data into a json outputed string
        // return json_encode($data);

        // return $data

        // DB:table('wishlist')->insert($data);

        DB::table('wishlist')->insertGetId($data);

    });

});

//  DB::insert('insert into wishlist (id, breeds) values (?, ?)', [3, $data]);


// Route:post('/post', [
//     'uses' => 'PostController@create', //which controller and action handles the route
//     'as' => 'post.create', //assigns name for the route,
//     'middleware' => 'auth', //specifies middleware for the route
// ]);

// //alt method
// Route::resource('post', 'PostController',[
//     'only' => ['index', 'show'] //don't need all default routres they would create
// ])

//actions handled by resource controller 
//https://laravel.com/docs/5.1/controllers
// describes get / post / delete with paths and actions

// Route::group(['prefix' => 'api'], function() {
//     Route::resource('meeting', 'MeetingController', [
//         'only' => ['store','destroy']
//     ]);

//     Route::post('user', [
//         'uses' => 'AuthController@store'
//     ]);

// });