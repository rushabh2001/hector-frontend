export interface BlogResponse {
  status: boolean;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
  data?: Blog[];
  error?: string;
}

export interface Blog {
  blog_id: number;
  feature_image: string;
  alt_text: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

export interface BlogDetails extends Blog {
  status: number;
  comment_count: number;
  like_count: number;
  author: string;
  author_profile_picture: string;
  categories: Category[];
  tags: Tag[];
  content: string | TrustedHTML;
  feature_image_id: number | undefined;
  meta_title: string;
  meta_description: string;
  published_at: string | null;
  comments: Comment[];
  feature_image_media: MediaImage;
  blog_faqs: BlogFAQ[];
}

export interface Comment {
  blog_comment_id: number;
  parent_id: number | null;
  user_name: string;
  user_email: string;
  comment: string;
  created_at: string;
  Replies?: Comment[];
}

export interface Category {
  category_id: number;
  category_name: string;
  slug: string;
  blog_count?: number;
}

export interface Tag {
  tag_id: number;
  tag_name: string;
  slug: string;
  blog_count?: number;
}

export interface BlogFAQ {
  faq_id: number;
  faq_que: string;
  faq_ans: string;
}
