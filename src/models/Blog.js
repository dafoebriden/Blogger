export class Blog {
    constructor(data) {
        this.id = data.id || data._id
        this.title = data.title || ''
        this.body = data.body || ''
        this.imgUrl = data.imgUrl || ''
        this.tags = data.tags || []
        this.published = data.published
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creatorName = data.creator.name
        this.creatorPicture = data.creator.picture
        this.creatorCoverImg = data.creator.coverImg
        this.creatorGraduated = data.creator.graduated
    }

}

const BlogData = {
    "_id": "65a07bc365a0a03def8d1560",
    "title": "Fake Post Update",
    "body": "I've been thinking for a while now and i can not remember if i like blogs or not. The twisted mind games these people are playing with me need to stop. I know their listening, waiting  for me to break. I keep catching myself blogging without even trying to, I'll have to pay closer attention so i dont lose myself to the blog. Will keep you guys updated",
    "imgUrl": "https://store-images.microsoft.com/image/apps.59356.9007199266251377.f0912944-efa6-4ba4-8068-ef6667d259f2.e3ce1914-2bb6-4135-a508-b24b20b9393a?h=464",
    "tags": [],
    "published": true,
    "creatorId": "6578c7d1c66a9dfc602590f2",
    "createdAt": "2024-01-11T23:37:39.021Z",
    "updatedAt": "2024-01-11T23:37:39.021Z",
    "__v": 0,
    "creator": {
        "_id": "6578c7d1c66a9dfc602590f2",
        "subs": [
            "auth0|6578c7d0b741c392dc8bf562"
        ],
        "email": "maxp@internet.com",
        "name": "maxp",
        "picture": "https://s.gravatar.com/avatar/ae3f6492041b8dd06fff34e27140d9b6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        "bio": "",
        "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
        "github": "",
        "linkedin": "",
        "resume": "",
        "class": "",
        "graduated": false,
        "createdAt": "2023-12-12T20:51:37.936Z",
        "updatedAt": "2023-12-12T20:51:37.936Z",
        "__v": 0,
        "id": "6578c7d1c66a9dfc602590f2"
    },
    "id": "65a07bc365a0a03def8d1560"
}