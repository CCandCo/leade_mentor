export interface PostAuthor {
    name: string;
    role: string
}

export interface Post {
    id: number;
    author: PostAuthor;
    content: string;
    timeAgo: string;
    likes: number;
    comments: number;
    liked: boolean;
    saved: boolean;
    image: string | null;
}