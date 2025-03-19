<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use App\Models\Training;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingController extends Controller
{
    public function index()
    {
        $trainings = Training::all();
        return Inertia::render('Training', ['trainings' => $trainings]);
    }
    
    public function trainingDetail($id)
    {
        $training = Training::find($id);
        return Inertia::render('TrainingDetail', ['training' => $training]);
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'city' => 'required',
        ]);

        Participant::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'city' => $request->city,
            'training_id' => $id,
        ]);

        return redirect()->back();
    }

}
