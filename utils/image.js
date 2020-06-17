const defaultEyeCatch = require('../static/ogimage.png')
export function noImage(post) {
    if (!!post.fields.image && !!post.fields.image.fields)
    return {
        url: `https:${post.fields.image.fields.file.url}`,
        title: post.fields.image.fields.title
    }
    else return { url: defaultEyeCatch.default, title: 'defaultImage' }
}