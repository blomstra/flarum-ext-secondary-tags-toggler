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
use Flarum\Http\RequestUtil;
use Flarum\Tags\TagRepository;
use Psr\Http\Message\ServerRequestInterface;

class LoadSecondaryForumTagsRelationship
{
    /**
     * @var TagRepository
     */
    protected $tags;

    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
    }

    /**
     * @param ShowForumController $controller
     * @param $data
     * @param ServerRequestInterface $request
     */
    public function __invoke(ShowForumController $controller, array &$data, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        $data['tags'] = $this->tags
            ->all($actor)
            ->whereNull('position');
    }
}
