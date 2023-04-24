<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'LaraInerVueWorkspace') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Oxygen:wght@300;400;700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-nunito antialiased">
    @inertia
</body>

</html>
