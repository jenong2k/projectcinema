<?php

namespace App\Http\Controllers;

use App\Models\audience;
use App\Http\Requests\StoreaudienceRequest;
use App\Http\Requests\UpdateaudienceRequest;

class AudienceController extends Controller
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
     * @param  \App\Http\Requests\StoreaudienceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreaudienceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function show(audience $audience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function edit(audience $audience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateaudienceRequest  $request
     * @param  \App\Models\audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateaudienceRequest $request, audience $audience)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function destroy(audience $audience)
    {
        //
    }
}
