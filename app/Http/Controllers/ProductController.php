<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function Ecommerce()
    {
        $products = Product::all();
        return Inertia::render('Product&Service', ['prop' => "Ecommerce", 'products' => $products]);
    }

    public function productDetail($id)
    {
        $product = Product::find($id);
        return Inertia::render('ProductDetail', ['product' => $product]);
    }
}
