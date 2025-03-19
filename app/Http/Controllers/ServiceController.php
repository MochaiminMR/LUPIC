<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function Service()
    {
        $services = Service::all();
        return Inertia::render('Product&Service', ['prop' => "Services", 'services' => $services]);
    }

    public function serviceDetail($id)
    {
        $service = Service::find($id);
        return Inertia::render('ServiceDetail', ['service' => $service]);
    }
}
