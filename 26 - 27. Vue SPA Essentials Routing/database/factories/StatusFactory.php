<?php

use Faker\Generator as Faker;

$factory->define(\App\Status::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'body' => $faker->realText(100),

    ];
});
