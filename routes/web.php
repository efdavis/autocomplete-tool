<?php

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