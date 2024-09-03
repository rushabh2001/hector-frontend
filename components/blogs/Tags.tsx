"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useGetTag } from "./services";
import { Tag } from "../types";

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const { data: tagData } = useGetTag();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (tagData) {
      setTags(tagData.data);
    }
  }, [tagData]);
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Tags</h3>
        </div>
        <div className="tag">
          {tags.map((tag) => (
            <Link
              href={{
                pathname: pathname,
                query: {
                  ...Object.fromEntries(searchParams),
                  tag: tag.slug,
                },
              }}
              key={tag.tag_id}
            >
              {tag.tag_name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
