<?php

use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\FacilitiesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TrainingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use TCG\Voyager\Facades\Voyager;


Route::get('/', [UserController::class, 'landingpage'])->name('landingpage');
Route::get('/about', [UserController::class, 'about'])->name('aboutus');
Route::get('/services', [UserController::class, 'services'])->name('services');
Route::get('/cart', [UserController::class, 'cart'])->name('cart');
Route::get('/cart/checkout', [UserController::class, 'checkout'])->name('checkout');
Route::get('/training', [TrainingController::class, 'index'])->name('training');
Route::get('/training/{id}', [TrainingController::class, 'trainingDetail'])->name('trainingdetail');
Route::post('/training/{id}', [TrainingController::class, 'store'])->name('training.store');
Route::get('/product&service', [UserController::class, 'productService'])->name('productService');
Route::get('/product&service/eCommerce', [ProductController::class, 'Ecommerce'])->name('Ecommerce');
Route::get('/product&service/eCommerce/{id}', [ProductController::class, 'productDetail'])->name('productdetail');
Route::get('/product&service/services', [ServiceController::class, 'Service'])->name('Service');
Route::get('/product&service/services/{id}', [ServiceController::class, 'serviceDetail'])->name('servicedetail');
Route::get('/activities', [ActivitiesController::class, 'index'])->name('activities');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
Route::get('/facilities', [FacilitiesController::class, 'facilities'])->name('facilities');
Route::get('/news', [NewsController::class, 'news'])->name('news');
Route::get('/news/{slug}', [NewsController::class, 'newsDetail'])->name('newsdetail');

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
