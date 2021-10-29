<?php

namespace Blomstra\Orion;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Http\RequestUtil;
use Flarum\Tags\TagRepository;
use Psr\Http\Message\ServerRequestInterface;

class LoadAllForumTagsRelationship
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
