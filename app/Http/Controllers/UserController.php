<?php

namespace App\Http\Controllers;

use App\Models\Activities;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function cart()
    {
        return Inertia::render('Cart');
    }

    public function productService()
    {
        return Inertia::render('Product&Service');
    }

    public function checkout()
    {
        $WhatsappNumber =  config('services.whatsapp.number');
        return Inertia::render('Checkout', [
            'WhatsappNumber' => $WhatsappNumber,
        ]);
    }

    public function about(){
        return Inertia::render('AboutUs');
    }

    public function landingpage(){
        $news = News::all();
        $activities = Activities::all();

        return Inertia::render('LandingPage',[
            'news'=>$news,
            'activities'=>$activities,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(news $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(news $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, news $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(news $news)
    {
        //
    }
}
