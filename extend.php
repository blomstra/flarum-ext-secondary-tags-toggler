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

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\ApiController(ShowForumController::class))
        ->addInclude(['tags'])
        ->prepareDataForSerialization(LoadSecondaryForumTagsRelationship::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('canViewSecondaryTagToggler', function (DiscussionSerializer $serializer, Discussion $model) {
            return $serializer->getActor()->can('discussion.viewSecondaryTagsToggler', $model);
        }),

    (new Extend\Routes('api'))
        ->get('/blomstra-secondary-tags-toggle/all-secondary-tags', 'blomstra.secondaryTagsToggle.allSecondaryTags', Api\Controller\ListSecondaryTagsController::class),

    (new Extend\Settings())
        ->serializeToForum('blomstra-secondary-tag-toggler.only_one_secondary_tag', 'blomstra-secondary-tag-toggler.only_one_secondary_tag', 'boolval', false)
];
