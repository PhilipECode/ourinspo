export default {
    name:'comment',
    title:'Comment',
    type:'document',
    fields:[
        {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
        },
        {
        name: 'comment',
        title: 'Comment',
        type: 'string',
        },
        {
        name:'like',
        title:'Like',
        type:'array',
        of: [{type: 'like'}]
        },
    ]
}