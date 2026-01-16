import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { MOCK_POSTS, USER_NAME } from "@/features/dashboard/db";
import PostsSection from "@/features/feeds/components/PostsSection";
import { getInitials } from "@/lib/utils";
import { FileText, ImageIcon, LinkIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/80 to-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground text-sm font-semibold">
              {getInitials(USER_NAME)}
            </span>
          </div>
          <div className="flex-1">
            <textarea
              name="post-content"
              id="post-content"
              placeholder="Share something with your community..."
              className="w-full h-20 bg-secondary rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            ></textarea>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon-sm">
                  <ImageIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <LinkIcon className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="glow" size="sm">
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <PostsSection posts={MOCK_POSTS} />
    </div>
  );
};

export default Page;
