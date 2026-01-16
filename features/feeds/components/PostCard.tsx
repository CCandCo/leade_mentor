"use client";
import { getInitials } from "@/lib/utils";
import { Post } from "../types";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PostCardProps {
  post: Post;
  activeTab?: string;
  delay: number;
}
const PostCard = ({ post, activeTab, delay }: PostCardProps) => {
  const router = useRouter();

  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleRouting = () => {
    router.push(`/mentor/feed/${post.id}`);
  };

  const toggleLike = () => {
    // Logic to toggle like status
    console.log("Toggled like for post:", post.id);
  };

  const toggleSave = () => {
    // Logic to toggle save status
    console.log("Toggled save for post:", post.id);
  };

  const handleShare = () => {
    // Logic to share the post
    console.log("Shared post:", post.id);
  };

  const handleComment = () => {
    // Logic to comment on the post
    console.log("Commented on post:", post.id);
  };

  const toggleContextMenu = () => {
    setShowContextMenu(!showContextMenu);
  };

  const actionsMap = [
    {
      name: "like",
      handler: toggleLike,
      active: post.liked,
      count: post.likes,
      icon: Heart,
    },
    {
      name: "comment",
      handler: handleComment,
      active: false,
      count: post.comments,
      icon: MessageCircle,
    },
    { name: "share", handler: handleShare, active: false, icon: Share2 },
  ];
  return (
    <div
      className="rounded-xl border text-card-foreground transition-all duration-200 bg-card border-border/50 opacity-0 shadow-lg hover:shadow-xl hover:border-border/80 hover:-translate-y-0.5 animate-fade-in-up"
      key={activeTab}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6" onClick={handleRouting}>
        <div className="flex flex-col items-start justify-between mb-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-sm font-medium text-foreground">
                  {getInitials(post.author.name)}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {post.author.role} · {post.timeAgo}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={(e) => {
                e.stopPropagation();
                toggleContextMenu();
              }}
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/*  */}
          <p className="text-foreground mb-4 mt-4 leading-relaxed">
            {post.content}
          </p>

          {/*  */}
          {post.image && (
            <div className="mb-4 rounded-xl overflow-hidden bg-linear-to-br from-primary/20 via-accent/10 to-secondary h-48 w-full"></div>
          )}

          {/*  */}
          <div className="flex items-center justify-between pt-4 border-t border-border w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1">
                {actionsMap.map(
                  ({ active, handler, name, count, icon: Icon }) => (
                    <Button
                      key={name}
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handler();
                      }}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          name === "like" && active
                            ? "text-destructive fill-destructive"
                            : active
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      {count !== undefined && (
                        <span className={`text-sm`}>{count}</span>
                      )}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave();
                }}
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    post.saved
                      ? "text-primary fill-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
