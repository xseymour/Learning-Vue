<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Status
 * @package App
 * @property string body
 */
class Status extends Model
{
    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id')
            ->select(['id', 'name']) //limit user columns
            ;
    }

    public $fillable = ['body'];
}
