export default function isTagOnDiscussion(discussion: any, tag: any) {
  return discussion.tags().some((t: any) => t.id() === tag.id());
}
