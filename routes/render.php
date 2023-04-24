<?php


use Inertia\Inertia;

function render($component, $props  = [])
{
    $component = str_replace('.', '/', $component);
    return Inertia::render($component, $props);
}
