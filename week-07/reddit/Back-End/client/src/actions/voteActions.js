const upVoteAction = (posts) => (
    {
    type: "UPVOTE",
    posts: posts
});

const downVoteAction = (posts) => ({
    type: "DOWNVOTE",
    posts: posts
});

export {
    upVoteAction,
    downVoteAction
}