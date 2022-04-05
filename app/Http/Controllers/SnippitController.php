<?php

namespace App\Http\Controllers;

use App\Models\Snippit;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SnippitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $query = $request->query("query");
        if ($query === null) {
            $snippits = Snippit::with('tags')->get();
            return response()->json(['data'=>$snippits],200);
        } else {
            $snippits = Snippit::whereHas('tags', function($q) use ($query) {
                $q->where('name', 'LIKE', '%'.$query.'%');
            })->get();
            return response()->json(['data'=>$snippits],200);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function newNote(Request $request)
    {
        $tags = $this->registerTags($request->tags);

         $snippit = Snippit::create([
             'title' => $request['title'],
             'notes' => $request['content']
         ]);
        $snippit->save();
        $snippit->tags()->attach($tags);


        return $snippit;
    }

    public function newSnippit(Request $request)
    {
        $tags = $this->registerTags($request->tags);

        $imgPath = '';
        if ($request->image) {
            $imgPath = $request->file('image')->store('images', 'public');
        }
        $snippit = Snippit::create([
            'title' => $request['title'],
            'notes' => $request['content'],
            'image' => $imgPath
        ]);
        $snippit->save();
        $snippit->tags()->attach($tags);

        return $snippit;
    }

    public function registerTags($tags) {
        $explodedTags = explode(' ', $tags);
        $registeredTags = [];
        foreach ($explodedTags as $tag) {
            $exists = Tag::where('name', $tag)->get();
            if (count($exists) === 0) {
                $exists = Tag::create([
                    'name' => $tag,
                ]);
                $registeredTags[]= $exists->id;
            } else {
                $registeredTags[]= $exists[0]->id;
            }
        }

        return $registeredTags;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
