<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SnippitController extends Controller
{
    public function newSnippit(Request $request) {
        dd($request);
    }

    public function newNote(Request $request) {
        dd('hi');
    }
}
