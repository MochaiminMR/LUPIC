<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Psy\Readline\Hoa\Console;

use function Termwind\render;

class NewsController extends Controller
{
    public function news()
    {
        $news = News::all();

        return Inertia::render('News', ['news' => $news]);
    }

    public function newsDetail($slug)
    {
        $newsDetail = DB::table('news')->where('slug', $slug)->first();
        // dd($newsDetail);
        return Inertia::render('NewsDetail', ['news' => $newsDetail]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
