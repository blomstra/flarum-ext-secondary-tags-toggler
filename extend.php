<?php

/*
 * This file is part of blomstra/secondary-tags-toggler.
 *
 * Copyright (c) 2021 Blomstra Ltd.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\SecondaryTagsToggler;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Routes('api'))
        ->get('/blomstra-secondary-tags-toggle/all-secondary-tags', 'blomstra.secondaryTagsToggle.allSecondaryTags', Api\Controller\ListSecondaryTagsController::class),
];
