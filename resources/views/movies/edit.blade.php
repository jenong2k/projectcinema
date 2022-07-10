@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
@parent

@endsection

@section('content')

<form action="{{route('movies.update',['movie'=>$movie->id])}}" method="post" enctype="multipart/form-data">
    @csrf
    @method('patch')
    <input type="hidden" name="id" value="{{$movie->id}}">
    <input type="text" name="name" value="{{$movie->name}}">
    <input type="file" name="image">
    <img src="/assets/img/{{$movie->cover}}" alt="">
    <input type="submit" value="Save">
</form>
@endsection
