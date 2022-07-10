<?php

namespace App\Http\Controllers;

use App\Models\cinema;
use App\Http\Requests\StorecinemaRequest;
use App\Http\Requests\UpdatecinemaRequest;

class CinemaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecinemaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecinemaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cinema  $cinema
     * @return \Illuminate\Http\Response
     */
    public function show(cinema $cinema)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cinema  $cinema
     * @return \Illuminate\Http\Response
     */
    public function edit(cinema $cinema)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecinemaRequest  $request
     * @param  \App\Models\cinema  $cinema
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecinemaRequest $request, cinema $cinema)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cinema  $cinema
     * @return \Illuminate\Http\Response
     */
    public function destroy(cinema $cinema)
    {
        //
    }
}
