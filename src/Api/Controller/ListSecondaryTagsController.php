<?php

namespace Blomstra\SecondaryTagsToggler\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\TagRepository;

class ListSecondaryTagsController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = TagSerializer::class;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var TagRepository
     */
    protected $tags;

    public function __construct(TagRepository $tags)
    {
        $this->tags = $tags;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        return $this->tags
            ->all($actor)
            ->whereNull('position');
    }
}
